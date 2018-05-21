'use strict'
const express = require('express');
const routes = express.Router();
const models = require('../models');
const Teacher = models.Teacher;
const Subject = models.Subject;

routes.use(function(req,res,next){
    res.locals.oriUrl = req.originalUrl;
    next();
})

routes.get('/', (req, res) => {
    res.render('index')
});

routes.get('/teachers', (req, res) => {
    Teacher.findAll({
        include: [Subject]
    })
        .then(function (teachers) {
            res.render('teachers', { teachers: teachers});
        })
        .catch(function (err) {
            res.send(err.message);
        })
})
routes.get('/subjects', (req, res) =>{
    Teacher.findAll({
        include: [{model: Subject, required: true}]
    })
    .then (function (teachers){
        res.render('teachers', { teachers: teachers});
    })
    .catch(function(err){
        res.send(err.message);
    })
})

routes.get('/teachers/add', (req, res) => {
    res.render('formInput', {message: '', teacher : {}});
});

routes.post('/teachers/add', (req, res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    Teacher.create({
        firstName: firstName,
        lastName: lastName,
        email: email
    })
        .then(function (teacher) {
            res.render('formInput', {message:'Add teacher success!', teacher:{}});
        })
        .catch(function (err) {
            res.render('formInput',{ message: err.message, teacher: {}})
        })
})

routes.get('/teachers/edit/:id', (req, res) => {
    let id = req.params.id;
    let url = req.originalUrl;
    Teacher.findById(id)
        .then((teacher) => {
            if (teacher) {
                res.render('formInput', {message: '', teacher : teacher});
            }
            else{
                res.render('formInput', {message: '', teacher : {}});
            }
        })
        .catch(function(err){
            res.render('formInput',{ message: err.message, teacher: {}})
        })
});

routes.post('/teachers/edit/:id', (req, res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let id = req.params.id;
    Teacher.update(
        {
            firstName: firstName,
            lastName: lastName,
            email: email
        },
        { where: { id: id } }
    )
        .then(function (result) {
            res.render('formInput', {message: '', teacher : result});
        })
        .catch(function (err) {
            res.render('formInput',{ message: err.message, teacher: {}})
        });
});

routes.get('/teachers/delete/:id', (req,res) =>{
    let id = req.params.id;
    Teacher.destroy({
        where: {id}
    })
    .then((result)=>{
        res.send('Delete data teacher success!')
    })
    .catch((err)=>{
        res.send(err.message);
    })
})





module.exports = routes;