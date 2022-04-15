const { Router } = require("express");
const PersonController = require("../controllers/PersonController");

const router = Router();

router
  .get("/people", PersonController.listActivePeople)
  .get("/people/all", PersonController.listPeople)
  .get("/people/:id", PersonController.findOnePerson)
  .get(
    "/people/:studentId/registrations/:registrationId",
    PersonController.findOneRegistration
  )
  .get("/people/:studentId/registrations", PersonController.getRegistrations)
  .get(
    "/people/registrations/:classId/confirmeds",
    PersonController.getRegistrationsByClass
  )
  .get("/people/registrations/full", PersonController.getFullClasses)

  .post("/people", PersonController.createPerson)
  .post("/people/:studentId/registrations", PersonController.createRegistration)
  .post("/people/:id/restore", PersonController.restorePerson)
  .post(
    "/people/:studentId/registrations/:registationId/restore",
    PersonController.restoreRegistration
  )
  .post("/people/:studentId/cancel", PersonController.cancelPerson)

  .put("/people/:id", PersonController.updatePerson)
  .put(
    "/people/:studentId/registrations/:registrationId",
    PersonController.updateRegistration
  )

  .delete("/people/:id", PersonController.deletePerson)
  .delete(
    "/people/:studentId/registrations/:registrationId",
    PersonController.deleteRegistration
  );

module.exports = router;
