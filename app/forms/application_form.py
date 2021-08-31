
from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField
from wtforms.validators import DataRequired, ValidationError
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



class ApplicationCreateForm(FlaskForm):
    user_id = IntegerField()
    name = StringField('Name', validators=[DataRequired()])
    age = IntegerField('Age', validators=[DataRequired(), adult_age])
    email = StringField('Email', validators=[DataRequired(), email_valid])
    cellphone = StringField('Cell Phone', validators=[DataRequired(), valid_cellphone])
    address = StringField('Address', validators=[DataRequired()])
    home_type = StringField('Home-Type', validators=[DataRequired()])
    pets = TextAreaField('Pets', validators=[DataRequired()])
    household = TextAreaField('Household', validators=[DataRequired()])
    vet_info = TextAreaField('Vet Information', validators=[DataRequired()])
