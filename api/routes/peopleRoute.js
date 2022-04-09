const { Router } = require("express");
const PersonController = require("../controllers/PersonController");

const router = Router();

router.get("/people", PersonController.listPeople);

module.exports = router;
