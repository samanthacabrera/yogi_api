from models import *
from services import *

@app.route('/api/poses', methods=['GET'])
def get_all_poses():
    poses = Pose.query.all()
    return jsonify([pose.to_dict() for pose in poses])

@app.route('/api/poses/<int:id>', methods=['GET'])
def get_pose_by_id(id):
    pose = Pose.query.get(id)
    if pose:
        return jsonify(pose.to_dict())
    return jsonify({"error": "Pose not found"}), 404

@app.route('/api/poses/<string:chakra>', methods=['GET'])
def get_pose_by_chakra(chakra):
    if chakra:
        poses = Pose.query.filter_by(chakra=chakra).all()
    else:
        poses = Pose.query.all()
    return jsonify([pose.to_dict() for pose in poses])

def handler(request):
    from werkzeug.middleware.dispatcher import DispatcherMiddleware
    from werkzeug.serving import run_simple

    return DispatcherMiddleware(app, {
        '/api': app
    })
