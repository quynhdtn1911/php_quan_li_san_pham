const express = require('express');
const router = express.Router();
const meController = require('../app/controller/MeController');

router.get('/stored/stored_courses', meController.storedCourses);

module.exports = router;