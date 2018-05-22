// Teachers ROUTES here

var express = require('express');
var router = express.Router();
var ejs = require('ejs')
let model = require('../models')
let teacher = model.teacher
let subject = model.subject;

router.get('/teachers', function (req, res) {
  teacher.findAll({
    include: [ { model: subject } ]
  })
  .then(function (teachers) {
    // console.log(teachers);
    res.render('teachers', {
      teachers: teachers
    })
  })
  .catch(function (err) {
    console.log(err);
  })
});

module.exports = router;
