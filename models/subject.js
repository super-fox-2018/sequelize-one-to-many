'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    name: {
      type: DataTypes.STRING,
      validation:{
        notNull:true
      }
  }}, {timestamps:false})
  Subject.associate = function(models) {
    Subject.hasMany(models.Teacher, {
      foreignKey: 'subjectId'
    });
  };
  return Subject;
};