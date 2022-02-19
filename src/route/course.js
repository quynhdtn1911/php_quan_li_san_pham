const express = require('express');
const router = express.Router();
const courseController = require('../app/controller/CourseController');

router.delete('/:id/force', courseController.deleteForce)
router.post('/handle-action', courseController.handleAction);
router.get('/edit/:id', courseController.edit);
router.delete('/:id', courseController.delete);
router.put('/:id', courseController.update);
router.get('/create', courseController.create);
router.post('/add', courseController.addCourse);
router.patch('/:id/restore', courseController.restore)
router.get('/:slug', courseController.showDetail);

module.exports = router;