'use strict';
const model = require('./')

module.exports = (sequelize, DataTypes) => {
  var teacher = sequelize.define('teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    subject: DataTypes.INTEGER
  }, {});
  teacher.associate = function(models) {
    // associations can be defined here

    teacher.belongsTo(models.teacherSubject,{
      foreignKey : "subject"
    })
  };
  return teacher;
};


// teacherSubject hasMany teacher


// teacher: teacherSubjectId