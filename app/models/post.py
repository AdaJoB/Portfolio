from .. import db

#==== POSTS TABLE ====#

class BlogPost(db.Model):
    __tablename__ = "post"

    post_id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text, nullable=False)
    body = db.Column(db.Text, nullable=False)
    date = db.Column(db.Text, nullable=False)