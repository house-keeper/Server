var express = require('express');
var router = express.Router();

router.use('/list', require('./list'));

module.exports = router;