const express = require('express')
const routes = express.Router()
let model = require('../models')
let Teacher = model.Teacher
let Subject = model.Subject

routes.get('/',(req,res)=>{
	Teacher.findAll({ 
		include: [Subject],
		order: [
			['id','ASC']
		]
	})
	.then(teacher=>{
		res.render('teacher',{teacher: teacher})
	})
})
routes.get('/add',(req,res)=>{
	Subject.findAll({
		order: [['id','ASC']]
	})
	.then(subjects=>{
		res.render('addTeacher',{subjects: subjects})
	})
})
routes.post('/add',(req,res)=>{
	Teacher.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		SubjectId: null
	})
	.then(()=>{
		res.redirect('/teachers')
	})
})
routes.get('/edit/:id',(req,res)=>{
	Subject.findAll({
		order: [['id','ASC']]
	})
	.then(subjects=>{
		res.render('editTeacher',{subjects: subjects})
	})
})
module.exports = routes