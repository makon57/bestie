<p align='center'>
  <img src='https://i.imgur.com/sKEQCij.png' height='200px'>
</p>

# [Bestie](https://bestie-rescue.herokuapp.com/)
[Bestie](https://bestie-rescue.herokuapp.com/) is an animal rescue site inspired by [SecondHand Hounds](https://www.secondhandhounds.org/) and the [Animal Humane Society](https://www.animalhumanesociety.org/). It was made for people who are interested in adopting, fostering, or sponsoring a pet. It is a fullstack React App made with a Redux state manager and a backend using Python, Flask, SQL-Alchemy, PostgresSQL, and AWS S3 and other technologies.

---------
| Table of Contents |
| ----------------- |
| 1. [Features](#features) |
| 2. [Installation](#installation) |
| 3. [Technical Implementation Details](#technical-implementation-details) |
| 4. [Technologies](#technologies) |
| 5. [Wiki Documentation](#wiki-documentation) |
| 6. [Future Features](#future-features) |
| 7. [Special Thanks](#special-thanks) |
| 8. [Conclusion](#conclusion) |
| 8. [Contact](#contact) |

------

# Features

## Splash Page
![Splash](https://i.imgur.com/9sTesbK.png)

## Sign Up & Login
![Sign Up](https://i.imgur.com/sHGCig8.png)
![Login](https://i.imgur.com/0WuNxef.png)

## Feed Page
Bestie's feed displays all available bestie pets.
Discover and search for new besties here!
![Feed Page](https://i.imgur.com/SUNfKb3.png)
![Feed Page](https://i.imgur.com/oQZ4Yt7.png)
![Feed Page](https://i.imgur.com/RMO1Wd6.png)
![Feed Page](https://i.imgur.com/YXiekmV.png)

## Profile
### Demo Profile
A regular user's profile show all the applications they've submitted.
![Demo Profile](https://i.imgur.com/77DKnxs.png)
![Demo Apps](https://i.imgur.com/7nVS2eX.png)
![Demo View](https://i.imgur.com/sqt1XDC.png)

### Foster Profile
A foster user's profile will display all the applications they've submitted as well as all the listings they've created alng with the applications that have been submitted for that particular listing, if any.
![Foster Profile](https://i.imgur.com/wu87BEp.png)
![Foster Apps](https://i.imgur.com/BnXAhKQ.png)
![Foster View](https://i.imgur.com/MFOvW3S.png)

## Adoption Form
Add a new adoption form to the database
![Add {resource-1}](https://i.imgur.com/QhrzJqD.png)
Edit your adoption form
![Edit Form](https://i.imgur.com/EPQWibi.png)
Delete your adoption form
![Delete Adopt](https://i.imgur.com/TdpqXDC.png)

## Bestie Listing Form
Add a new besting listing to the database
![Add Bestie](https://i.imgur.com/1eJwBsM.png)
Edit and Delete bestie listing in the database
![Edit bestie](https://i.imgur.com/fUUpSQw.png)


------
# Installation
To build/run project locally, please follow these steps:

1. Clone this repository

```shell
git clone https://github.com/makon57/bestie.git
```

2. Install Pipfile dependencies and create the virtual environment
```shell
pipenv install
```

2. Install npm dependencies for the `/react-app`

```shell
cd react-app
npm install
```

3. In the `/` root directory, create a `.env` based on the `.env.example` with proper settings

4. Setup your PostgreSQL user, password and database and ensure it matches your `.env` file

5. Before running any flask commands, confirm you are in the pipenv virtual env. If not, run the command:
```shell
pipenv shell
```

5. In the root folder, create the database by running in the terminal:
```shell
flask db create
```

6. In the root folder, migrate tables to the database by running in the terminal:
```shell
flask db migrate
```

7. In the root folder, seed the database by running in the terminal:
```shell
flask seed all
```

8. Start the flask backend in the `/` root directory
```shell
flask run
```

9. Start the frontend in the `/react-app` directory

```javascript
npm start
```

-------
# Technical Implementation Details

## Using Python function to seed into the database
I had over fifty listings that need to be seeded into the database and this function helped me do just that.

Part of code is shown below:

![Python Seed](https://i.imgur.com/NtwH6kq.png)


## Using React.Fragments
I was struggling with the requirement of a unique key in a map because it would distort the CSS on my profile component and a span tag wouldn't work, but I was able to do some research and found that React.Fragment worked great and also allowed me to pass a key to it which saved the day.

![React](https://i.imgur.com/RU2itg1.png)


------

# Technologies
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/-JavaScript-F7DF1E?logo=JavaScript&logoColor=333333" /></a>
* <a href="https://www.postgresql.org/"><img src="https://img.shields.io/badge/-PostgreSQL-336791?logo=PostgreSQL&logoColor=white" /></a>
* <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white"></a>
* <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB"></a>
* <a href="https://redux.js.org/"><img src="https://img.shields.io/badge/redux-%23593d88.svg?style=flat&logo=redux&logoColor=white"></a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/-CSS3-1572B6?logo=CSS3" /></a>
* <a href="https://www.python.org/"><img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white" /></a>
* <a href="https://flask.palletsprojects.com/"><img src="https://img.shields.io/badge/Flask-000000?style=flat&logo=flask&logoColor=white" /></a>
* <a href="https://www.heroku.com/home"><img src="https://img.shields.io/badge/Heroku-430098?style=flat&logo=heroku&logoColor=white" /></a>

------
# Wiki Documentation

* [Home](https://github.com/makon57/bestie/wiki)
* [MVP Features List](https://github.com/makon57/bestie/wiki/MVP-Features-List)
* [Database Schema](https://github.com/makon57/bestie/wiki/Database-Schema)
* [User Stories](https://github.com/makon57/bestie/wiki/User-Stories)

-------

# Future Features

- [ ] Search Bar
- [ ] Direct Messages
- [ ] Articles Feed

-------

# Special Thanks

I couldn't have done it without these fellow peers who've given me support and community. Thank you guys are amazing!

[Andrew](https://github.com/andru17urdna), [Henry](https://github.com/hnrywltn), [Pierre](https://github.com/TheGuilbotine), [Lema](https://github.com/lemlooma), [Meagan](https://github.com/meagan13), [Simon](https://github.com/Simonvargas), [Michelle](https://github.com/michellekontoff), [Nico](https://github.com/nicopierson), [John](https://github.com/Jomix-13), [Manna](https://github.com/makon57), [Monte](https://github.com/theflaggship), [Justice](https://github.com/jujmart).

To the mentors who have given me their time and effort, thank you. I appreciate everything you've done.

[Zach](https://github.com/zdwatts), [Olivia](https://github.com/OByrnes), [Ed](https://github.com/edherm), [Javier](https://github.com/javiermortiz), [Peter](https://github.com/Lazytangent).

------
# Conclusion

This has been one of the most challenging projects but also one of the most rewarding projects I've done. This project really pushed my limits and made me break in all sorts of aways.
It has been a rollcoaster from brainstorming to devleopment and finally to production. I've learned so much more about React, Python, SQLAlchemy, AWS S3, and CSS. I'll continue to edit and fix this web application and make sure to implement the future features to further polish and provide the best user experience. Thank you for your time and shoot me a message on any of the linked contact below if you'd like to talk more code.

-------
# Contact

## Manna Kong
<a href="https://www.linkedin.com/in/manna-kong/"><img src="https://i.imgur.com/CQZPAnp.png" height="28" align="middle" /></a>
<a href="https://angel.co/u/manna-kong"><img src="https://i.imgur.com/buLp96m.png" height="28" align="middle" /></a>
<a href="https://github.com/makon57"><img src="https://i.imgur.com/GTHPd3b.png" height="38" align="middle" /></a>
