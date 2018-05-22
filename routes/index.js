const express = require('express')
const routes = express.Router()
// let model = require('../models')

routes.get('/',(req,res)=>{
	res.send('Alive')
})

module.exports = routes