from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField
from wtforms import validators
from wtforms.validators import DataRequired, ValidationError
from app.models import User
import re

def user_exists(form, field):
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')

def email_valid(form, field):
    email = field.data
    if re.match(r"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$", email):
        return
    else:
        raise ValidationError('Please provide a valid email address.')


class SignUpForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired(), user_exists, email_valid])
    password = StringField('password', validators=[DataRequired()])
    foster = BooleanField('foster')
