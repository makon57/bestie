from .db import db

class Listing(db.Model):
    __tablename__ = 'listings'

    id = db.Column(db.Integer)
