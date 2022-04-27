const express = require("express");
const people = require("./peopleRoute.js");
const levels = require("./levelsRoute.js");
const classes = require("./classesRoute.js");

module.exports = (app) => {
  app.use(express.json(), people, levels, classes);
};
