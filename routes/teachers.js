var express = require('express');
let control = require('../controller.js')
var router = express.Router();
var ejs = require('ejs')
let model = require('../models')
let teacher = model.Teacher
let subject = model.Subject



//show teacher with subject
router.get('/teachers', function (req, res) {
  teacher.findAll({
      include: [{
        model: subject
      }]
    })
    .then(function (teachers) {
      res.render('datateachers', {
        teachers: teachers
      })

    })
    .catch(function (err) {
      console.log(err.message)
    })

});




router.get('/teachers/add', function (req, res) {
  res.render('addteachers');
});

router.post('/teachers/add', function (req, res) {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;
  teacher.create({
    firstName,
    lastName,
    email
  }).then(() => {
    res.redirect('/teachers');
  });
});





router.get('/teachers/edit/:id', function (req, res) {
  control.cariIdTeachers(req.params.id)
    .then(function (teachers) {
      res.render('editteachers', {
        teachers: teachers
      })
    })
    .catch(err => {
      console.log(err.message);
    });
});

router.post('/teachers/edit/:id', function (req, res) {
  let obj = {
    id: req.params.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  };
  control.updateTeachers(obj)
    .then(() => {
      res.redirect('/teachers');
    })
    .catch(err => {
      console.log(err.message);
    });

});

router.get('/teachers/delete/:id', function (req, res) {
  let id = req.params.id;
  control.deleteTeachers(id)
    .then(() => {
      res.redirect('/teachers');
    })
    .catch(err => {
      console.log(err.message);
    });

});






module.exports = router;
