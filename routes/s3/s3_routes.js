var express = require('express');
var router = express.Router();

router.use('/upload', require('./upload'));

module.exports = router;
