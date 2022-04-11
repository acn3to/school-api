module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Levels",
      [
        {
          info_level: "basic",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          info_level: "intermediate",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          info_level: "advanced",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Levels", null, {});
  },
};
