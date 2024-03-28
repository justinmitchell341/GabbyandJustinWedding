from email import message
from flask import Flask, jsonify, render_template, request, redirect, url_for
from pymongo import MongoClient

app = Flask(__name__)

uri = "mongodb+srv://justinmitchell341:YLszB5RlebeMIRFb@weddingapp.aa8r0ns.mongodb.net/?retryWrites=true&w=majority&appName=WeddingApp"
client = MongoClient(uri)
db = client["WeddingApp"]
collection = db["RSVPs"]
@app.route("/submit-rsvp", methods=["POST"])
def submit_rsvp():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    respons = data.get("response")
    guests = data.get("guests")
    
    return jsonify({message: "RSVP submitted successfully"}), 200

if __name__ == "__main__":
    app.run(debug=True)