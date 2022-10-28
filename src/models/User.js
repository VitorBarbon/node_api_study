const { Sequelize, Model } = require('sequelize');
const bcryptjs = require('bcryptjs');

class User extends Model {
  static init(sequelize) {
    super.init({
      name:
      {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 24],
            msg: 'Campo nome deve ter entre 3 e 24 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já cadastrado.',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [8, 16],
            msg: 'A senha precisa ter entre 8 e 16 caracteres',
          },
        },
      },
      createdAt: true,
      updatedAt: true,
    }, {
      sequelize,
      modelName: 'User',
    });

    this.addHook('beforeSave', async (user) => {
      if (User.password) user.password_hash = await bcryptjs.hash(user.password, 8);
    });
    return this;
  }
}

module.exports = User;
