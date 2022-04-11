"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Levels", "deletedAt", {
      allowNull: true,
      type: Sequelize.DATE,
    });
  },
  down: (queryInterface) => {
    return queryInterface.removeColumn("Levels", "deletedAt");
  },
};
