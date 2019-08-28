import sequelize, { Model, Sequelize } from 'sequelize';

class Tools extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        link: Sequelize.STRING,
        description: Sequelize.STRING,
        tags: Sequelize.ARRAY(Sequelize.STRING),
      },
      {
        sequelize,
      }
    );
  }
}

export default Tools;
