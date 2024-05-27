# ticketing_routes.py
from flask import Blueprint, request, jsonify
import sqlite3

ticketing_bp = Blueprint('ticketing', __name__)

# Database configuration function
DATABASE = 'transport.db'

# Database Connection Function
def get_db():
    conn = sqlite3.connect(DATABASE)
    return conn

# Endpoint to Initialize the Database
@ticketing_bp.route('/initialize', methods=['POST'])
def initialize():
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("DROP TABLE IF EXISTS vehicles")
    cursor.execute("DROP TABLE IF EXISTS subscription_types")
    cursor.execute("DROP TABLE IF EXISTS prices")

    # Creating Tables in the Database
    cursor.execute("""
    CREATE TABLE vehicles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        capacity INTEGER NOT NULL
    )
    """)
    
    cursor.execute("""
    CREATE TABLE subscription_types (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        type TEXT NOT NULL,
        duration INTEGER NOT NULL
    )
    """)
    
    cursor.execute("""
    CREATE TABLE prices (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        vehicle_id INTEGER NOT NULL,
        subscription_type_id INTEGER NOT NULL,
        price REAL NOT NULL,
        FOREIGN KEY (vehicle_id) REFERENCES vehicles (id),
        FOREIGN KEY (subscription_type_id) REFERENCES subscription_types (id)
    )
    """)
    
    # Insert dummy data
    cursor.execute("INSERT INTO vehicles (name, capacity) VALUES ('Bus', 50)")
    cursor.execute("INSERT INTO vehicles (name, capacity) VALUES ('Van', 15)")
    
    cursor.execute("INSERT INTO subscription_types (type, duration) VALUES ('Single Pass', 1)")
    cursor.execute("INSERT INTO subscription_types (type, duration) VALUES ('Daily Pass', 1)")
    cursor.execute("INSERT INTO subscription_types (type, duration) VALUES ('Monthly Pass', 30)")
    
    cursor.execute("INSERT INTO prices (vehicle_id, subscription_type_id, price) VALUES (1, 1, 5.0)")
    cursor.execute("INSERT INTO prices (vehicle_id, subscription_type_id, price) VALUES (1, 2, 100.0)")
    cursor.execute("INSERT INTO prices (vehicle_id, subscription_type_id, price) VALUES (1, 3, 1000.0)")
    cursor.execute("INSERT INTO prices (vehicle_id, subscription_type_id, price) VALUES (2, 1, 3.0)")
    cursor.execute("INSERT INTO prices (vehicle_id, subscription_type_id, price) VALUES (2, 2, 60.0)")
    cursor.execute("INSERT INTO prices (vehicle_id, subscription_type_id, price) VALUES (2, 3, 600.0)")
    
    conn.commit()
    return "Database initialized with dummy data", 200

# Endpoint to Get Price
@ticketing_bp.route('/get_price', methods=['POST'])
def get_price():
    data = request.get_json()
    num_passengers = data['num_passengers']
    pass_type = data['pass_type']

    conn = get_db()
    cursor = conn.cursor()

    cursor.execute("SELECT id FROM subscription_types WHERE type = ?", (pass_type,))
    subscription_type_id = cursor.fetchone()[0]

    # Assuming we're calculating the price for a Bus for simplicity
    vehicle_id = 1

    cursor.execute("SELECT price FROM prices WHERE vehicle_id = ? AND subscription_type_id = ?", (vehicle_id, subscription_type_id))
    price_per_passenger = cursor.fetchone()[0]

    total_price = num_passengers * price_per_passenger

    return jsonify(total_price=total_price)
