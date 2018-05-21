const express = require('express');
const app = express();
const routes = require('./routes');
const students = require('./routes/student-route');
const teachers = require('./routes/teacher-route');
const subjects = require('./routes/subject-route');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', routes);
app.use('/', students);
app.use('/', teachers);
app.use('/', subjects);

app.listen(3000, () => console.log(`express-sequelize-crud on port 3000`))