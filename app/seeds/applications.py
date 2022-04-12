from app.models import db, Application
from datetime import datetime



def seed_applications():
    app1 = Application(
        listing_id=1, user_id=1,
        name="Demo Lition",
        age=21,
        email='demo@aa.io',
        cellphone="(123)234-1223",
        address="1237 Marvin St. E",
        city="Olive",
        state="Montana",
        zipcode="12345",
        home_type="House",
        pets="1 dog, 2 cats",
        household="Two adults, one 3 year-old",
        vet_name="Susan O'Connor",
        vet_cellphone= "(000) 000-0000",
        created_at=datetime.now(), updated_at=datetime.now()
    )
    app2 = Application(
        listing_id=2, user_id=3,
        name="Bobbie Brown",
        age=27,
        email='bobbie@aa.io',
        cellphone="(000)000-000",
        address="1111 Moon Ave. N",
        city="St.Paul",
        state="Minnesota",
        zipcode="12345",
        home_type="Apartment",
        pets="1 dog, 2 cats",
        household="Two adults, one 3 year-old",
        vet_name="Susan O'Connor",
        vet_cellphone= "(000) 000-0000",
        created_at=datetime.now(), updated_at=datetime.now()
    )
    app3 = Application(
        listing_id=3, user_id=6,
        name="Ana Banana",
        age=35,
        email='ana@aa.io',
        cellphone="(111)111-111",
        address="2323 Barley Dr.",
        city="St.Paul",
        state="Minnesota",
        zipcode="12345",
        home_type="Townhouse",
        pets="1 dog, 2 cats",
        household="Two adults, one 3 year-old",
        vet_name="Susan O'Connor",
        vet_cellphone= "(000) 000-0000",
        created_at=datetime.now(), updated_at=datetime.now()
    )
    app4 = Application(
        listing_id=4, user_id=1,
        name="Demo Lition",
        age=21,
        email='demo@aa.io',
        cellphone="(123)234-1223",
        address="1237 Marvin St. E",
        city="Fridley",
        state="Michigan",
        zipcode="12345",
        home_type="House",
        pets="1 dog, 2 cats",
        household="Two adults, one 3 year-old",
        vet_name="Susan O'Connor",
        vet_cellphone= "(000) 000-0000",
        created_at=datetime.now(), updated_at=datetime.now()
    )
    app5 = Application(
        listing_id=5, user_id=3,
        name="Bobbie Brown",
        age=27,
        email='bobbie@aa.io',
        cellphone="(000)000-000",
        address="1111 Moon Ave. N",
        city="San Fransico",
        state="California",
        zipcode="12345",
        home_type="Apartment",
        pets="1 dog, 2 cats",
        household="Two adults, one 3 year-old",
        vet_name="Susan O'Connor",
        vet_cellphone= "(000) 000-0000",
        created_at=datetime.now(), updated_at=datetime.now()
    )
    app6 = Application(
        listing_id=6, user_id=6,
        name="Ana Banana",
        age=35,
        email='ana@aa.io',
        cellphone="(111)111-111",
        address="2323 Barley Dr.",
        city="San Fransico",
        state="California",
        zipcode="12345",
        home_type="Townhouse",
        pets="1 dog, 2 cats",
        household="Two adults, one 3 year-old",
        vet_name="Susan O'Connor",
        vet_cellphone= "(000) 000-0000",
        created_at=datetime.now(), updated_at=datetime.now()
    )
    app7 = Application(
        listing_id=7, user_id=1,
        name="Demo Lition",
        age=21,
        email='demo@aa.io',
        cellphone="(123)234-1223",
        address="1237 Marvin St. E",
        city="New York City",
        state="New York",
        zipcode="12345",
        home_type="House",
        pets="1 dog, 2 cats",
        household="Two adults, one 3 year-old",
        vet_name="Susan O'Connor",
        vet_cellphone= "(000) 000-0000",
        created_at=datetime.now(), updated_at=datetime.now()
    )
    app8 = Application(
        listing_id=8, user_id=3,
        name="Bobbie Brown",
        age=27,
        email='bobbie@aa.io',
        cellphone="(000)000-000",
        address="1111 Moon Ave. N",
        city="New York City",
        state="New York",
        zipcode="12345",
        home_type="Apartment",
        pets="1 dog, 2 cats",
        household="Two adults, one 3 year-old",
        vet_name="Susan O'Connor",
        vet_cellphone= "(000) 000-0000",
        created_at=datetime.now(), updated_at=datetime.now()
    )
    app9 = Application(
        listing_id=7, user_id=6,
        name="Ana Banana",
        age=35,
        email='ana@aa.io',
        cellphone="(111)111-111",
        address="2323 Barley Dr.",
        city="Seattle",
        state="Washington",
        zipcode="12345",
        home_type="Townhouse",
        pets="1 dog, 2 cats",
        household="Two adults, one 3 year-old",
        vet_name="Susan O'Connor",
        vet_cellphone= "(000) 000-0000",
        created_at=datetime.now(), updated_at=datetime.now()
    )
    app10 = Application(
        listing_id=8, user_id=6,
        name="Ana Banana",
        age=35,
        email='ana@aa.io',
        cellphone="(111)111-111",
        address="2323 Barley Dr.",
        city="Rickshaw",
        state="Idaho",
        zipcode="12345",
        home_type="Townhouse",
        pets="1 dog, 2 cats",
        household="Two adults, one 3 year-old",
        vet_name="Susan O'Connor",
        vet_cellphone= "(000) 000-0000",
        created_at=datetime.now(), updated_at=datetime.now()
    )

    s = 0
    things = [app1,app2,app3,app4,app5,app6,app7,app8,app9,app10]

    while s < len(things):
        ss = s + 1
        if db.session.query(Application).filter_by(id=ss).first() is not None:
            pass
        # seed_data = db.session.query(Application).where(name=things[s].name).where(id=s).first()
        elif db.session.query(Application).filter_by(id=ss).first() is None:
            db.session.add(things[s])
        s += 1


    db.session.commit()

def undo_applications():
    db.session.execute('TRUNCATE applications RESTART IDENTITY CASCADE;')
    db.session.commit()
