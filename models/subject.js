'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    subjectName: DataTypes.STRING
  }, {});
  Subject.associate = function(models) {
    // associations can be defined here
    const Teacher = sequelize.define('teacher', { teacherId: Sequelize.INTEGER, firstName: Sequelize.STRING, lastName: Sequelize.STRING, email: Sequelize.STRING });
    const Subject = sequelize.define('subject', { subjectId: Sequelize.INTEGER, subjectName: Sequelize.STRING });

// Here we can connect countries and cities base on country code
    Subject.hasMany(Teacher, {foreignKey: 'subjectId', sourceKey: 'teacherId'});
    Teacher.belongsTo(Subject, {foreignKey: 'subjetId', targetKey: 'teacherId'});
  };
  return Subject;
};