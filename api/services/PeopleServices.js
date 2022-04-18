const Services = require("./Services.js");
const database = require("../models");

class PeopleServices extends Services {
  constructor() {
    super("People");
    this.registrations = new Services("Registrations");
  }

  async getActiveRecords(where = {}) {
    return database[this.modelName].findAll({ where: { ...where } });
  }

  async getAllRecords(where = {}) {
    return database[this.modelName]
      .scope("all")
      .findAll({ where: { ...where } });
  }

  async cancelPersonAndRegistrations(studentId) {
    return database.sequelize.transaction(async (transaction) => {
      await super.updateRecord({ active: false }, studentId, {
        transaction: transaction,
      });
      await this.registrations.updateRecords(
        { status: "canceled" },
        { student_id: studentId },
        { transaction: transaction }
      );
    });
  }

  async getRegistrationsByStudents(where = {}) {
    const registrations = await database[this.modelName].findOne({
      where: { ...where },
    });
    return registrations.getRegisteredClasses();
  }
}

module.exports = PeopleServices;
