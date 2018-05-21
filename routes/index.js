const express = require('express');
const router = express.Router();
const teachersRoute = require('./teachers');
const subjectsRoute = require('./subjects');
const rootRoute = require('./root');

router.use('/teachers', teachersRoute);
router.use('/subjects', subjectsRoute);
router.use('/', rootRoute);
module.exports = router;
