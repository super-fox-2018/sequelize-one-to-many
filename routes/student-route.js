const routes = require('express').Router();
const Models = require('../models');
const Student = Models.Student;

routes.get('/', (req, res) => {
  Student.findAll()
  .then((students) => {
    console.log(`success --->`,students)
    res.render('displayTables.ejs', {
      category: 'student',
      data: students
    })
  })
  .catch((err) => {
    console.log(`error --->`,err)
    res.send(err)
  })
})

routes.get('/add', (req, res) => {
  res.render('inputForm', {
    category: 'student',
    msg: '',
    data: {}
  })
})

routes.post('/add', (req, res) => {
  Student.create({
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    email: req.body.email
  })
  .then((student) => {
    console.log(student)
    res.render('inputForm', {
      category: 'student',
      data: student,
      msg: 'Student has been added'
    })
  })
  .catch(err => {
    console.log("--------->",err);
    res.render('inputForm', {
      category: 'student',
      data: {},
      msg: err.message
    })
  })
})

routes.get('/edit/:id', (req, res) => {
  let id = req.params.id;
  // console.log('ID:', id);
  Student.findById(id)
  .then((student) => {
    if (student) {
      console.log('success --->', student);
      res.render('editForm.ejs', {
        category: 'student',
        data: student,
        msg: ''
      })
    }
  })
  .catch((err) => {
    console.log('error --->', err)
  })
})

routes.post('/edit/:id', (req, res) => {
  let id = req.params.id;
  Student.update({
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    email: req.body.email
  }, {
    where: {
      id: id
    }
  })
  .then((result) => {
    console.log('success --->', result)
    res.render('editForm.ejs', {
      category: 'student',
      data: result,
      msg: `Data with ID: ${id} has been updated`
    })
  })
  .catch((err) => {
    console.log('error --->', err);
    res.render('editForm.ejs', {
      category: 'student',
      data: {},
      msg: err.message
    })
  })
})

routes.get('/delete/:id', (req, res) => {
  let id = req.params.id
  Student.findById(id)
  .then((student) => {
    res.render('deleteForm.ejs', {
      category: 'student',
      data: student,
      msg: 'Delete this student?'
    })
  })
  .catch((err) => {
    console.log(err)
  })
})

routes.post('/delete/:id', (req, res) => {
  let id = req.params.id;
  Student.destroy({
    where: {id}
  })
  .then((result) => {
    res.render('deleteForm.ejs', {
      category: 'student',
      data: result,
      msg: 'Student deleted successfully'
    })
  })
  .catch((err) => {
    console.log(err)
  })
})

module.exports = routes