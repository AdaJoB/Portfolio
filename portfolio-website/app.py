from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///portfolio.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class PostTitles(db.Model):
    __tablename__ = 'title'
    title_id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255))

@app.route('/')
def home():
    return render_template('landing/index.jinja')

@app.route('/blog')
def blog():
    blog_posts = PostTitles.query.all()
    return render_template('blog/index.jinja', title=blog_posts)

if __name__ == '__main__':
    app.run(debug=True)
