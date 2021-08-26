from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Listing, Image

listings_routes = Blueprint('listings', __name__)


@listings_routes.route('/')
def listings():
    listings = Listing.query.all()

    return {'listings': [listing.to_dict() for listing in listings]}


@listings_routes.route('/<int:id>')
def listing(id):
    listing = Listing.query.get(id)
    return listing.to_dict()
