"use strict";
module.exports = (sequelize, DataTypes) => {
  const People = sequelize.define(
    "People",
    {
      name: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      email: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {}
  );
  People.associate = function (models) {
    // associations can be defined here
  };
  return People;
};
