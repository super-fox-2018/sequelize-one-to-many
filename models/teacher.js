'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    // subject_id: DataTypes.INTEGER
  }, {});
  Teacher.associate = function(models) {
    // associations can be defined here

    // ONE to MANY
    // Teacher.hasMany(models.Students, {
    //  foreignKey: 'studentId' // optional
    // })
    Teacher.belongsTo(models.Subject, {
      foreignKey: 'subject_id'
    })

    // MANY to MANY
    // Teacher.belongsToMany(models.Student, {
    //   through: models.TeacherStudent,
    //   as: Pelajars // (optional)
    // })
  };
  return Teacher;
};