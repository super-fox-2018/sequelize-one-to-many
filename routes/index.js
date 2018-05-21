const fs = require('fs');
var express = require('express')
var router = express()
const Model = require('./../models');


router.get('/', function(req, res) {
  Model.Teacher.findAll({
      include: [{
        model: Model.Subject
      }]
    })
    .then((data) => {
      res.render('teachers', {
        teachers: data
      })
      // res.send(data)
    })
})

// =============== add teacher ==========
router.get('/add', (req, res) => {
  res.render('addTeacher')
})

router.post('/add', function(req, res) {
  Model.Teacher.create({
      firstName: req.body.firstname,
      lastName: req.body.lastname,
      email: req.body.email
    })
    .then()
  res.redirect('/teachers')




})
module.exports = router
