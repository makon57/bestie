from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, TextField
# from wtforms import validators
from wtforms.validators import DataRequired
# from app.models import Listing


class ListingCreateForm(FlaskForm):
    user_id = IntegerField()
    name = StringField('Name', validators=[DataRequired()])
    gender = StringField('Gender', validators=[DataRequired()])
    age = IntegerField('Age', validators=[DataRequired()])
    pet_type = StringField('Pet Type', validators=[DataRequired()])
    description = TextAreaField('Description', validators=[DataRequired()])
    image = TextField("Image")
