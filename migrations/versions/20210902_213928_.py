"""empty message

Revision ID: 389c41867d7a
Revises: ee6c40f2517c
Create Date: 2021-09-02 21:39:28.042503

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '389c41867d7a'
down_revision = 'ee6c40f2517c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('listings', sa.Column('image', sa.Text(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('listings', 'image')
    # ### end Alembic commands ###
