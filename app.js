var express = require("express")
var app = express()
var teachers  = require("./routes/teachers.js")
var bodyParser = require('body-parser')
var subjects = require("./routes/subjects.js")

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.locals.subjectCondition = require("./helper.js")

app.use('/teachers',teachers)
app.use('/subjects',subjects)


app.listen(3001,function() {
	console.log("listen")
})
