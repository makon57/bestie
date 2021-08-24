from .db import db

class Application(db.Model):
    __tablename__ = 'applications'

    id = db.Column(db.Integer,primary_key=True, nullable=False)
    listing_id = db.Column(db.Integer, db.ForeignKey('listings.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    home_type = db.Column(db.String(50), nullable=False)
    pets = db.Column(db.Text, nullable=False)
    household = db.Column(db.Text, nullable=False)
    vet_info = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.Date , nullable=False)
    updated_at = db.Column(db.Date , nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'listing_id': self.listing_id,
            'user_id': self.user_id,
            'home_type': self.home_type,
            'pets': self.pets,
            'household' : self.household,
            'vet_info': self.vet_info,
            'created_at': str(self.created_at),
            'updated_at': str(self.updated_at)
        }
