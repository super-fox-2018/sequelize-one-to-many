var express = require('express')
var router = express.Router()
const model = require('../models')
let Teachers = model.teacher;
let Subjects = model.subject;

router.get('/',function(req,res){
  Subjects.findAll({
    order:[['id','ASC']],
    include:[{
      model: Teachers
    }]
  })
  .then(function(subjects){
    // console.log(subjects[0].teachers[0].lastName);
    res.render('subject_table.ejs',{subjects:subjects})
    // res.send(teachers)
  })
})

router.get('/add',function(req,res){
  res.render('subject_form.ejs')
})

router.post('/add',function(req,res){
  let name = req.body.name
  // console.log(req.body.name);
  Subjects.create({
    name:name
  })
  .then(subject=>{
    res.redirect("/subject")
  })
  .catch(err=>{
    res.send(err.message)
  })
})

router.get('/edit/:subjectId',function(req,res) {
  var id = req.params.subjectId
  // console.log(id);
  Subjects.findById(id)
  .then((dataSubject)=>{
    // console.log(dataSubject);
    res.render('subject_edit.ejs',{subject:dataSubject})
  })
})

router.post('/edit/:subjectId',function(req,res){
  var id = req.params.subjectId
  console.log(id);
  var name = req.body.name
  console.log(name);
  Subjects.update({name:name},{where:{id:id}})
  .then((subject)=>{
    res.redirect("/subject")
  })
})

router.get('/delete/:subjectId',function(req,res){
  var id = req.params.subjectId
  console.log(id);
  Subjects.destroy({
    where:{
      id:id
    }
  })
  .then(function(dataSubject) {
    res.redirect("/subject")
  })
})

module.exports = router;
