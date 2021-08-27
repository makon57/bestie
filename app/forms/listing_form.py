from flask_wtf import FlaskForm
from wtforms import StringField, DecimalField, TextAreaField, IntegerField, TextField
from wtforms import validators
from wtforms.fields.core import SelectField
from wtforms.validators import DataRequired, Length, NumberRange, ValidationError
from app.models import Listing


class ListingCreateForm(FlaskForm):
    user_id = IntegerField()
    name = StringField('Name', validators=[DataRequired()])
    gender = StringField('Gender', validators=[DataRequired()])
    age = IntegerField('Age', validators=[DataRequired()])
    pet_type = StringField('Pet Type', validators=[DataRequired()])
    description = TextAreaField('Description', validators=[DataRequired()])
    image = TextField("Image")
