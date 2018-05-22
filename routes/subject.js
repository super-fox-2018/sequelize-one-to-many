const express = require('express')
const routes = express.Router()
let model = require('../models')
let Teacher = model.Teacher
let Subject = model.Subject
const Sequelize = require('sequelize')
const Op = Sequelize.Op;


routes.get('/',(req,res)=>{
	Teacher.findAll({
		include: [Subject],
		order: [['id','ASC']],
		where : 
			{
			SubjectId: {
				[Op.not]: null
			}
		}	
	
	})
	.then(teacher=>{
		// res.json(teacher)
		// for(var i=0;i<teacher.length;i++){
		// 	if (teacher[i].Subject== null) {
		// 		teacher.splice(i,1)
		// 	}
		// }
		// res.send(teacher)
		// res.render('subject',{teacher:teacher})
		// if (teacher.SubjectId!==null) {
		// 	res.render('subject',{teacher:teacher})
		// }
		res.render('teacher',{teacher:teacher})
	})
	.catch(err=>{
		console.log("--=========================",err.message)
	})
})


 module.exports = routes