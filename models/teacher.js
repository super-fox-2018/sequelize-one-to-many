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
          msg: "Email format is incorrect"
        },
        isUnique(value, next){
          var self = this;
          Teacher.findOne({ where: { email: value } })
          .then(function (teacher) {
            if (teacher && Number(self.id) !== Number(teacher.id)) {
              next("Email already exist");
            }
            else {
              next();
            }
          })
          .catch(function(err){
            console.log(err)
          })
        }
      }
    },
    subjectId: DataTypes.INTEGER
  }, {timestamps:false});
  Teacher.associate = function(models) {
    Teacher.belongsTo(models.Subject, {
      foreignKey:"subjectId"
    });
  };
  return Teacher;
};