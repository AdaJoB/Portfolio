from .. import db

#==== ASSOCIATION TABLE ====#

post_tag = db.Table("post_tag",
    db.Column(
        "post_id",
        db.Integer,
        db.ForeignKey("post.post_id"),
        primary_key=True
    ),
    db.Column(
        "tag_id",
        db.Integer,
        db.ForeignKey("tag.tag_id"),
        primary_key=True
    )
)

#==== MODELS ====#

# POST table
class Post(db.Model):
    __tablename__ = "post"

    post_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.Text, nullable=False)
    body = db.Column(db.Text, nullable=False)
    date = db.Column(db.Text, nullable=False)

    tags = db.relationship("Tag", secondary=post_tag, back_populates="posts")


# TAG table
class Tag(db.Model):
    __tablename__ = "tag"

    tag_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    tag = db.Column(db.Text, nullable=False)

    posts = db.relationship("Post", secondary=post_tag, back_populates="tags")


# USER table

class User(db.Model):
    __tablename__ = "user"

    user_id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.Text, nullable=False)