const app = require("express");
const model = require ("../models");
const Teacher = model.Teacher;
const Subject = model.Subject;
const routes = app.Router();
var Sequelize = require('sequelize');

routes.get("/", function(req,res){
  res.render("Home.ejs", {home: "Welcome to: 🏡 127.0.0.1 🏡",
  paragraph: "There is no place like here."});
});

//==================================TEACHERS======================================

//Show all
routes.get("/teachers", function(req,res){
  Teacher.findAll({
    order: Sequelize.col("id"),
    include: [{
      model: Subject
    }]
  })
  .then(teachers =>{
    res.render("teachers/teachers.ejs",
      {
        titleTeachers: 'Teachers Data',
        teacher: teachers,
      }
    )
  })
  .catch(function(err){
    res.send(err.message);
  })

});

//Add data
routes.get("/teacher/add", function(req, res){
  Subject.findAll()
  .then(function(_subject){
    res.render("teachers/add.ejs",{
      titleTeacher: 'Add New Teacher Form',
      subject: _subject,
      error: false
    })
  })
  .catch(function(err){

    res.render("teachers/add.ejs", {
      error: true,
      err: err.message})
  })
})

routes.post("/teacher/add", function(req,res){
  let input = req.body;

  Teacher.create({
    firstName: input.firstName,
    lastName: input.lastName,
    email: input.email,
    subjectId: input.subject
  })
  .then(function(){
    res.redirect("/teachers");
  })
  .catch(function(err){
    Subject.findAll()
    .then(function(subject){
      res.render("teachers/add", {
        error: true,
        err: err.message,
        subject:subject,
    })

    })
  })

});

//Edit & update
routes.get('/teacher/:id/edit/', function(req, res) {
  let teacherId = req.params.id;
  Subject.findAll()
  .then(function(_subject){
    Teacher.findById(teacherId)
    .then(function(_teacher) {
      res.render("teachers/edit" ,
      {
        teacher: _teacher,
        subject: _subject,
        error: true,
        err: "",
      });
    })
    .catch(function(err){
      res.render("teachers/edit", {
        error: true,
        err: err.message,
        subject:_subject,
      })
    })
  })
});

routes.post('/teacher/:id/edit/', function(req, res) {

  let teacherId = req.params.id;
  let input = req.body;
  Subject.findAll()
  .then(function(subjects){
    Teacher.update({
      id : teacherId,
      firstName : input.firstName,
      lastName : input.lastName,
      email : input.email,
      subjectId: input.subject
    }, {where: {id: teacherId}})
    .then(function(){
      res.redirect("/teachers");
    })
    .catch(function(err){
      let teacherId = req.params.id;
      Teacher.findById(teacherId)
      .then(function(_teacher){
        res.render("teachers/edit.ejs", {
          teacher: _teacher,
          subject: subjects,
          error: true,
          err: err.message
        });
      });
    })
  })
})

//Delete
routes.get('/teacher/:id/delete/', function(req, res) {
  let teacherId = req.params.id;
  Teacher.destroy({where: {id: teacherId}})
  .then(() =>{
  	res.redirect('/teachers')
  })
  .catch(function(err){
    res.send(err.message);
  });
});

//====================================Subject===================================
//Show all
routes.get("/subjects", function(req,res){
  Subject.findAll({
    order: Sequelize.col("id"),
    include: [{
      model: Teacher
    }]
  })
  .then(subject =>{

    res.render("subject/subjects.ejs",
      {
        titleSubject: 'Subjects Data',
        subject: subject
      }
    )
  })
  .catch(function(err){
    res.send(err.message);
  })
});

//Add data
routes.get("/subject/add", function(req, res){
  res.render("subject/add.ejs",{titleSubject: 'Add New Subject Form'});
})

routes.post("/subject/add", function(req,res){
  Subject.create({
    name: req.body.name
  })
  .then(function(){
    res.redirect("/subjects");
  })
  .catch(function(err){
    res.send(err.message);
  })
});

//Edit & update
routes.get('/subject/:id/edit/', function(req, res) {
  let subjectId = req.params.id;
  Subject.findById(subjectId)
  .then(function(subject) {
    res.render("subject/edit.ejs" ,
    {
      subject: subject
    });
  })
  .catch(function(err){
    res.send(err.message);
  });
});

routes.post('/subject/:id/edit', function(req, res) {
  let subjectId = req.params.id;

  Subject.update({
    name: req.body.name,
  }, {where: {id: subjectId}})
  .then(function(subject){
    res.redirect("/subjects");
  })
  .catch(function(err){
    res.send(err.message);
  });
});

//Delete
routes.get('/subject/:id/delete/', function(req, res) {
  let subjectId = req.params.id;
  Subject.destroy({where: {id: subjectId}})
  .then(() =>{
  	res.redirect('/subjects')
  })
  .catch(function(err){
    res.send(err.message);
  });
});


module.exports = routes;