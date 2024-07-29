from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/games/<path:filename>')
def download_game(filename):
    # Serve the executable file from the 'output' directory
    return send_from_directory('output', filename)

if __name__ == '__main__':
    app.run(debug=True)
