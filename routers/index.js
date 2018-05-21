const express = require('express');
const router = express.Router();
const teacherRouter = require('./teacher.js')
const subjectRouter = require('./subject.js')

router.get('/',(req,res)=>{
    res.send('tesbwtNanti')
})
router.use('/teacher',teacherRouter)
router.use('/subject',subjectRouter)
module.exports = router