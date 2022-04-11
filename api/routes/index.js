const bodyParser = require("body-parser");
const people = require("./peopleRoute");
const levels = require("./levelsRoute");
const classes = require("./classesRoute");

module.exports = (app) => {
  app.use(
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),
    people,
    levels,
    classes
  );
};
