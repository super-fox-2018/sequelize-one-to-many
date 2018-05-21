'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Validation error: email format is incorrect'
        },
        async isEmailUnique(email) {
          const teacher = await Teacher.findOne({ where : { email }});
          if (teacher && +this.id !== teacher.id) {
            throw new Error('Validation error: email has been taken');
          }
        }
      }
    },
    subjectId: DataTypes.INTEGER
  }, { tableName: 'teachers' });
  Teacher.associate = function(models) {
    Teacher.belongsTo(models.Subject, {
      foreignKey: 'subjectId',
    });
  };

  Teacher.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  }

  return Teacher;
};