const { ClassesServices } = require("../services");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const classesServices = new ClassesServices();
class ClassController {
  static async listClasses(req, res) {
    const { initial_date, final_date } = req.query;
    const where = {};
    initial_date || final_date ? (where.start_date = {}) : null;
    initial_date ? (where.start_date[Op.gte] = initial_date) : null;
    final_date ? (where.start_date[Op.lte] = final_date) : null;
    try {
      const allClasses = await classesServices.getAllRecords(where);
      return res.status(200).json(allClasses);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async findOneClass(req, res) {
    const { id } = req.params;
    try {
      const oneClass = await classesServices.getRecord({ id });
      return res.status(200).json(oneClass);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async createClass(req, res) {
    const newClass = req.body;
    try {
      const newClassCreated = await classesServices.createRecord(newClass);
      return res.status(200).json(newClassCreated);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async updateClass(req, res) {
    const { id } = req.params;
    const newInfo = req.body;
    try {
      await classesServices.updateRecord(newInfo, id);
      return res.status(200).json({ message: `id ${id} updated` });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async deleteClass(req, res) {
    const { id } = req.params;
    try {
      await classesServices.deleteRecord(id);
      return res.status(200).json({ mensagem: `id ${id} deleted` });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async restoreClass(req, res) {
    const { id } = req.params;
    try {
      await classesServices.restoreRecord(id);
      return res.status(200).json({ message: `id ${id} restored` });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
}

module.exports = ClassController;
