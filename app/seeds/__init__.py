from flask.cli import AppGroup
from .users import seed_users, undo_users
from .listings import seed_listings, undo_listings
from .applications import seed_applications, undo_applications

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_listings()
    seed_applications()

    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_listings()
    undo_applications()

    # Add other undo functions here

