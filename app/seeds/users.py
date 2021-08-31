from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        name='Demo Lition', email='demo@aa.io', password='password', foster=False)
    foster = User(
        name= 'Foster Monster', email='foster@aa.io', password='password', foster=True)
    marnie = User(
        name='Marnie Barnie', email='marnie@aa.io', password='password', foster=True)
    bobbie = User(
        name='Bobbie Brown', email='bobbie@aa.io', password='password', foster=False)
    manna = User(
        name='Manna Manna', email='manna@aa.io', password='password', foster=True)
    ollie = User(
        name='Ollie Mollie', email='ollie@aa.io', password='password', foster=True)
    ana = User(
        name='Ana Banana', email='ana@aa.io', password='password', foster=False)

    db.session.add(demo)
    db.session.add(foster)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(manna)
    db.session.add(ollie)
    db.session.add(ana)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
