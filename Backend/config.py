import os

basedir = os.path.abspath(os.path.dirname(__file__))

class Config:
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'data.sqlite')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = 'dev'

# config.py
# import os

# basedir = os.path.abspath(os.path.dirname(__file__))

# class Config:
#     SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'data.sqlite')
#     # SQLALCHEMY_DATABASE_URI = 'mysql://root:Brighton1.@localhost/Shop'
#     SQLALCHEMY_TRACK_MODIFICATIONS = False
#     SECRET_KEY = 'dev'

# import os

# class Config:
#     SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
#     SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
#         'sqlite:///' + os.path.join(os.path.abspath(os.path.dirname(__file__)), 'app.db')
#     SQLALCHEMY_TRACK_MODIFICATIONS = False
