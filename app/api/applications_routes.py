from flask_login.utils import login_required
from app.models.application import Application
from flask import Blueprint, request
from app.models import Application, db
from datetime import datetime
from app.forms import ApplicationCreateForm

applications_routes = Blueprint('applications', __name__)

@applications_routes.route('/<int:id>')
def listing_applications(id):
    applications = Application.query.filter(Application.listing_id == id).all()
    return {application.to_dict()['id']: application.to_dict() for application in applications}


@applications_routes.route('/create', methods=['POST'])
@login_required
def create_application():
    form = ApplicationCreateForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_application = Application(
            listing_id=data['listing_id'],
            user_id=data['user_id'],
            name=data['name'],
            age= data['age'],
            email=data['email'],
            cellphone=data['cellphone'],
            address=data['address'],
            home_type=data['home_type'],
            pets=data['pets'],
            household=data['household'],
            vet_info=data['vet_info'],
            created_at = datetime.now(),
            updated_at= datetime.now()
        )

        db.session.add(new_application)
        db.session.commit()
        return new_application.to_dict()
