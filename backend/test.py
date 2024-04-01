# from flask import Flask, request
# import pymongo

# app = Flask(__name__)

# # Set up MongoDB connection
# client = pymongo.MongoClient("mongodb+srv://justinmitchell341:YLszB5RlebeMIRFb@weddingapp.aa8r0ns.mongodb.net/?retryWrites=true&w=majority&appName=WeddingApp")
# db = client.weddingapp

# @app.route('/submit-form', methods=['POST'])
# def submit_form():
#     data = request.json
#     # Insert data into MongoDB
#     result = db.your_collection.insert_one(data)
#     return {'status': 'success', 'inserted_id': str(result.inserted_id)}

# if __name__ == '__main__':
#     app.run(debug=True)
