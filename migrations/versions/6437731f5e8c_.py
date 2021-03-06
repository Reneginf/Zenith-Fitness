"""empty message

Revision ID: 6437731f5e8c
Revises: 13dd3914e8d9
Create Date: 2022-05-26 21:18:31.947814

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6437731f5e8c'
down_revision = '13dd3914e8d9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('user', 'is_active')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('is_active', sa.BOOLEAN(), autoincrement=False, nullable=False))
    # ### end Alembic commands ###
