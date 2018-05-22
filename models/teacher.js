'use strict';
module.exports = (sequelize, DataTypes) => {
  var teacher = sequelize.define('teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail:{
          args:true,
          msg:'wrong email'
        },
        isEven: function(email,callback) {
          teacher.findAll({where: {email}})
          .then(function(teacher) {
            console.log(teacher.length);
            if(teacher.length > 0){
              callback('Email is Failed')
            }else {
              callback()
            }
          })
        }
      }
    },
    subjectId: DataTypes.INTEGER
  }, {
    hooks:{
      beforeValidate:(teacher,options)=>{
        teacher.firstName = "mr/mrs " + teacher.firstName
      },afterValidate:(teacher,option)=>{
        teacher.lastName = teacher.lastName + " teacher"
      },beforeCreate:(teacher, options)=>{
        teacher.lastName = teacher.lastName + " *";
      }
    }
  });
  teacher.associate = function(models) {
    // associations can be defined here
    teacher.belongsTo(models.subject)
  };
  return teacher;
};
