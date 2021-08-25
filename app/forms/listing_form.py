from flask_wtf import FlaskForm
from wtforms import StringField, DecimalField, TextAreaField, IntegerField, TextField
from wtforms import validators
from wtforms.fields.core import SelectField
from wtforms.validators import DataRequired, Length, NumberRange, ValidationError
from app.models import Listing


class ListingCreateForm(FlaskForm):
    user_id = IntegerField()
    name = StringField('Name', validators=[DataRequired()])
    gender = SelectField('Gender', choices=[('Female', 'Male')], validators=[DataRequired()])
    age = IntegerField('Age', validators=[DataRequired()])
    pet_type = SelectField('Pet Type', choices=[('Dog', 'Cat', 'Rabbit', 'Guinea Pig', 'Hamster', 'Other')], validators=[DataRequired()])
    description = TextAreaField('Description', validators=[DataRequired()])
    image = TextField("Image")
