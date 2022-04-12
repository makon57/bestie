import os
import urllib.parse
from urllib.parse import quote


class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    # SQLAlchemy 1.4 no longer supports url strings that start with 'postgres'
    # (only 'postgresql') but heroku's postgres add-on automatically sets the
    # url in the hidden config vars to start with postgres.
    # so the connection uri must be updated here

    DB_USER = os.environ.get('DB_USER')
    DB_PASSWORD= urllib.parse.quote(os.environ.get('DB_PASSWORD'))
    DB_ADDR = os.environ.get('DB_ADDR')
    DB_DATABASE = os.environ.get('DB_DATABASE')
    URL = (f'postgresql://{DB_USER}:{DB_PASSWORD}@{DB_ADDR}/{DB_DATABASE}')
    SQLALCHEMY_DATABASE_URI = URL
    SQLALCHEMY_ECHO = True

    # print(DB_PASSWORD)
    # print(URL)
