from .db import db
from datetime import datetime
from app.models import applications, images

class Listing(db.Model):
    __tablename__ = 'listings'

    id = db.Column(db.Integer,primary_key=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    name = db.Column(db.String(50), nullable=False)
    gender = db.Column(db.String(50), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    pet_type = db.Column(db.String(50), nullable=False)
    description = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.Date , nullable=False)
    updated_at = db.Column(db.Date , nullable=False)

    applications = db.relationship("Application", backref=db.backref("listings"), lazy=True)
    images = db.relationship("Image", backref=db.backref("listings", lazy=True))
    user = db.relationship("User", back_populates="listings")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'name': self.name,
            'gender': self.gender,
            'age': self.age,
            'pet_type': self.pet_type,
            'description': self.description,
            'created_at': str(self.created_at),
            'updated_at': str(self.updated_at)
        }

    def get_applications(self):
        return [application.to_dict() for application in self.applications]

    def get_images(self):
        return [image.to_dict() for image in self.images]
