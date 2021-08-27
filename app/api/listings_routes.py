from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from app.models import Listing, Image, db
from datetime import datetime
from app.forms import ListingCreateForm
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
        new_listing = Listing(user_id=data['user_id'], name=data['name'] , gender=data['gender'], age= data['age'], pet_type=data['pet_type'], description=data['description'], created_at = datetime.now(), updated_at= datetime.now())
        db.session.add(new_listing)
        db.session.commit()
        return new_listing.to_dict()
    else:
        return {'errors':form.errors},500

@listings_routes.route('/<int:id>', methods=['GET', 'PUT', 'DELETE'])
@login_required
def edit_listings(id):
    listing = Listing.query.filter(Listing.id == id).first()
    print(listing)

    if request.method == 'GET':
        return listing.to_dict()

    # elif request.method == 'PUT':
    #     form = ListingEditForm()
    #     form['csrf_token'].data = request.cookies['csrf_token']
    #     if form.validate_on_submit():
    #         new_data = form.data
    #         product.name = new_data['name']
    #         product.description = new_data['description']
    #         product.price = new_data['price']
    #         product.quantity = new_data['quantity']
    #         product.image = new_data['image']
    #         product.updated_at = datetime.now()

    #         db.session.add(product)
    #         db.session.commit()
    #         return product.to_dict()
    #     else:
    #         return {'errors':form.errors},500

    elif request.method == 'DELETE':
        db.session.delete(listing)
        db.session.commit()
        return {"deletion":"successful"}






@listings_routes.route("/images", methods=['POST'])
def upload_image():
    print('--------------------')
    print(request.files)
    if "image" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]
    # flask_login allows us to get the current user from the request
    new_image = Image(listing_id=image.listing_id, image_url=url)
    db.session.add(new_image)
    db.session.commit()
    return {"url": url}
