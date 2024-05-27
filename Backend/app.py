# main application file

from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from config import Config
from extensions import db  # Import the db instance
from transportmodes.views import transportmodes_bp
from auth_routes import auth_bp
from ticketing_routes import ticketing_bp  # Import the new ticketing blueprint
from intasend import APIService

# Replace with your actual IntaSend credentials
token = "ISSecretKey_test_15624ded-5d26-4030-9025-6683e48dcf06"
publishable_key = "ISPubKey_test_f776b131-c148-4734-81ef-fed227f72018"
service = APIService(token=token, publishable_key=publishable_key, test=True)

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    db.init_app(app)        # Initialize the app with SQLAlchemy
    migrate = Migrate(app, db)  
    CORS(app)
    
    app.register_blueprint(transportmodes_bp, url_prefix='/transportmodes')
    app.register_blueprint(auth_bp, url_prefix='/auth')
    app.register_blueprint(ticketing_bp, url_prefix='/ticketing')  # Register the new blueprint
    
    with app.app_context():
        db.create_all()

    return app

app = create_app()

@app.route('/create-payment', methods=['POST'])
def create_payment():
    data = request.get_json()
    amount = data.get('amount')
    currency = data.get('currency')
    phone_number = data.get('phone_number')
    
    try:
        # Initiate the payment with IntaSend
        response = service.collect.mpesa_stk_push(
            phone_number=phone_number,
            email="joe@doe.com",  # Replace with actual email if available
            amount=amount,
            narrative="Purchase"
        )
        # Assuming response is a dictionary with 'success' key
        return jsonify({"success": True, "message": "Payment initiated successfully", "data": response}), 200
    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 400
    
if __name__ == '__main__':
    app.run(debug=True)
