# from app.models import db, Image
# from datetime import datetime

# def seed_images():
#     image1 = Image(
#         listing_id=1, image_url="https://i.imgur.com/9uBLi5V.jpg",
#         created_at=datetime.now(), updated_at=datetime.now()
#     )
#     image2 = Image(
#         listing_id=2, image_url="https://s3.amazonaws.com/filestore.rescuegroups.org/3699/pictures/animals/16378/16378454/79833680_500x500.jpg",
#         created_at=datetime.now(), updated_at=datetime.now()
#     )
#     image3 = Image(
#         listing_id=3, image_url="https://assets.animalhumanesociety.org/animalhumanesociety.org/files/styles/animal_450x330/public/adoption/images/large/2021/08/15/46766912-1668-4635-b558-47c5b95c775f.jpg?h=8a14a818&itok=quvM1otg",
#         created_at=datetime.now(), updated_at=datetime.now()
#     )
#     image4 = Image(
#         listing_id=4, image_url="https://s3.amazonaws.com/filestore.rescuegroups.org/3699/pictures/animals/16817/16817818/78944359_500x500.jpg",
#         created_at=datetime.now(), updated_at=datetime.now()
#     )
#     image5 = Image(
#         listing_id=5, image_url="https://s3.amazonaws.com/filestore.rescuegroups.org/3699/pictures/animals/16613/16613658/80250886_363x484.jpg",
#         created_at=datetime.now(), updated_at=datetime.now()
#     )
#     image6 = Image(
#         listing_id=6, image_url="https://s3.amazonaws.com/filestore.rescuegroups.org/3699/pictures/animals/16984/16984997/80560141_500x500.jpg",
#         created_at=datetime.now(), updated_at=datetime.now()
#     )
#     image7 = Image(
#         listing_id=7, image_url="https://s3.amazonaws.com/filestore.rescuegroups.org/3699/pictures/animals/16870/16870388/80253838_500x500.jpg",
#         created_at=datetime.now(), updated_at=datetime.now()
#     )
#     image8 = Image(
#         listing_id=8, image_url="https://s3.amazonaws.com/filestore.rescuegroups.org/3699/pictures/animals/17125/17125776/81266349_500x503.jpg",
#         created_at=datetime.now(), updated_at=datetime.now()
#     )
#     image9 = Image(
#         listing_id=6, image_url="https://s3.amazonaws.com/filestore.rescuegroups.org/3699/pictures/animals/16984/16984997/80560131_500x333.jpg",
#         created_at=datetime.now(), updated_at=datetime.now()
#     )
#     image10 = Image(
#         listing_id=7, image_url="https://s3.amazonaws.com/filestore.rescuegroups.org/3699/pictures/animals/16870/16870388/81459619_500x666.jpg",
#         created_at=datetime.now(), updated_at=datetime.now()
#     )
#     image11 = Image(
#         listing_id=8, image_url="https://s3.amazonaws.com/filestore.rescuegroups.org/3699/pictures/animals/17125/17125776/81269844_500x454.jpg",
#         created_at=datetime.now(), updated_at=datetime.now()
#     )
#     image12 = Image(
#         listing_id=6, image_url="https://s3.amazonaws.com/filestore.rescuegroups.org/3699/pictures/animals/16984/16984997/80560132_500x625.jpg",
#         created_at=datetime.now(), updated_at=datetime.now()
#     )
#     image13 = Image(
#         listing_id=7, image_url="https://s3.amazonaws.com/filestore.rescuegroups.org/3699/pictures/animals/16870/16870388/80253839_500x500.jpg",
#         created_at=datetime.now(), updated_at=datetime.now()
#     )
#     image14 = Image(
#         listing_id=8, image_url="https://s3.amazonaws.com/filestore.rescuegroups.org/3699/pictures/animals/17125/17125776/81269847_500x454.jpg",
#         created_at=datetime.now(), updated_at=datetime.now()
#     )
#     image15 = Image(
#         listing_id=7, image_url="https://s3.amazonaws.com/filestore.rescuegroups.org/3699/pictures/animals/16870/16870388/80253840_500x500.jpg",
#         created_at=datetime.now(), updated_at=datetime.now()
#     )
#     image16 = Image(
#         listing_id=8, image_url="https://s3.amazonaws.com/filestore.rescuegroups.org/3699/pictures/animals/17125/17125776/81266350_500x700.jpg",
#         created_at=datetime.now(), updated_at=datetime.now()
#     )


#     db.session.add(image1)
#     db.session.add(image2)
#     db.session.add(image3)
#     db.session.add(image4)
#     db.session.add(image5)
#     db.session.add(image6)
#     db.session.add(image7)
#     db.session.add(image8)
#     db.session.add(image9)
#     db.session.add(image10)
#     db.session.add(image11)
#     db.session.add(image12)
#     db.session.add(image13)
#     db.session.add(image14)
#     db.session.add(image15)
#     db.session.add(image16)

#     db.session.commit()

# def undo_images():
#     db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
#     db.session.commit()
