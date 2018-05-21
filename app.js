'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');

let app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use('/', router);
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Connect to port 3000')
});