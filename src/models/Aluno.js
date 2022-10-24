const { Sequelize, Model } = require('sequelize');

class Aluno extends Model {
  static init(sequelize) {
    super.init({
      firstName: Sequelize.STRING,
      lastName: Sequelize.STRING,
      email: Sequelize.STRING,
      tel: Sequelize.INTEGER(11),
      age: Sequelize.INTEGER,
      weight: Sequelize.FLOAT,
      height: Sequelize.FLOAT,
      createdAt: false,
      updatedAt: false,
    }, {
      sequelize,
      modelName: 'Aluno',
    });
    return this;
  }
}

module.exports = Aluno;
