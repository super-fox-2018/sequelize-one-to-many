'use strict';
module.exports = (sequelize, DataTypes) => {
  var teacher = sequelize.define('teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  teacher.associate = function(models) {
    teacher.belongsTo(models.subject, {
      foreignKey: 'subjectId'
    });
  };
  return teacher;
};
