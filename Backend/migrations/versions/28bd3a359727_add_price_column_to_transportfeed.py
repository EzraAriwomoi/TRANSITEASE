"""Add price column to TransportFeed

Revision ID: 28bd3a359727
Revises: 
Create Date: 2024-05-24 01:25:00.384200

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '28bd3a359727'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('transport_feed', schema=None) as batch_op:
        batch_op.add_column(sa.Column('price', sa.Float(), nullable=False, server_default='0.0'))

    # Remove server default after the column has been created
    with op.batch_alter_table('transport_feed', schema=None) as batch_op:
        batch_op.alter_column('price', server_default=None)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('transport_feed', schema=None) as batch_op:
        batch_op.drop_column('price')
    # ### end Alembic commands ###
