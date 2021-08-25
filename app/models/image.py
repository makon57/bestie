from .db import db

class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer,primary_key=True, nullable=False)
    listing_id = db.Column(db.Integer, db.ForeignKey('listings.id'), nullable=False)
    image_url = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.Date , nullable=False)
    updated_at = db.Column(db.Date , nullable=False)
