const database = require("../models");

class PersonController {
  static async listActivePeople(_req, res) {
    try {
      const activePeople = await database.People.findAll();
      return res.status(200).json(activePeople);
    } catch (err) {
      return res.status(500).json(err.messsage);
    }
  }

  static async listPeople(_req, res) {
    try {
      const allPeople = await database.People.scope("all").findAll();
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

  static async findOneRegistration(req, res) {
    const { studentId, registrationId } = req.params;
    try {
      const registration = await database.Registrations.findOne({
        where: { id: Number(registrationId), student_id: Number(studentId) },
      });
      return res.status(200).json(registration);
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
      return res
        .status(400)
        .json({ errors: err.errors.map((err) => err.message) });
    }
  }

  static async createRegistration(req, res) {
    const { studentId } = req.params;
    const newRegistration = { ...req.body, student_id: Number(studentId) };
    try {
      const newRegistrationCreated = await database.Registrations.create(
        newRegistration
      );
      return res.status(200).json(newRegistrationCreated);
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

  static async updateRegistration(req, res) {
    const { studentId, registrationId } = req.params;
    const newInfo = req.body;
    try {
      await database.Registrations.update(newInfo, {
        where: { id: Number(registrationId), student_id: Number(studentId) },
      });
      const updatedRegistration = await database.Registrations.findOne({
        where: { id: Number(registrationId) },
      });
      return res.status(200).json(updatedRegistration);
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

  static async restorePerson(req, res) {
    const { id } = req.params;
    try {
      await database.People.restore({ where: { id: Number(id) } });
      return res.status(200).json({ message: `Id ${id} retored` });
    } catch (err) {
      return res.status(500).json(err.messsage);
    }
  }

  static async restoreRegistration(req, res) {
    const { studentId, registrationId } = req.params;
    try {
      await database.Registrations.restore({
        where: {
          id: Number(registrationId),
          student_id: Number(studentId),
        },
      });
      return res.status(200).json({ message: `Id ${id} restored` });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async deleteRegistration(req, res) {
    const { registrationId } = req.params;
    try {
      await database.Registrations.destroy({
        where: { id: Number(registrationId) },
      });
      return res.status(200).json({ message: `Id ${registrationId} deleted!` });
    } catch (err) {
      return res.status(500).json(err.messsage);
    }
  }

  static async getRegistrations(req, res) {
    const { studentId } = req.params;
    try {
      const person = await database.People.findOne({
        where: { id: Number(studentId) },
      });
      const registrations = await person.getRegisteredClasses();
      return res.status(200).json(registrations);
    } catch (err) {
      return res.status(500).json(err.messsage);
    }
  }
}

module.exports = PersonController;
