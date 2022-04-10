const { Router } = require("express");
const PersonController = require("../controllers/PersonController");

const router = Router();

router.get("/people", PersonController.listPeople);
router.get("/people/:id", PersonController.findOnePerson);
router.post("/people/", PersonController.createPerson);
router.put("/people/:id", PersonController.updatePerson);
router.delete("/people/:id", PersonController.deletePerson);

module.exports = router;
