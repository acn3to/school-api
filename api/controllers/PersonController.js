const { PeopleServices } = require("../services");
const peopleServices = new PeopleServices();
class PersonController {
  static async listActivePeople(_req, res) {
    try {
      const activePeople = await peopleServices.getActiveRecords();
      return res.status(200).json(activePeople);
    } catch (err) {
      return res.status(500).json(err.messsage);
    }
  }

  static async listPeople(_req, res) {
    try {
      const allPeople = await peopleServices.getAllRecords();
      return res.status(200).json(allPeople);
    } catch (err) {
      return res.status(500).json(err.messsage);
    }
  }

  static async findOnePerson(req, res) {
    const { id } = req.params;
    try {
      const person = await peopleServices.getRecord({ id });
      return res.status(200).json(person);
    } catch (err) {
      return res.status(400).json(err.messsage);
    }
  }

  static async createPerson(req, res) {
    const newPerson = req.body;
    try {
      const newPersonCreated = await peopleServices.createRecord(newPerson);
      return res.status(200).json(newPersonCreated);
    } catch (err) {
      return res
        .status(400)
        .json({ errors: err.errors.map((err) => err.message) });
    }
  }

  static async updatePerson(req, res) {
    const { id } = req.params;
    const newInfo = req.body;
    try {
      await peopleServices.updateRecord(newInfo, Number(id));
      return res.status(200).json({ message: `id ${id} updated` });
    } catch (err) {
      return res.status(500).json(err.messsage);
    }
  }

  static async deletePerson(req, res) {
    const { id } = req.params;
    try {
      await peopleServices.deleteRecord(Number(id));
      return res.status(200).json({ message: `Id ${id} deleted!` });
    } catch (err) {
      return res.status(500).json(err.messsage);
    }
  }

  static async restorePerson(req, res) {
    const { id } = req.params;
    try {
      const restoredRecord = await peopleServices.restoreRecord(Number(id));
      return res.status(200).json(restoredRecord);
    } catch (err) {
      return res.status(500).json(err.messsage);
    }
  }

  static async getRegistrations(req, res) {
    const { studentId } = req.params;
    try {
      const registrations = await peopleServices.getRegistrationsByStudents({
        id: Number(studentId),
      });
      return res.status(200).json(registrations);
    } catch (err) {
      return res.status(500).json(err.messsage);
    }
  }

  static async cancelPerson(req, res) {
    const { studentId } = req.params;
    try {
      await peopleServices.cancelPersonAndRegistrations(Number(studentId));
      return res.status(200).json({
        message: `Registrations of student ${studentId} were canceled`,
      });
    } catch (err) {
      return res.status(500).json(err.messsage);
    }
  }
}

module.exports = PersonController;
