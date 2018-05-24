const express = require('express');
const app = express();
const indexRoute = require('./routes/index');
const studentsRoute = require('./routes/student-route');
const teachersRoute = require('./routes/teacher-route');
const subjectsRoute = require('./routes/subject-route');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRoute);
app.use('/students', studentsRoute);
app.use('/teachers', teachersRoute);
app.use('/subjects', subjectsRoute);

app.listen(3000, () => {
  console.log(`express-sequelize-one-to-many on port 3000`)
})