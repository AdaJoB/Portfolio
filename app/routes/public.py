from flask import Blueprint, render_template, request
from ..models.model import Post, Tag
from .. import db

public = Blueprint("public", __name__)

#==== LANDING PAGE ====#

@public.route("/")
def home():
    posts = Post.query.all()
    return render_template("landing/index.jinja", posts=posts)

#==== BLOG MENU ====#

@public.route("/blog")
def blog():
    posts = Post.query.all()
    return render_template("blog/index.jinja", posts=posts)

#==== CREATE POST ====#

@public.route("/make-post", methods=["GET", "POST"])
def make_post():
    if request.method == "POST":
        post = Post(
            title=request.form["post-title"],
            body=request.form["post-body"],
            date=request.form["post-date"]
        )
        db.session.add(post)
        db.session.commit()
    return render_template("make-post/index.jinja")

#==== POST DETAILS ====#

@public.route("/blog/post/<int:post_id>")
def post(post_id):
    post = Post.query.get_or_404(post_id)
    return render_template("post/index.jinja", post=post)