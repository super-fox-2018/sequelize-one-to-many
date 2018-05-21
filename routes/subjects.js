var express = require('express');
let control = require('../controller.js')
var router = express.Router();
var ejs = require('ejs')
let model = require('../models')
let teacher = model.Teacher
let subject = model.Subject

//show
router.get('/subjects', function (req, res) {
  subject.findAll({

      include: [{
        model: teacher
      }]
    })
    .then((subjects) => {
      res.render('datasubjects', {
        subjects: subjects
      });
    })
    .catch(err => {
      console.log(err.message);
    });
});


//add
router.get('/subjects/add', function (req, res) {
  res.render('addsubjects');
});




router.post('/subjects/add', function (req, res) {
  let subject_name = req.body.subject_name;
  // let firstName = req.body.firstName;
  // let lastName = req.body.lastName;
  // let email = req.body.email;
  subject.create({
    subject_name
  }).then(() => {
    res.redirect('/subjects');
  });
});





router.get('/subjects/delete/:id', function (req, res) {
  let id = req.params.id;
  control.deleteSubjects(id)
    .then(() => {
      res.redirect('/subjects');
    })
    .catch(err => {
      console.log(err.message);
    });

});


router.get('/subjects/edit/:id', function (req, res) {
  control.cariIdSubjects(req.params.id)
    .then(function (subjects) {
      res.render('editsubjects', {
        subjects: subjects
      })
    })
    .catch(err => {
      console.log(err.message);
    });
});

router.post('/subjects/edit/:id', function (req, res) {
  let obj = {
    id: req.params.id,
    subject_name: req.body.subject_name

  };
  control.updateSubjects(obj)
    .then(() => {
      res.redirect('/subjects');
    })
    .catch(err => {
      console.log(err.message);
    });

});




module.exports = router;
