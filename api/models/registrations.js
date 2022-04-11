"use strict";
module.exports = (sequelize, DataTypes) => {
  const Registrations = sequelize.define(
    "Registrations",
    {
      status: DataTypes.STRING,
    },
    { paranoid: true }
  );
  Registrations.associate = function (models) {
    Registrations.belongsTo(models.People, { foreignKey: "student_id" });
    Registrations.belongsTo(models.Classes, { foreignKey: "class_id" });
  };
  return Registrations;
};
