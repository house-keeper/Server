var express = require('express');
var router = express.Router();

router.use('/view', require('./view'));
router.use('/upload', require('./upload'));

module.exports = router;
