'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    nameSubject: DataTypes.STRING
  }, {});
  Subject.associate = function (models) {
    Subject.hasMany(models.Teacher, {
      foreignKey: {
        name: 'subjectId'
      }
    })
  };
  return Subject;
};