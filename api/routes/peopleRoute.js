const { Router } = require("express");
const PersonController = require("../controllers/PersonController.js");
const RegistrationController = require("../controllers/RegistrationController.js");

const router = Router();

router
  .get("/people", PersonController.listPeople)
  .get("/people/active", PersonController.listActivePeople)
  .get("/people/:id", PersonController.findOnePerson)
  .get("/people/:studentId/registrations", PersonController.getRegistrations)
  .get(
    "/people/:studentId/registrations/:registrationId",
    RegistrationController.getRegistration
  )
  .get(
    "/people/registrations/:turmaId/confirmeds",
    RegistrationController.getRegistrationsByClass
  )
  .get("/people/registrations/full", RegistrationController.getFullClasses)
  .post("/people", PersonController.createPerson)
  .post("/people/:id/restore", PersonController.restorePerson)
  .post("/people/:studentId/cancel", PersonController.cancelPerson)
  .post(
    "/people/:studentId/registrations",
    RegistrationController.createRegistration
  )
  .post(
    "/people/:studentId/registrations/:registrationsId/restore",
    RegistrationController.restoreRegistration
  )
  .put("/people/:id", PersonController.updatePerson)
  .put(
    "/people/:studentId/registrations/:registrationId",
    RegistrationController.updateRegistration
  )
  .delete("/people/:id", PersonController.deletePerson)
  .delete(
    "/people/:studentId/registrations/:registrationId",
    RegistrationController.deleteRegistration
  );

module.exports = router;
