const express = require('express')
// //lightworker
var bodyParser = require('body-parser')
let control = require('./controller.js')
// let murid = require('./routes/students.js')
let guru = require('./routes/teachers.js')
let subjek = require('./routes/subjects.js')
var ejs = require('ejs')
let indexs = require('./routes')
const app = express()

app.locals.subjectNull = require('./helper/helpteacher.js')


app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.use('/', subjek);
app.use('/', indexs);
app.use('/', guru);


app.listen(3000, () => console.log(' 👽️ listening on port 3000!'))
