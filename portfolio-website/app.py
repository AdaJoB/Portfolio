from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///portfolio.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Blog_Posts(db.Model):
    __tablename__ = 'post'
    post_id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255))
    body = db.Column(db.String(255))
    date = db.Column(db.String(255))

@app.route('/')
def home():
    return render_template('landing/index.jinja')

@app.route('/blog')
def blog():
    posts = Blog_Posts.query.all()
    return render_template('blog/index.jinja', post=posts)

@app.route('/make-post', methods=['GET', 'POST'])
def make_post():
    if request.method == 'POST':
        post_title = request.form.get('post-title')
        post_body = request.form.get('post-body')
        post_date = request.form.get('post-date')
        print(post_title)
        print(post_body)
        print(post_date)
        

        new_entry = Blog_Posts(title=post_title, body=post_body, date=post_date)
        db.session.add(new_entry)
        db.session.commit()


    return render_template('make-post/index.jinja')
    

if __name__ == '__main__':
    app.run(debug=True)
