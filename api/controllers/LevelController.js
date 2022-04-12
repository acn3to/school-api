const database = require("../models");

class LevelController {
  static async listLevels(req, res) {
    try {
      const allLevels = await database.Levels.findAll();
      return res.status(200).json(allLevels);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }

  static async findOneLevel(req, res) {
    const { id } = req.params;
    try {
      const level = await database.Levels.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(level);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }

  static async createLevel(req, res) {
    const newLevel = req.body;
    try {
      const newLevelCreated = await database.Levels.create(newLevel);
      return res.status(200).json(newLevelCreated);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async updateLevel(req, res) {
    const { id } = req.params;
    const newInfo = req.body;
    try {
      await database.Levels.update(newInfo, { where: { id: Number(id) } });
      const updatedLevel = await database.Levels.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(updatedLevel);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async deleteLevel(req, res) {
    const { id } = req.params;
    try {
      await database.Levels.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ mensagem: `id ${id} deleted` });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async restoreLevel(req, res) {
    const { id } = req.params;
    try {
      await database.Levels.restore({ where: { id: Number(id) } });
      return res.status(200).json({ message: `Id ${id} restored` });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
}

module.exports = LevelController;
