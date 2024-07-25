from models import *
from services import *


@app.route('/')
def index():
    return 'Hello, from the backend'

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

if __name__ == "__main__":
    app.run(debug=True)