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
        isUnique(value, callback){
          var self = this;
          Teacher.findAll({ where: { email: value } })
          .then(function (teacher) {
            // console.log(teacher[0].id);
            // console.log("----", self.id);
            if (Number(self.id) !== Number(teacher[0].id)) {
              callback("Email already exist");
            }
            else {
              callback();
            }
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