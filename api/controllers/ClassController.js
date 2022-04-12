const database = require("../models");

class ClassController {
  static async listClasses(req, res) {
    try {
      const allClasses = await database.Classes.findAll();
      return res.status(200).json(allClasses);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async findOneClass(req, res) {
    const { id } = req.params;
    try {
      const oneClass = await database.Classes.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(oneClass);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async createClass(req, res) {
    const newClass = req.body;
    try {
      const newClassCreated = await database.Classes.create(newClass);
      return res.status(200).json(newClassCreated);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async updateClass(req, res) {
    const { id } = req.params;
    const newInfo = req.body;
    try {
      await database.Classes.update(newInfo, { where: { id: Number(id) } });
      const updatedClass = await database.Classes.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(updatedClass);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async deleteClass(req, res) {
    const { id } = req.params;
    try {
      await database.Classes.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ mensagem: `id ${id} deleted` });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async restoreClass(req, res) {
    const { id } = req.params;
    try {
      await database.Classes.restore({ where: { id: Number(id) } });
      return res.status(200).json({ message: `id ${id} restored` });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
}

module.exports = ClassController;
