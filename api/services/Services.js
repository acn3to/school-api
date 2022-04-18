const database = require("../models");

class Services {
  constructor(modelName) {
    this.modelName = modelName;
  }

  async getAllRecords(where = {}) {
    return database[this.modelName].findAll({ where: { ...where } });
  }

  async getRecord(where = {}) {
    return database[this.modelName].findOne({ where: { ...where } });
  }

  async createRecord(data) {
    return database[this.modelName].create(data);
  }

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

  async deleteRecord(id) {
    return database[this.modelName].destroy({ where: { id: id } });
  }

  async restoreRecord(id) {
    return database[this.modelName].restore({ where: { id: id } });
  }

  async queryDeletedRecord(id) {
    return database[this.modelName].findOne({
      paranoid: false,
      where: { id: Number(id) },
    });
  }

  async findAndCountRecords(where = {}, aggregators) {
    return database[this.modelName].findAndCountAll({
      where: { ...where },
      ...aggregators,
    });
  }
}

module.exports = Services;
