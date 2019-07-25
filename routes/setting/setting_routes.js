var express = require('express');
var router = express.Router();

router.use('/record', require('./record'));

module.exports = router;
