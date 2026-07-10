from flask import Blueprint, render_template, request
from ..models.post import BlogPost
from .. import db

public = Blueprint("public", __name__)

@public.route("/")
def home():
    return render_template("landing/index.jinja")

@public.route("/blog")
def blog():
    post = BlogPost.query.all()
    return render_template("blog/index.jinja", post=post)

@public.route("/make-post", methods=["GET", "POST"])
def make_post():
    if request.method == "POST":
        post = BlogPost(
            title=request.form["post-title"],
            body=request.form["post-body"],
            date=request.form["post-date"]
        )
        db.session.add(post)
        db.session.commit()
    return render_template("make-post/index.jinja")