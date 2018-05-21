const express = require('express');
const router = express.Router();
const subjectsController = require('./../controllers').subjects;

router.get('/', subjectsController.getSubjects);

module.exports = router;

