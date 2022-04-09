const database = require("../models");

class PersonController {
  static async listPeople(req, res) {
    try {
      const allPeople = await database.People.findAll();
      return res.status(200).json(allPeople);
    } catch (err) {
      return res.status(500).json(err.messsage);
    }
  }
}

module.exports = PersonController;
