'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'Oops. Looks like you already have an account with this email address. Please try to login.',
      },
      validate:{
        isEmail : {
          args: true,
          msg : 'Must be a valid email address / Looks like you already have an account with this email address.'
        },

      }
    },
    subjectId: DataTypes.INTEGER
  }, {
      hooks: {
        beforeCreate: (teacher, options) => {
          teacher.firstName = `Ibu/Bapak ${teacher.firstName}`
        }
      }
      });
  Teacher.associate = function(models) {
    // associations can be defined here
    Teacher.belongsTo(models.Subject, {
      foreignKey: "subjectId"
    })

  };
  return Teacher;
};