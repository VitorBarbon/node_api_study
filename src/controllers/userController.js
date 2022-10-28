const User = require('../models/User');

class UserController {
  async store(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (e) {
      console.log(e);
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      return res.status(200).json(user);
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);

      console.log(id, user.name);
      if (!id) {
        return res.status(400).json({
          errors: ['missing ID.'],
        });
      }

      if (!user) {
        return res.status(400).json({
          errors: ['User does not exist.'],
        });
      }

      const newDataUser = await user.update(req.body);
      return res.status(200).json(newDataUser);
    } catch (e) {
      return res.json(null);
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);

      console.log(id, user.name);
      if (!id) {
        return res.status(400).json({
          errors: ['missing ID.'],
        });
      }

      if (!user) {
        return res.status(400).json({
          errors: ['User does not exist.'],
        });
      }

      await user.destroy();
      return res.status(200).json(`${user.name} deletado com succeso`);
    } catch (e) {
      return res.json(null);
    }
  }
}

export default new UserController();
