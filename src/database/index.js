import Sequelize from 'sequelize';

import Tool from '../app/models/Tools';

import databaseConfig from '../config/database';

const models = [Tool];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
