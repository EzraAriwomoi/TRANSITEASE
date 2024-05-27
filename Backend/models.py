from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager

app = Flask(__name__)
app.config.from_object('config.Config')
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), unique=True, nullable=False)
    password = db.Column(db.String(128), nullable=False)

    def __repr__(self):
        return f'<User {self.username}>'

class Ticket(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    mode_of_transport = db.Column(db.String(64), nullable=False)
    route = db.Column(db.String(64), nullable=False)
    pickup_point = db.Column(db.String(64), nullable=False)
    destination = db.Column(db.String(64), nullable=False)
    ticket_type = db.Column(db.String(64), nullable=False)
    cost = db.Column(db.Float, nullable=False)
    payment_method = db.Column(db.String(64), nullable=False)

    def __repr__(self):
        return f'<Ticket {self.id}>'
