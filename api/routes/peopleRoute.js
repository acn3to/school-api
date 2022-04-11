const { Router } = require("express");
const PersonController = require("../controllers/PersonController");

const router = Router();

router.get("/people", PersonController.listPeople);
router.get("/people/:id", PersonController.findOnePerson);
router.get(
  "/people/:studentId/registrations/:registrationId",
  PersonController.findOneRegistration
);
router.post("/people/", PersonController.createPerson);
router.post(
  "/people/:studentId/registrations",
  PersonController.createRegistration
);
router.put("/people/:id", PersonController.updatePerson);
router.put(
  "/people/:studentId/registrations/:registrationId",
  PersonController.updateRegistration
);
router.delete("/people/:id", PersonController.deletePerson);
router.delete(
  "/people/:studentId/registrations/:registrationId",
  PersonController.deleteRegistration
);

module.exports = router;
