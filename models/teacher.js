'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type:DataTypes.STRING,
      validate:{
        isEmail:{
          args:true,
          msg:"format email salah"
        },
        isUnique: function(input,cb) {
            const Op = sequelize.Op;
            Teacher.findOne({
              where:{
                email:input,
                id: {
                  [Op.ne]: this.id
                }
              }
            })
            .then(dataTeacher =>{
              if(dataTeacher == undefined) {
                cb()
              }else{
                cb("email sudah terpakai")
              }
            })  
        
          } 
        }  
    },  
    SubjectId: DataTypes.INTEGER
  }, {});
  Teacher.associate = function(models) {
    // associations can be defined here
    Teacher.belongsTo(models.Subject)
  };
  return Teacher;
};