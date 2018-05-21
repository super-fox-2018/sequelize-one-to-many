var express = require("express")
var router = express.Router()
var models = require("../models")

router.get('/',function(req,res){
	models.Teacher.findAll({include:models.Subject,order:[['id','ASC']]})
	.then(dataTeachers =>{
		// res.send(dataTeachers)
		res.render("./teacher/list_teacher.ejs",{dataTeachers:dataTeachers})
		// res.send(dataTeachers)	
	})
	
})

router.get('/add',function(req,res) {
	models.Subject.findAll()
	.then(dataSubjects=>{
		res.render("./teacher/add_teacher.ejs",{err:null,dataSubjects:dataSubjects})	
	})
	
})

router.post('/add',function(req,res) {
	models.Teacher.create({
		first_name:req.body.first_name,
		last_name:req.body.last_name,
		email:req.body.email,
		SubjectId:req.body.SubjectId
	})
	.then(()=>{
		models.Subject.findAll()
		.then(dataSubjects=>{
			res.render("./teacher/add_teacher.ejs",{err:null,dataSubjects:dataSubjects})	
		})
	})	
	.catch(err=>{
		models.Subject.findAll()
		.then(dataSubjects=>{
			// res.send(err.message)
			res.render("./teacher/add_teacher.ejs",{err:err.message,dataSubjects:dataSubjects})	
		})		
	})
})

router.get('/edit/:id',function(req,res){
	models.Teacher.findOne({
		where:{
			id:req.params.id
		}
	})
	.then(dataTeacher=>{
		res.render("./teacher/edit_teacher.ejs",{dataTeacher:dataTeacher,err:null})	
	})
})

router.post('/edit/:id',function(req,res){
	models.Teacher.update({
		id:req.params.id,
		first_name:req.body.first_name,
		last_name:req.body.last_name,
		email:req.body.email,
		SubjectId:req.body.SubjectId
	},{
		where:{
			id:req.params.id
		}
	})
	.then(()=>{
		res.redirect('/teachers')
	})
	.catch(err=>{
		models.Teacher.findOne({
			where:{
				id:req.params.id
			}
		})
		.then(dataTeacher=>{
			res.render("./teacher/edit_teacher.ejs",{dataTeacher:dataTeacher,err:err.message})	
		})
	})
})

router.get('/delete/:id',function(req,res) {
	// res.send(this.params.id)
	models.Teacher.destroy({
		where:{
			id:req.params.id
		}
	})
})

module.exports = router