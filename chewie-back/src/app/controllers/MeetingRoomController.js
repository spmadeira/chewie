import * as Yup from 'yup';
import MeetingRoom from '../models/MeetingRoom';

class MeetingRoomController {
    
    async store(req, res) {
        const roomExists = await MeetingRoom.findOne({ where: {name: req.body.name} });

        if(roomExists) {
            return res.status(400).json({ error: 'Meeting room already exists.' });
        }

        const {id, name, description } = await MeetingRoom.create(req.body);

        return res.json({
            id,
            name,
            description,
            
        });
    }
}

export default new MeetingRoomController();