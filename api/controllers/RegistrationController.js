const Sequelize = require("sequelize");
const { RegistrationsServices } = require("../services");
const registrationsServices = new RegistrationsServices();

class RegistrationController {
  static async getRegistration(req, res) {
    const { studentId, registrationId } = req.params;
    try {
      const registration = await registrationsServices.getRecord({
        id: registrationId,
        student_id: studentId,
      });
      return res.status(200).json(registration);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async createRegistration(req, res) {
    const { studentId } = req.params;
    const newRegistration = { ...req.body, student_id: Number(studentId) };
    try {
      const newRegistrationCreated = await registrationsServices.createRecord(
        newRegistration
      );
      return res.status(200).json(newRegistrationCreated);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async updateRegistration(req, res) {
    const { studentId, registrationId } = req.params;
    const newInfo = req.body;
    try {
      await registrationsServices.atualizaRegistros(newInfo, {
        id: Number(registrationId),
        student_id: Number(studentId),
      });
      return res.status(200).json({ mensagem: `id ${registrationId} updated` });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async deleteRegistration(req, res) {
    const { registrationId } = req.params;
    try {
      await registrationsServices.deleteRecord(Number(registrationId));
      return res.status(200).json({ mensagem: `id ${registrationId} deleted` });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async restoreRegistration(req, res) {
    const { registrationId } = req.params;
    try {
      await registrationsServices.restoreRecord(Number(registrationId));
      return res
        .status(200)
        .json({ mensagem: `id ${registrationId} restored` });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async getRegistrationsByClass(req, res) {
    const { classId } = req.params;
    try {
      const allRegistrations = await registrationsServices.findAndCountRecords(
        { class_id: Number(classId), status: "confirmed" },
        { limit: 20, order: [["student_id", "DESC"]] }
      );
      return res.status(200).json(allRegistrations);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async getFullClasses(_req, res) {
    const classLimit = 2;
    try {
      const fullClasses = await registrationsServices.findAndCountRecords(
        { status: "confirmed" },
        {
          attributes: ["class_id"],
          group: ["class_id"],
          having: Sequelize.literal(`count(class_id) >= ${classLimit}`),
        }
      );
      return res.status(200).json(fullClasses.count);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
}

module.exports = RegistrationController;
