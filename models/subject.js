'use strict';
module.exports = (sequelize, DataTypes) => {
  var subject = sequelize.define('subject', {
    name: DataTypes.STRING
  }, {});
  subject.associate = function(models) {
    // associations can be defined here
    subject.hasMany(models.teacher)
  };
  return subject;
};
