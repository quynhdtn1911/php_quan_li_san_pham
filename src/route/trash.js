const express = require('express');
const router = express.Router();
const trashController = require('../app/controller/TrashController');

router.get('/courses', trashController.trashCourses);
module.exports = router;