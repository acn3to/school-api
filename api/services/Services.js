const database = require("../models");

class Services {
  constructor(modelName) {
    this.modelName = modelName;
  }

  async getAllRecords() {
    return database[this.modelName].findAll();
  }

  async getRecord() {}

  async createRecord() {}

  async updateRecord(updatedRecords, id, transaction = {}) {
    return database[this.modelName].update(
      updatedRecords,
      {
        where: { id: id },
      },
      transaction
    );
  }

  async updateRecords(updatedRecords, where, transaction = {}) {
    return database[this.modelName].update(
      updatedRecords,
      { where: { ...where } },
      transaction
    );
  }

  async deleteRecord() {}
}

module.exports = Services;
