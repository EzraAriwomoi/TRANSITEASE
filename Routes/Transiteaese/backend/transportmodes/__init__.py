from flask import Blueprint

transportmodes_bp = Blueprint('transportmodes', __name__)

from . import views
