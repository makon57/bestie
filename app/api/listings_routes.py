from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from app.models import Listing, Image, db
from datetime import datetime
from app.forms import ListingCreateForm, ListingEditForm
from app.AWS import (upload_file_to_s3, allowed_file, get_unique_filename)


listings_routes = Blueprint('listings', __name__)



@listings_routes.route('/')
def listings():
    listings = Listing.query.all()

    return {listing.to_dict()['id']: listing.to_dict() for listing in listings}


@listings_routes.route('/<int:id>')
def listing(id):
    listing = Listing.query.get(id)
    return listing.to_dict()

@listings_routes.route("/create", methods=['POST'])
@login_required
def create_listing():
    form = ListingCreateForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_listing = Listing(
            user_id=data['user_id'],
            name=data['name'],
            gender=data['gender'],
            age= data['age'],
            pet_type=data['pet_type'],
            description=data['description'],
            created_at = datetime.now(),
            updated_at= datetime.now()
        )

        db.session.add(new_listing)
        db.session.commit()
        edit_image(new_listing.to_dict())
        return new_listing.to_dict()
    else:
        return {'errors':form.errors},500

@listings_routes.route('/<int:id>', methods=['GET', 'PUT', 'DELETE'])
@login_required
def edit_listings(id):
    listing = Listing.query.filter(Listing.id == id).first()

    if request.method == 'GET':
        return listing.to_dict()

    elif request.method == 'PUT':
        form = ListingEditForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            new_data = form.data
            listing.name = new_data['name']
            listing.gender = new_data['gender']
            listing.age = new_data['age']
            listing.pet_type = new_data['pet_type']
            listing.description = new_data['description']
            listing.updated_at = datetime.now()

            db.session.add(listing)
            db.session.commit()
            edit_image(listing.to_dict())
            return listing.to_dict()
        else:
            return {'errors':form.errors},500

    elif request.method == 'DELETE':
        db.session.delete(listing)
        db.session.commit()
        return {"deletion":"successful"}


@listings_routes.route("/images", methods=["PUT"])
@login_required
def edit_image(data):
    print(data)
    Image.query\
        .filter(Image.listing_id == 1)\
        .update({Image.listing_id: data['id']})
    db.session.commit()
    return
