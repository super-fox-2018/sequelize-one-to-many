const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routers')
const teacher = require('./routers/teacher')
const subject = require('./routers/subject')

app.locals.validasiSubject = require('./helper')

app.use(bodyParser.urlencoded({extended: false}))
app.use('/',router);
app.use('/teacher',teacher)
app.use('/subject',subject)
app.set('view engine','ejs')

app.listen(3000,()=>{
  console.log("listening in port 3000")
})
