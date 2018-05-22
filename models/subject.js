'use strict';
module.exports = (sequelize, DataTypes) => {
  var subject = sequelize.define('subject', {
    name: DataTypes.STRING
  }, {});
  subject.associate = function(models) {
    subject.hasMany(models.teacher, {
      foreignKey: 'subjectId'
    });
  };
  return subject;
};
