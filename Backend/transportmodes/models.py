from extensions import db

class TransportMode(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), unique=True, nullable=False)

class TransportFeed(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    car_name = db.Column(db.String(64), nullable=False)
    departure = db.Column(db.String(64), nullable=False)
    route = db.Column(db.String(128), nullable=False)
    price = db.Column(db.Float, nullable=False)
    image_url = db.Column(db.String(128), nullable=False)

def get_transport_modes():
    modes = TransportMode.query.all()
    return {'modes': [mode.name for mode in modes]}

def get_transport_feed():
    feed = TransportFeed.query.all()
    return [
        {
            'car_name': item.car_name,
            'departure': item.departure,
            'route': item.route,
            'image_url': item.image_url
        }
        for item in feed
    ]


# def get_transport_modes():
#     return {
#         'modes': ['Buses', 'Taxis', 'Rides', 'Train']
#     }

# def get_transport_feed():
#     feed = [
#         {
#             'car_name': 'Bus 101',
#             'departure': '11:00 PM',
#             'route': 'From Westlands to Wendani',
#             'image_url': '/static/images/bus1.jpg'
#         },
#         {
#             'car_name': 'Taxi 202',
#             'departure': '09:00 AM',
#             'route': 'From CBD to Westlands',
#             'image_url': '/static/images/taxi1.jpg'
#         },
#         {
#             'car_name': 'Train 303',
#             'departure': '05:00 PM',
#             'route': 'From Nairobi to Mombasa',
#             'image_url': '/static/images/train1.jpg'
#         }
#     ]
#     return feed
