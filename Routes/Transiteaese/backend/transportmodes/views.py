from flask import jsonify, current_app
from . import transportmodes_bp
from .models import get_transport_modes, get_transport_feed

@transportmodes_bp.route('/modes', methods=['GET'])
def get_modes():
    try:
        transport_modes = get_transport_modes()
        return jsonify(transport_modes), 200
    except Exception as e:
        current_app.logger.error(f"Error fetching transport modes: {e}")
        return jsonify({"error": "Unable to fetch transport modes"}), 500

@transportmodes_bp.route('/feed', methods=['GET'])
def get_feed():
    try:
        feed = get_transport_feed()
        return jsonify(feed), 200
    except Exception as e:
        current_app.logger.error(f"Error fetching transport feed: {e}")
        return jsonify({"error": "Unable to fetch transport feed"}), 500
