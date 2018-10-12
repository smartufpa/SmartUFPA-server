const TAG = 'buildings_route/';
const express = require('express');
const router = express.Router();
const controller = require('../controllers/buildings_controller')


router.post('/', controller.post);

module.exports = router;
