'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Email format is incorrect'
        },
        isUnique(value, callback) {
          Student.findOne({
            where: { email: value }
          })
          .then(function(student) {
            if (student) {
              callback('Email already exists')
            } else {
              callback()
            }
          })
        }
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
    // Student.belongsTo(models.Teacher)
  };
  return Student;
};