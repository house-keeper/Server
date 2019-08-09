var express = require('express');
var router = express.Router();

router.use('/list', require('./list'));
router.use('/name', require('./name'));
router.use('/edit', require('./edit'));


module.exports = router;