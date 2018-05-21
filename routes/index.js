'use strict'
const express = require('express')
const router = express.Router()
const model = require('./../models')
const teachers = require('./teachers')
const subjects = require('./subjects')

router.use('/', subjects)
router.use('/', teachers)

router.get('/', function(req, res){
    res.render('home.ejs')
})

module.exports = router