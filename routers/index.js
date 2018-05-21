const express = require('express')
const routers = express.Router()
const model = require('../models')
let Subjects = model.subject;
let Teachers = model.teacher;

routers.get('/',function(req,res){
  res.send("welcome to this site")
})

routers.get('/teacher',function(req,res){
  Teachers.findAll({
    order:[['id','ASC']],
    include:[{
      model: Subjects
    }]
  })
  .then(function(teachers){
    res.render('teacher_table.ejs',{teachers:teachers})
    // res.send(teachers)
  })
})

routers.get('/teacher/add',function(req,res){
  res.render('teacher_form.ejs')
})


routers.post('/teacher/add',function(req,res) {
  var firstName = req.body.firstName
  var lastName = req.body.lastName
  var email = req.body.email
  var subjectId = req.body.subjectId
  Teachers.create({
    firstName : firstName,
    lastName : lastName,
    email : email,
    subjectId : subjectId
  })
  .then(teachers=>{
    let dataTeacher = teachers
    res.redirect("/teacher")
  })
})

routers.get('/teacher/edit/:teacherId',function (req,res) {
  var id = req.params.teacherId
  Teachers.findById(id)
  .then((dataTeacher)=>{
    res.render('teacher_edit.ejs',{teacher:dataTeacher})
  })
})

routers.post('/teacher/edit/:teacherId',function(req,res){
  var id = req.params.teacherId
  var firstName = req.body.firstName
  var lastName = req.body.lastName
  var email = req.body.email
  Teachers.findById(id)
  .then((dataTeacher)=>{
    if (dataTeacher.email==email) {
      Teachers.update({firstName:firstName,lastName:lastName},
        {where:{id:id}
      })
      .then((teacher)=>{
        res.redirect("/teacher")
        // console.log("Succesfully Update");
      })
    }else {
      Teachers.update({firstName:firstName,lastName:lastName,email:email},
        {where:{id:id}
      })
      .then((teacher)=>{
        res.redirect("/teacher")
        // console.log("Succesfully Update");
      })
    }
  })

})

routers.get('/teacher/delete/:teacherId',function(req,res){
  var id = req.params.teacherId
  Teachers.destroy({
    where :{
      id:id
    }
  })
  .then(function(dataTeacher){
    res.redirect("/teacher")
  })
})


module.exports = routers;
