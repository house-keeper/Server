var express = require('express');
var router = express.Router();

router.use('/door', require('./door'));
router.use('/window', require('./window'));

module.exports = router;
