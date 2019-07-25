var express = require('express');
var router = express.Router();

router.use('/window', require('./window'));

module.exports = router;
