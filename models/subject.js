'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    subjectName: DataTypes.STRING
  }, {});
  Subject.associate = function(models) {
    models.Subject.hasMany(models.Teacher, {foreignKey: 'subjectId'});
  };
  return Subject;
};
