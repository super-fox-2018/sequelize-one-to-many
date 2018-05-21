const express = require("express");
const app = express();
const models = require("./models");
const bodyParser = require('body-parser')
const routes = require("./routes")

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use("/", routes);

app.listen(3000);