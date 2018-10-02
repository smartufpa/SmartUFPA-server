const TAG = 'users_route/';
const express = require('express');
const router = express.Router();
const controller = require('../controllers/users_controller')


router.get('/', controller.get);
router.get('/:email', controller.findUserByEmail);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;
