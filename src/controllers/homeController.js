const Aluno = require('../models/Aluno');

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      firstName: 'Vitor',
      lastName: 'Barbon',
      email: 'dev.vitorbarbon@gmail.com',
      tel: 1,
      age: 21,
      weight: 57.5,
      height: 1.74,
    });

    res.json(novoAluno);
  }
}

export default new HomeController();
