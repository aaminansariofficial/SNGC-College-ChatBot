from flask import Flask, render_template, request, jsonify
from chat import get_response
import webbrowser
import multiprocessing
import time

app = Flask(__name__)

@app.get("/")
def index_get():
    return render_template("base.html")

@app.post("/predict")
def predict():
    text = request.get_json().get("message")
    # TODO: check if text is valid
    response = get_response(text)

    message = {"answer": response}
    return jsonify(message)

def run_server():
    app.run(debug=True, use_reloader=False)

def open_browser():
    time.sleep(1)
    webbrowser.get('C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe %s').open("http://127.0.0.1:5000")
    # for chrome browser comment the above line and uncomment the below line -
#   webbrowser.get('C:/Program Files/Google/Chrome/Application/Chrome.exe %s').open("http://127.0.0.1:5000")

if __name__ == "__main__":
    server_process = multiprocessing.Process(target=run_server)
    server_process.start()
    open_browser()