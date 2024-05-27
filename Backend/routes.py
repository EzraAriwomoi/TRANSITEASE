from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from models import app, db, User, Ticket, bcrypt
import stripe

CORS(app)

stripe.api_key = app.config['STRIPE_SECRET_KEY']

@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'error': 'Username and password are required'}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    user = User(username=username, password=hashed_password)
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'User registered successfully'}), 201

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()

    if user and bcrypt.check_password_hash(user.password, password):
        access_token = create_access_token(identity=user.id)
        return jsonify({'access_token': access_token}), 200
    else:
        return jsonify({'error': 'Invalid credentials'}), 401

@app.route('/api/tickets', methods=['POST'])
@jwt_required()
def purchase_ticket():
    user_id = get_jwt_identity()
    data = request.json
    mode_of_transport = data.get('modeOfTransport')
    route = data.get('route')
    pickup_point = data.get('pickupPoint')
    destination = data.get('destination')
    ticket_type = data.get('ticketType')
    cost = data.get('cost')
    payment_method = data.get('paymentMethod')

    if not all([mode_of_transport, route, pickup_point, destination, ticket_type, cost, payment_method]):
        return jsonify({'error': 'All fields are required.'}), 400

    # Create a new ticket
    ticket = Ticket(
        user_id=user_id,
        mode_of_transport=mode_of_transport,
        route=route,
        pickup_point=pickup_point,
        destination=destination,
        ticket_type=ticket_type,
        cost=cost,
        payment_method=payment_method
    )
    db.session.add(ticket)
    db.session.commit()

    # Process payment with Stripe
    try:
        charge = stripe.Charge.create(
            amount=int(cost * 100),  # Amount in cents
            currency='usd',
            description=f'Ticket for {route}',
            source=payment_method  # This should be a valid Stripe token from the frontend
        )
    except stripe.error.StripeError as e:
        return jsonify({'error': str(e)}), 400

    # Simulate receipt generation
    receipt = {
        'modeOfTransport': mode_of_transport,
        'route': route,
        'pickupPoint': pickup_point,
        'destination': destination,
        'ticketType': ticket_type,
        'cost': cost,
        'paymentMethod': payment_method
    }
    return jsonify(receipt), 200

if __name__ == '__main__':
    app.run(debug=True)
