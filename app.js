const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended: false}))
app.locals.subjectName = require('./helpers/helpers.js')
//routes
const index = require('./routes/index')
const teacher = require('./routes/teacher')
const subject = require('./routes/subject')
app.use('/',index)
app.use('/teachers',teacher)
app.use('/subjects',subject)

app.listen(3000,function(){
	console.log('berjalan di port 3000')
})