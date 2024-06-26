from services import * 

class Pose(db.Model, SerializerMixin):
    __tablename__ = 'poses'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    chakra = db.Column(db.String(50), nullable=False)

    def __init__(self, name, chakra):
        self.name = name
        self.chakra = chakra
