from models import *
from services import *

def seed_poses():
    poses = [
        ("Conquer Breath", "Root"),
        ("Easy Pose", "Sacral"),
        ("Staff Pose", "Solar Plexus"),
        ("Cat Pose", "Heart"),
        ("Sphinx Pose", "Throat"),
        ("Warrior 1 Pose", "Third Eye"),
        ("Gate Pose", "Crown"),
        ("Extended Side Angle Pose", "Root"),
        ("Wide Legged Forward Bend", "Sacral"),
        ("Wide-Angle Seated Forward Bend", "Solar Plexus"),
        ("Reclining Bound Angle Pose", "Heart"),
        ("Hero Pose", "Throat"),
        ("Chair Pose", "Third Eye"),
        ("Mountain Pose", "Crown"),
        ("Bharadvaja's Twist", "Root"),
        ("Salutation Seal", "Sacral"),
        ("Corpse Pose", "Solar Plexus"),
        ("Standing Forward Bend", "Heart"),
        ("Seated Forward Bend", "Throat"),
        ("Childs Pose", "Third Eye"),
        ("Cobra Pose", "Crown"),
        ("Plank Pose", "Root"),
        ("Happy Baby Pose", "Sacral"),
        ("Low Lunge", "Solar Plexus"),
        ("High Lunge", "Heart"),
        ("Standing Half Forward Bend", "Throat"),
        ("Root Bond", "Third Eye"),
        ("Garland Pose", "Crown"),
        ("Extended Puppy Pose", "Root"),
        ("Lion Pose", "Sacral"),
        ("Intense Side Stretch", "Solar Plexus"),
        ("Locust Pose", "Heart"),
        ("Heron Pose", "Throat"),
        ("Fish Pose", "Third Eye"),
        ("Legs-Up-The-Wall Pose", "Crown"),
        ("Cow Face Pose", "Root"),
        ("Warrior II Pose", "Sacral"),
        ("Tree Pose", "Solar Plexus"),
        ("Downward Facing Dog", "Heart"),
        ("Half Lord of the Fishes Pose", "Throat"),
        ("Bridge Pose", "Third Eye"),
        ("Four Limbed Staff", "Crown"),
        ("Standing Forward Bend", "Root"),
        ("Pigeon Pose Head Down", "Sacral"),
        ("Lotus Pose", "Solar Plexus"),
        ("Warrior III", "Heart"),
        ("Cow Pose", "Throat"),
        ("Upward Facing Dog", "Third Eye"),
        ("Shoulder Stand", "Crown"),
        ("Butterfly Pose", "Root")
    ]

    for pose_data in poses:
        new_pose = Pose(name=pose_data[0], chakra=pose_data[1])
        db.session.add(new_pose)

    db.session.commit()
    print("Yoga poses inserted successfully")

if __name__ == '__main__':
    with app.app_context():
        db.drop_all()
        db.create_all()
        seed_poses()  
      