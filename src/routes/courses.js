const express = require('express');
const router = express.Router();
const coueseController = require('../app/controllers/CourseController');

router.get('/create', coueseController.create);
router.post('/store', coueseController.store);
router.get('/:slug', coueseController.show);


module.exports = router;
