# from flask import Blueprint, request
# from app.models import db, Image
# from flask_login import current_user, login_required
# from app.AWS import (
#     upload_file_to_s3, allowed_file, get_unique_filename)

# images_routes = Blueprint("images", __name__)


# @images_routes.route("", methods=["POST"])
# @login_required
# def upload_image():
#     if "image" not in request.files:
#         return {"errors": "image required"}, 400

#     image = request.files["image"]

#     if not allowed_file(image.filename):
#         return {"errors": "file type not permitted"}, 400

#     image.filename = get_unique_filename(image.filename)

#     upload = upload_file_to_s3(image)

#     if "url" not in upload:
#         # if the dictionary doesn't have a url key
#         # it means that there was an error when we tried to upload
#         # so we send back that error message
#         return upload, 400

#     image_url = upload["url"]
#     new_image = Image(listing_id=.id, image_url=image_url)
#     db.session.add(new_image)
#     db.session.commit()
#     return {"url": image_url}
