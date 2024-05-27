# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from intasend import APIService

# app = Flask(__name__)
# CORS(app)

# # Replace with your actual IntaSend credentials
# token = "ISSecretKey_test_15624ded-5d26-4030-9025-6683e48dcf06"
# publishable_key = "ISPubKey_test_f776b131-c148-4734-81ef-fed227f72018"
# service = APIService(token=token, publishable_key=publishable_key, test=True)

# @app.route('/create-payment', methods=['POST'])
# def create_payment():
#     data = request.get_json()
#     amount = data.get('amount')
#     currency = data.get('currency')
#     phone_number = data.get('phone_number')
    
#     try:
#         # Assuming 'mpesa_stk_push' is the correct method to initiate a payment
#         response = service.collect.mpesa_stk_push(
#             phone_number=phone_number,
#             email="joe@doe.com",  # Replace with actual email if available
#             amount=amount,
#             narrative="Purchase"
#         )
#         return jsonify(response), 200
#     except Exception as e:
#         return jsonify({"success": False, "message": str(e)}), 400

# if __name__ == '__main__':
#     app.run(debug=True)
