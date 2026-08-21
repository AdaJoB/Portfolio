from flask import Blueprint, render_template, request, redirect, url_for
from ..models.model import Post, Tag
from .. import db
import datetime


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

        # get date
        date = datetime.datetime.now()
        formatted_date = f"{date.strftime("%b")} {date.strftime("%d")}, {date.strftime("%Y")}"

        # create new post
        new_post = Post(
            title=request.form["post-title"],
            body=request.form["post-body"],
            date=formatted_date
        )
        db.session.add(new_post)

        
        tags = request.form["post-tags"].split()
        for tag in tags:

            # query to see if tag exists
            result = db.session.scalar(
                db.select(Tag)
                .where(Tag.tag == tag)
            )

            # create new tag it does not exist
            if result is None:  
                new_tag = Tag(
                    tag=tag
                )
                db.session.add(new_tag)
            else:
                new_tag = result

            # create relationship
            new_post.tags.append(new_tag)
            
        db.session.commit()

        # redirect to new published post
        return redirect(url_for("public.post", post_id=new_post.post_id))
            
    return render_template("make-post/index.jinja")

#==== POST DETAILS ====#

@public.route("/blog/post/<int:post_id>")
def post(post_id):
    post = Post.query.get_or_404(post_id)
    return render_template("post/index.jinja", post=post)
    