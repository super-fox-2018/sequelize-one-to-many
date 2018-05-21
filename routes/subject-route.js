const routes = require('express').Router();
const Models = require('../models');
const Subject = Models.Subject;

routes.get('/subjects', (req, res) => {
  Subject.findAll()
  .then((subjects) => {
    console.log(`success --->`,subjects)
    res.render('displayTables.ejs', {
      category: 'subject',
      data: subjects
    })
  })
  .catch((err) => {
    console.log(`error --->`,err)
    res.send(err)
  })
})

routes.get('/subjects/add', (req, res) => {
  res.render('inputForm', {
    category: 'subject',
    msg: '',
    data: {}
  })
})

routes.post('/subjects/add', (req, res) => {
  Subject.create({
    subject_name: req.body.subjectName
  })
  .then((subject) => {
    console.log(subject)
    res.render('inputForm', {
      category: 'subject',
      data: subject,
      msg: 'Subject has been added'
    })
  })
})

routes.get('/subjects/edit/:id', (req, res) => {
  let id = req.params.id;
  // console.log('ID:', id);
  Subject.findById(id)
  .then((subject) => {
    if (subject) {
      console.log('success --->', subject);
      res.render('editForm.ejs', {
        category: 'subject',
        data: subject,
        msg: ''
      })
    }
  })
  .catch((err) => {
    console.log('error --->', err)
  })
})

routes.post('/subjects/edit/:id', (req, res) => {
  let id = req.params.id;
  Subject.update({
    subject_name: req.body.subjectName
  }, {
    where: {
      id: id
    }
  })
  .then((result) => {
    console.log('success --->', result)
    res.render('editForm.ejs', {
      category: 'subject',
      data: result,
      msg: `Data with ID: ${id} has been updated`
    })
  })
  .catch((err) => {
    console.log('error --->', err);
  })
})

routes.get('/subjects/delete/:id', (req, res) => {
  let id = req.params.id
  Subject.findById(id)
  .then((subject) => {
    res.render('deleteForm.ejs', {
      category: 'subject',
      data: subject,
      msg: 'Delete this subject?'
    })
  })
  .catch((err) => {
    console.log(err)
  })
})

routes.post('/subjects/delete/:id', (req, res) => {
  let id = req.params.id;
  Subject.destroy({
    where: {id}
  })
  .then((result) => {
    res.render('deleteForm.ejs', {
      category: 'subject',
      data: result,
      msg: 'subject deleted successfully'
    })
  })
  .catch((err) => {
    console.log(err)
  })
})

module.exports= routes;