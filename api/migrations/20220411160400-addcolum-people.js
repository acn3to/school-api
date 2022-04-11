"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("People", "deletedAt", {
      allowNull: true,
      type: Sequelize.DATE,
    });
  },
  down: (queryInterface) => {
    return queryInterface.removeColumn("People", "deletedAt");
  },
};
