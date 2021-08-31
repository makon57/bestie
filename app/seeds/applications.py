from app.models import db, Application
from datetime import datetime



def seed_applications():
    app1 = Application(
        listing_id=1, user_id=1,
        name="Demo Lition",
        age=21,
        email='demo@aa.io',
        cellphone="(123)234-1223",
        address="1237 Marvin St. E, Olive, MT 12345",
        home_type="House",
        pets="1 dog, 2 cats",
        household="Two adults, one 3 year-old",
        vet_info="Susan O'Connor (000) 000-0000",
        created_at=datetime.now(), updated_at=datetime.now()
    )
    app2 = Application(
        listing_id=2, user_id=3,
        name="Bobbie Brown",
        age=27,
        email='bobbie@aa.io',
        cellphone="(000)000-000",
        address="1111 Moon Ave. N, Oats, IN 00000",
        home_type="Apartment",
        pets="1 dog, 2 cats",
        household="Two adults, one 3 year-old",
        vet_info="Susan O'Connor (000) 000-0000",
        created_at=datetime.now(), updated_at=datetime.now()
    )
    app3 = Application(
        listing_id=3, user_id=6,
        name="Ana Banana",
        age=35,
        email='ana@aa.io',
        cellphone="(111)111-111",
        address="2323 Barley Dr., Makeshift, UT 90909",
        home_type="Townhouse",
        pets="1 dog, 2 cats",
        household="Two adults, one 3 year-old",
        vet_info="Susan O'Connor (000) 000-0000",
        created_at=datetime.now(), updated_at=datetime.now()
    )
    app4 = Application(
        listing_id=4, user_id=1,
        name="Demo Lition",
        age=21,
        email='demo@aa.io',
        cellphone="(123)234-1223",
        address="1237 Marvin St. E, Olive, MT 12345",
        home_type="House",
        pets="1 dog, 2 cats",
        household="Two adults, one 3 year-old",
        vet_info="Susan O'Connor (000) 000-0000",
        created_at=datetime.now(), updated_at=datetime.now()
    )
    app5 = Application(
        listing_id=5, user_id=3,
        name="Bobbie Brown",
        age=27,
        email='bobbie@aa.io',
        cellphone="(000)000-000",
        address="1111 Moon Ave. N, Oats, IN 00000",
        home_type="Apartment",
        pets="1 dog, 2 cats",
        household="Two adults, one 3 year-old",
        vet_info="Susan O'Connor (000) 000-0000",
        created_at=datetime.now(), updated_at=datetime.now()
    )
    app6 = Application(
        listing_id=6, user_id=6,
        name="Ana Banana",
        age=35,
        email='ana@aa.io',
        cellphone="(111)111-111",
        address="2323 Barley Dr., Makeshift, UT 90909",
        home_type="Townhouse",
        pets="1 dog, 2 cats",
        household="Two adults, one 3 year-old",
        vet_info="Susan O'Connor (000) 000-0000",
        created_at=datetime.now(), updated_at=datetime.now()
    )
    app7 = Application(
        listing_id=7, user_id=1,
        name="Demo Lition",
        age=21,
        email='demo@aa.io',
        cellphone="(123)234-1223",
        address="1237 Marvin St. E, Olive, MT 12345",
        home_type="House",
        pets="1 dog, 2 cats",
        household="Two adults, one 3 year-old",
        vet_info="Susan O'Connor (000) 000-0000",
        created_at=datetime.now(), updated_at=datetime.now()
    )
    app8 = Application(
        listing_id=8, user_id=3,
        name="Bobbie Brown",
        age=27,
        email='bobbie@aa.io',
        cellphone="(000)000-000",
        address="1111 Moon Ave. N, Oats, IN 00000",
        home_type="Apartment",
        pets="1 dog, 2 cats",
        household="Two adults, one 3 year-old",
        vet_info="Susan O'Connor (000) 000-0000",
        created_at=datetime.now(), updated_at=datetime.now()
    )
    app9 = Application(
        listing_id=7, user_id=6,
        name="Ana Banana",
        age=35,
        email='ana@aa.io',
        cellphone="(111)111-111",
        address="2323 Barley Dr., Makeshift, UT 90909",
        home_type="Townhouse",
        pets="1 dog, 2 cats",
        household="Two adults, one 3 year-old",
        vet_info="Susan O'Connor (000) 000-0000",
        created_at=datetime.now(), updated_at=datetime.now()
    )
    app10 = Application(
        listing_id=8, user_id=6,
        name="Ana Banana",
        age=35,
        email='ana@aa.io',
        cellphone="(111)111-111",
        address="2323 Barley Dr., Makeshift, UT 90909",
        home_type="Townhouse",
        pets="1 dog, 2 cats",
        household="Two adults, one 3 year-old",
        vet_info="Susan O'Connor (000) 000-0000",
        created_at=datetime.now(), updated_at=datetime.now()
    )


    db.session.add(app1)
    db.session.add(app2)
    db.session.add(app3)
    db.session.add(app4)
    db.session.add(app5)
    db.session.add(app6)
    db.session.add(app7)
    db.session.add(app8)
    db.session.add(app9)
    db.session.add(app10)


    db.session.commit()

def undo_applications():
    db.session.execute('TRUNCATE applications RESTART IDENTITY CASCADE;')
    db.session.commit()
