from flask import Blueprint, request
from app.models import db, Image
from datetime import datetime
from flask_login import current_user, login_required
from app.AWS import (
    upload_file_to_s3, allowed_file, get_unique_filename)

image_routes = Blueprint("images", __name__)


@image_routes.route("/", methods=["POST"])
@login_required
def upload_image():
    if "image" not in request.files:
        return {"errors": "image required"}, 402

    image = request.files["image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:

        return upload, 401

    url = upload["url"]

    new_image = Image(listing_id=1, image_url=url, created_at = datetime.now(), updated_at= datetime.now())
    db.session.add(new_image)
    db.session.commit()
    return {"url": url}
