from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, TextField
# from wtforms import validators
from wtforms.validators import DataRequired, Length, ValidationError
# from app.models import Listing

def valid_age(form, field):
    age = field.data
    if age < 0:
        raise ValidationError("Please enter a valid age greater than zero.")

class ListingEditForm(FlaskForm):
    user_id = IntegerField()
    name = StringField('Name', validators=[DataRequired(), Length(min=0, max=50, message="Name must be less than 50 characters long.")])
    gender = StringField('Gender', validators=[DataRequired()])
    age = IntegerField('Age', validators=[DataRequired(), valid_age])
    pet_type = StringField('Pet Type', validators=[DataRequired()])
    description = TextAreaField('Description', validators=[DataRequired(), Length(min=0, max=2000)])
    image_url = TextField("Image")
