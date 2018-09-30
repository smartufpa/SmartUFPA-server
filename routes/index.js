const express = require('express');
const router = express.Router();
const TAG = 'index/';

router.get('/', function (req, res, next) {
    res.status(200).send(TAG + "Status: 200 OK ");
});

module.exports = router;
