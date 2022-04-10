const database = require("../models");

class PersonController {
  static async listPeople(_req, res) {
    try {
      const allPeople = await database.People.findAll();
      return res.status(200).json(allPeople);
    } catch (err) {
      return res.status(500).json(err.messsage);
    }
  }

  static async findOnePerson(req, res) {
    const { id } = req.params;
    try {
      const person = await database.People.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(person);
    } catch (err) {
      return res.status(400).json(err.messsage);
    }
  }

  static async createPerson(req, res) {
    const newPerson = req.body;
    try {
      const newPersonCreated = await database.People.create(newPerson);
      return res.status(200).json(newPersonCreated);
    } catch (err) {
      return res.status(500).json(err.messsage);
    }
  }

  static async updatePerson(req, res) {
    const { id } = req.params;
    const newInfo = req.body;
    try {
      await database.People.update(newInfo, { where: { id: Number(id) } });
      const updatedPerson = await database.People.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(updatedPerson);
    } catch (err) {
      return res.status(500).json(err.messsage);
    }
  }

  static async deletePerson(req, res) {
    const { id } = req.params;
    try {
      await database.People.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ message: `Id ${id} deleted!` });
    } catch (err) {
      return res.status(500).json(err.messsage);
    }
  }
}

module.exports = PersonController;
