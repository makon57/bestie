
from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField
from wtforms.validators import DataRequired, ValidationError, Length
import re

def adult_age(form, field):
    age = field.data
    if age < 17:
        raise ValidationError("You must be 18 and over to adopt a bestie.")

def email_valid(form, field):
    email = field.data
    if re.match(r"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$", email):
        return
    else:
        raise ValidationError('Please provide a valid email address.')

def valid_cellphone(form, field):
    cellphone = field.data
    if re.match(r"^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$", cellphone):
        return
    else:
        raise ValidationError('Please provide a valid cellphone number.')

def valid_zip(form, field):
    zipcode = field.data
    if re.match(r"^\d{5}(?:[-\s]\d{4})?$", zipcode):
        return
    else:
        raise ValidationError('Please provide a valid zipcode.')

# def valid_state(form, field):
#     state = field.data
#     if len(state) < 4:
#         raise ValidationError('Please provide a valid state. No abreviations.')

# def valid_state(form, field):
#     homeType = field.data
#     if len(homeType) < 4:
#         raise ValidationError('Please provide a valid state. No abreviations.')

class ApplicationCreateForm(FlaskForm):
    listingId = IntegerField('listingId', validators=[DataRequired()])
    userId = IntegerField('useId', validators=[DataRequired()])
    name = StringField('Name', validators=[DataRequired(), Length(min=0, max=50, message="Name must be between less than 50 characters.")])
    age = IntegerField('Age', validators=[DataRequired(), adult_age])
    email = StringField('Email', validators=[DataRequired(), email_valid, Length(min=0, max=255)])
    cellphone = StringField('Cell Phone', validators=[DataRequired(), valid_cellphone])
    address = StringField('Address', validators=[DataRequired(), Length(min=0, max=255)])
    city = StringField('City', validators=[DataRequired(), Length(min=0, max=50)])
    state = StringField('State', validators=[DataRequired()])
    zipcode = StringField('Zip Code', validators=[DataRequired(), valid_zip])
    homeType = StringField('Home-Type', validators=[DataRequired()])
    pets = TextAreaField('Pets', validators=[DataRequired(), Length(min=0, max=2000)])
    household = TextAreaField('Household', validators=[DataRequired(), Length(min=0, max=2000)])
    vetName = StringField('Vet Name', validators=[DataRequired(), Length(min=0, max=50, message="Name must be less than 50 characters.")])
    vetCellphone = StringField('Vet Cellphone', validators=[DataRequired(), valid_cellphone])
