import Sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';
import MeetingRoom from '../app/models/MeetingRoom';
import Meeting from '../app/models/Meeting';
import Project from '../app/models/Project';
import RoomItem from '../app/models/RoomItem';
import Item from '../app/models/Item';
import Partner from '../app/models/Partner';
import PartnerProject from '../app/models/PartnerProject';



import databaseConfig from '../config/database';


const models = [
    User, 
    File, 
    MeetingRoom, 
    Meeting, 
    Project,
    RoomItem,
    Item,
    Partner,
    PartnerProject,
];

class Database {
    constructor() {
        this.init();
    }
    init() {
        this.connection = new Sequelize(databaseConfig)

        models.map(model => model.init(this.connection));
        models.map(model => model.associate && model.associate(this.connection.models));
    }
}

export default new Database();