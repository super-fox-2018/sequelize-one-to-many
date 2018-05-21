'use strict'

const express = require('express')
let app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const cTeacher = require('./controller/controllerTeacher.js')
const model =require('./models')
app.locals.subjectName = require('./helper/helpTeacher.js')
app.set('view engine', 'ejs')





app.listen(3000)


app.get('/teacher',function(req,res){
    model.teacher.findAll({
        order: [['id','ASC']],
        include:model.teacherSubject
    })
    .then(dataTeachers =>{
        res.render("teacher.ejs",{dataTeachers:dataTeachers})
        // res.send(dataTeachers)
    
    })
    .catch(err=>{
        console.log(err.message)
    })
})

app.get('/teacher/add',function(req,res){
    res.render('addTeacher.ejs')
})
app.post('/teacher/add',function(req,res){
    // res.send(req.body)
    let teacherData = {
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email,
        subject : req.body.subject
    }
    cTeacher.add(teacherData)
    .then(()=>{
        res.redirect('/teacher')
    })
    .catch(err =>{
        console.log(err.message)
    })
})

app.get('/teacher/delete/:id',function(req,res){
    let id = req.params.id;
    cTeacher.deleteTeachers(id)
    .then(function(){
        res.redirect('/teacher')
    })
    .catch(err=>{
        console.log(err.message)
    })
})


app.get('/teacher/edit/:id',function(req,res){
    cTeacher.findOne(req.params.id)
    .then(function(teacher){
        res.render('editTeacher.ejs',{teacher : teacher})
    })
    .catch(err=>{
        console.log(err.message)
    })
})




app.post('/teacher/edit/:id',function(req,res){
    let id = req.params.id
    let first_name = req.body.first_name
    let last_name = req.body.last_name
    let email = req.body.email
    cTeacher.update(id,first_name,last_name,email)
    .then(function(teacher){
        cStudent.list()
        .then((teachers)=>{
            res.render('teacher.ejs',{teachers : teachers})
        })
        .catch(err=>{
            console.log(err.message)
        })
    })
})