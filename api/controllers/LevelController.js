const Services = require("../services/Services.js");
const levelsServices = new Services("Levels");
class LevelController {
  static async listLevels(_req, res) {
    try {
      const allLevels = await levelsServices.getAllRecords();
      return res.status(200).json(allLevels);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }

  static async findOneLevel(req, res) {
    const { id } = req.params;
    try {
      const level = await levelsServices.getRecord({ id });
      return res.status(200).json(level);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }

  static async createLevel(req, res) {
    const newLevel = req.body;
    try {
      const newLevelCreated = await levelsServices.createRecord(newLevel);
      return res.status(200).json(newLevelCreated);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async updateLevel(req, res) {
    const { id } = req.params;
    const newInfo = req.body;
    try {
      await levelsServices.updateRecord(newInfo, id);
      return res.status(200).json({ message: `id ${id} updated` });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async deleteLevel(req, res) {
    const { id } = req.params;
    try {
      await levelsServices.deleteRecord(id);
      return res.status(200).json({ mensagem: `id ${id} deleted` });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async restoreLevel(req, res) {
    const { id } = req.params;
    try {
      await levelsServices.restoreRecord(id);
      return res.status(200).json({ message: `Id ${id} restored` });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
}

module.exports = LevelController;
