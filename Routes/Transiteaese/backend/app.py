from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from config import Config
from transportmodes.views import transportmodes_bp

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
CORS(app)  # Enable CORS for all routes

app.register_blueprint(transportmodes_bp, url_prefix='/transportmodes')

if __name__ == '__main__':
    app.run(debug=True)
