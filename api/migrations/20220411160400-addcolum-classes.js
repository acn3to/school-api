"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Classes", "deletedAt", {
      allowNull: true,
      type: Sequelize.DATE,
    });
  },
  down: (queryInterface) => {
    return queryInterface.removeColumn("Classes", "deletedAt");
  },
};
