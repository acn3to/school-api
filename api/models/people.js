"use strict";
module.exports = (sequelize, DataTypes) => {
  const People = sequelize.define(
    "People",
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          validadeFunction: function (data) {
            if (data.length < 3)
              throw new Error("Name field should be at least 3 characters");
          },
        },
      },
      active: DataTypes.BOOLEAN,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: { args: true, msg: "Invalid email data" },
        },
      },
      role: DataTypes.STRING,
    },
    {
      paranoid: true,
      defaultScope: {
        where: { active: true },
      },
      scopes: {
        all: {
          where: {},
        },
      },
    }
  );
  People.associate = function (models) {
    People.hasMany(models.Classes, {
      foreignKey: "teacher_id",
    });
    People.hasMany(models.Registrations, {
      foreignKey: "student_id",
      scope: {
        status: "confirmed",
      },
      as: "registeredClasses",
    });
  };
  return People;
};
