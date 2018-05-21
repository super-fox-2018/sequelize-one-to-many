'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    subjectName: DataTypes.STRING
  }, { tableName: 'subjects' });
  Subject.associate = function(models) {
    Subject.hasMany(models.Teacher, {
      foreignKey: 'subjectId',
      as: 'teachers'
    });
  };
  return Subject;
};