const { Router } = require("express");
const LevelController = require("../controllers/LevelController");

const router = Router();
router
  .get("/levels", LevelController.listLevels)
  .get("/levels/:id", LevelController.findOneLevel)

  .post("/levels", LevelController.createLevel)
  .post("/levels/:id/restore", LevelController.restoreLevel)

  .put("/levels/:id", LevelController.updateLevel)
  .delete("/levels/:id", LevelController.deleteLevel);
module.exports = router;
