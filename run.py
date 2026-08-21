from app import create_app
import markdown

app = create_app()

@app.template_filter('markdown')
def render_markdown(text):
    return markdown.markdown(text, extensions=['fenced_code', 'tables', 'codehilite'])

if __name__ == "__main__":
    app.run(debug=True)