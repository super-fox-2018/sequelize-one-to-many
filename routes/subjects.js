var express = require("express")
var router = express.Router()
var models = require("../models")
var Sequelize = require("sequelize")
const Op = Sequelize.Op;


router.get('/',function(req,res){
	models.Subject.findAll({
		include:[{
			model:models.Teacher
		}]
	})
	.then(dataSubjects =>{
		// res.send(dataSubjects)
		res.render("./list_subject.ejs",{dataSubjects:dataSubjects})	
	})
	
})



module.exports = router