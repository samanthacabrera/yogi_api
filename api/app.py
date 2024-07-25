from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from sqlalchemy import MetaData
from werkzeug.middleware.dispatcher import DispatcherMiddleware
from werkzeug.serving import run_simple

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Define SQLAlchemy metadata with naming conventions
metadata = MetaData(naming_convention={
    "ix": "ix_%(column_0_label)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_`%(constraint_name)s`",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
})

# Configure SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app, metadata=metadata)  # Initialize SQLAlchemy with the app

class Pose(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    chakra = db.Column(db.String(50), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "chakra": self.chakra
        }

@app.route('/', methods=['GET']) 
def index():
    return "hello from backend"

@app.route('/poses', methods=['GET'])
def get_all_poses():
    poses = Pose.query.all()
    return jsonify([pose.to_dict() for pose in poses])

@app.route('/poses/<int:id>', methods=['GET'])
def get_pose_by_id(id):
    pose = Pose.query.get(id)
    if pose:
        return jsonify(pose.to_dict())
    return jsonify({"error": "Pose not found"}), 404

@app.route('/poses/<string:chakra>', methods=['GET'])
def get_pose_by_chakra(chakra):
    if chakra:
        poses = Pose.query.filter_by(chakra=chakra).all()
    else:
        poses = Pose.query.all()
    return jsonify([pose.to_dict() for pose in poses])

# Vercel serverless function handler
def handler(request):
    return DispatcherMiddleware(app, {
        '/api': app
    })(request.environ, request.start_response)

if __name__ == "__main__":
    app.run(debug=True)
