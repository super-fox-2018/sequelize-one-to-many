const routes = require('express').Router();
const Models = require('../models');
const Teacher = Models.Teacher;
const Subject = Models.Subject;

routes.get('/', (req, res) => {
  Teacher.findAll({
    order: [
      ['id','ASC']
    ],
    include: [{ // Left Join
      model: Subject
    }]
  })
  .then((teachers) => {
    // console.log(`success --->`,teachers)
    // teachers.forEach((teacher) => {
      // teacher.getSubject()
      // .then((subject) => {
      //   console.log()
      //   console.log('--->',subject)
      // })
      // console.log(teacher.Subject.subject_name);
    // })
    // res.send(teachers)
    res.render('displayTables.ejs', {
      category: 'teacher',
      data: teachers
    })
  })
  .catch((err) => {
    console.log(`error --->`,err)
    res.send(err)
  })
})

routes.get('/add', (req, res) => {
  res.render('inputForm', {
    category: 'teacher',
    msg: '',
    data: {}
  })
})

routes.post('/add', (req, res) => {
  Teacher.create({
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    email: req.body.email
  })
  .then((teacher) => {
    console.log(teacher)
    res.render('inputForm', {
      category: 'teacher',
      data: teacher,
      msg: 'Teacher has been added'
    })
  })
  .catch(err => {
    console.log('--->', err);
    res.render('inputForm', {
      category: 'teacher',
      data: {},
      msg: err.message
    })
  })
})

routes.get('/edit/:id', (req, res) => {
  let id = req.params.id;
  // console.log('ID:', id);
  Teacher.findById(id)
  .then((teacher) => {
    if (teacher) {
      console.log('success --->', teacher);
      res.render('editForm.ejs', {
        category: 'teacher',
        data: teacher,
        msg: ''
      })
    }
  })
  .catch((err) => {
    console.log('error ---->', err)
  })
})

routes.post('/edit/:id', (req, res) => {
  let id = req.params.id;
  Teacher.update({
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
      category: 'teacher',
      data: result,
      msg: `Data with ID: ${id} has been updated`
    })
  })
  .catch((err) => {
    console.log('error --->', err);
    res.render('editForm.ejs', {
      category: 'teacher',
      data: {},
      msg: err.message
    })
  })
})

routes.get('/delete/:id', (req, res) => {
  let id = req.params.id
  Teacher.findById(id)
  .then((teacher) => {
    res.render('deleteForm.ejs', {
      category: 'teacher',
      data: teacher,
      msg: 'Delete this teacher?'
    })
  })
  .catch((err) => {
    console.log(err)
  })
})

routes.post('/delete/:id', (req, res) => {
  let id = req.params.id;
  Teacher.destroy({
    where: {id}
  })
  .then((result) => {
    res.render('deleteForm.ejs', {
      category: 'teacher',
      data: result,
      msg: 'Teacher deleted successfully'
    })
  })
  .catch((err) => {
    console.log(err)
  })
})

module.exports = routes;