from app.models.application import Application
from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>/applications')
@login_required
def user_applications(id):
    applications = Application.query.filter(Application.user_id == id).all()
    return {application.to_dict()['id']: application.to_dict() for application in applications}
