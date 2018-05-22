'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Email format is incorrect'
        },
        isUnique(value, callback) {
          Teacher.findOne({
            where: { email: value }
          })
          .then(function(teacher) {
            let self = this;
            if (teacher && (self.id !== teacher.id)) {
              callback('Email already exists');
            } else {
              callback();
            }
          })
        }
      }
    }
    // subject_id: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: (teacher, options) => {
        let firstName = teacher.first_name
        teacher.first_name = 'Teacher ' + firstName;
      }
    }
  });
  
  Teacher.associate = function(models) {
    // associations can be defined here
    Teacher.belongsTo(models.Subject, {
      foreignKey: 'subject_id'
    })
    // ONE to MANY
    // Teacher.hasMany(models.Students, {
    //  foreignKey: 'studentId' // optional
    // })

    // MANY to MANY
    // Teacher.belongsToMany(models.Student, {
    //   through: models.TeacherStudent,
    //   as: Pelajars // (optional)
    // })
  };
  

  return Teacher;
};