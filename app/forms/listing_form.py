from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, TextField
# from wtforms import validators
from wtforms.validators import DataRequired, Length
# from app.models import Listing


class ListingCreateForm(FlaskForm):
    user_id = IntegerField()
    name = StringField('Name', validators=[DataRequired(), Length(min=0, max=50, message="Name must be less than 50 characters.")])
    gender = StringField('Gender', validators=[DataRequired()])
    age = IntegerField('Age', validators=[DataRequired()])
    pet_type = StringField('Pet Type', validators=[DataRequired()])
    description = TextAreaField('Description', validators=[DataRequired(), Length(min=0, max=2000)])
    image = TextField("Image")
