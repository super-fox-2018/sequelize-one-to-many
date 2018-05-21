'use strict';

module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Email format is incorrect!'
        }
      }
    }
  }, {});
  Teacher.associate = function (models) {
    Teacher.belongsTo(models.Subject, {
      foreignKey: {
        name: 'subjectId'
      }
    });
  };
  return Teacher;
};