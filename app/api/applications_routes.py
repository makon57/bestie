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


@applications_routes.route("/create", methods=['POST'])
@login_required
def create_application():
    print(request.get_json())
    form = ApplicationCreateForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print('-----------')
    print(form.data)
    if form.validate_on_submit():
        data = request.get_json()
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
            vet_info=data['vetInfo'],
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
def edit_application(listing_id, user_id):
    application = Application.query.filter(Application.user_id == user_id and Application.listing_id == listing_id)

    if request.method == 'GET':
        return application.to_dict()

    # elif request.method == 'PUT':
    #     form = ApplicationEditForm()
    #     form['csrf_token'].data = request.cookies['csrf_token']
    #     if form.validate_on_submit():
    #         new_data = form.data
    #         application.listing_id=new_data['listingId'],
    #         application.user_id=new_data['userId'],
    #         application.name=new_data['name'],
    #         application.age= new_data['age'],
    #         application.email=new_data['email'],
    #         application.cellphone=new_data['cellphone'],
    #         application.address=new_data['address'],
    #         application.city=new_data['city'],
    #         application.state=new_data['state'],
    #         application.zipcode=new_data['zipcode'],
    #         application.home_type=new_data['homeType'],
    #         application.pets=new_data['pets'],
    #         application.household=new_data['household'],
    #         application.vet_info=new_data['vetInfo'],
    #         application.updated_at= datetime.now()

    #         db.session.add(application)
    #         db.session.commit()
    #         return application.to_dict()
    #     else:
    #         return {'errors':form.errors},500

    elif request.method == 'DELETE':
        db.session.delete(application)
        db.session.commit()
        return {"deletion":"successful"}

@applications_routes.route('/<int:id>/user')
@login_required
def user_applications(id):
    applications = Application.query.filter(Application.user_id == id).all()
    return {application.to_dict()['id']: application.to_dict() for application in applications}
