from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/g1')
def g1():
    return render_template('stone_paper.html')
@app.route('/g2')
def g2():
    return render_template('snake.html')

@app.route('/g3')
def g3():
    return render_template('4_in_row.html')
@app.route('/g4')
def g4():
    return render_template('x_o.html')


@app.route('/games/<path:filename>')
def download_game(filename):
    # Serve the executable file from the 'output' directory
    return send_from_directory('output', filename)

if __name__ == '__main__':
    app.run(debug=True)
