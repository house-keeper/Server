var express = require('express');
var router = express.Router();

router.use('/status', require('./status'));

module.exports = router;
