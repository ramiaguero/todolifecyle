from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson.objectid import ObjectId

app = Flask(__name__)
CORS(app)

# MongoDB setup
client = MongoClient('mongodb://localhost:27017/')
db = client.todo_db
todos = db.todos

@app.route('/todos', methods=['GET'])
def get_todos():
    all_todos = list(todos.find())
    for todo in all_todos:
        todo['_id'] = str(todo['_id'])
    return jsonify(all_todos)

@app.route('/todos', methods=['POST'])
def create_todo():
    todo = request.json
    todos.insert_one(todo)
    todo['_id'] = str(todo['_id'])
    return jsonify(todo)

@app.route('/todos/<id>', methods=['PUT'])
def update_todo(id):
    updated_todo = request.json
    todos.update_one({'_id': ObjectId(id)}, {'$set': updated_todo})
    return jsonify(updated_todo)

@app.route('/todos/<id>', methods=['DELETE'])
def delete_todo(id):
    todos.delete_one({'_id': ObjectId(id)})
    return '', 204

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
    
if __name__ == '__main__':
    print("Starting Flask server...")
    app.run(debug=True, host='0.0.0.0', port=5000)

