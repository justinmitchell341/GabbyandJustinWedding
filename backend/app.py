from flask import Flask, request, jsonify
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

app = Flask(__name__)

uri = "mongodb+srv://justinmitchell341:YLszB5RlebeMIRFb@weddingapp.aa8r0ns.mongodb.net/?retryWrites=true&w=majority&appName=WeddingApp"
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)


# @app.route('/submit-rsvp', methods=['POST'])
# def submit_rsvp():
#     name = request.form['name']
#     guests = request.form['guests']
#     email = request.form['email']
#     response = request.form['response']

    