const { Router } = require("express");
const ClassController = require("../controllers/ClassController");

const router = Router();
router
  .get("/classes", ClassController.listClasses)
  .get("/classes/:id", ClassController.findOneClass)

  .post("/classes", ClassController.createClass)
  .post("/classes/:id/restore", ClassController.restoreClass)

  .put("/classes/:id", ClassController.updateClass)

  .delete("/classes/:id", ClassController.deleteClass);
module.exports = router;
