'use strict';
module.exports = (sequelize, DataTypes) => {
  var teacherSubject = sequelize.define('teacherSubject', {
    subject_name: DataTypes.STRING
  }, {});
  teacherSubject.associate = function(models) {
    // associations can be defined here
    teacherSubject.hasMany(models.teacher, {
      foreignKey: "subject"
    })
  };
  return teacherSubject;
};