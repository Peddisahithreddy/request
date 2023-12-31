"""empty message

Revision ID: e92ea9527d38
Revises: ceda39b58160
Create Date: 2023-12-26 16:32:46.940868

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e92ea9527d38'
down_revision = 'ceda39b58160'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('attendance', schema=None) as batch_op:
        batch_op.alter_column('duration',
               existing_type=sa.DATE(),
               type_=sa.Interval(),
               existing_nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('attendance', schema=None) as batch_op:
        batch_op.alter_column('duration',
               existing_type=sa.Interval(),
               type_=sa.DATE(),
               existing_nullable=True)

    # ### end Alembic commands ###
