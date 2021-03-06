from flask_login.utils import login_required
from flask import Blueprint, request
from app.models import Application, db
from datetime import datetime
from app.forms import ApplicationCreateForm
from app.forms import EditApplicationForm

applications_routes = Blueprint('applications', __name__)

@applications_routes.route('/')
def applications():
    applications = Application.query.all()
    data = {application.to_dict()['id']: application.to_dict() for application in applications}
    return data

@applications_routes.route("/create", methods=['POST'])
@login_required
def create_application():
    form = ApplicationCreateForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_application = Application(
            listing_id=data['listingId'],
            user_id=data['userId'],
            name=data['name'],
            age= data['age'],
            email=data['email'],
            cellphone=data['cellphone'],
            address=data['address'],
            city=data['city'],
            state=data['state'],
            zipcode=data['zipcode'],
            home_type=data['homeType'],
            pets=data['pets'],
            household=data['household'],
            vet_name=data['vetName'],
            vet_cellphone=data['vetCellphone'],
            created_at = datetime.now(),
            updated_at= datetime.now()
        )

        db.session.add(new_application)
        db.session.commit()
        return new_application.to_dict()
    else:
        return {'errors':form.errors},500


@applications_routes.route('/<int:id>', methods=['GET', 'PUT', 'DELETE'])
@login_required
def edit_application(id):
    application = Application.query.filter(Application.id == id).one()

    if request.method == 'GET':
        return application.to_dict()

    elif request.method == 'PUT':
        form = EditApplicationForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            new_data = form.data
            application.name=new_data['name'],
            application.age= new_data['age'],
            application.email=new_data['email'],
            application.cellphone=new_data['cellphone'],
            application.address=new_data['address'],
            application.city=new_data['city'],
            application.state=new_data['state'],
            application.zipcode=new_data['zipcode'],
            application.home_type=new_data['homeType'],
            application.pets=new_data['pets'],
            application.household=new_data['household'],
            application.vet_name=new_data['vetName'],
            application.vet_cellphone=new_data['vetCellphone']
            application.updated_at= datetime.now()

            db.session.add(application)
            db.session.commit()
            return application.to_dict()
        else:
            return {'errors':form.errors},500

    elif request.method == 'DELETE':
        db.session.delete(application)
        db.session.commit()
        return {"deletion":"successful"}


# @applications_routes.route('/<int:id>/user')
# @login_required
# def user_applications(id):
#     applications = Application.query.filter(Application.user_id == id).all()
#     return {application.to_dict()['id']: application.to_dict() for application in applications}
