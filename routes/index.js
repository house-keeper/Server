var express = require('express');
var router = express.Router();

//router.use('/facelist', require('./facelist/facelist_routes'));
//router.use('/persongroup', require('./persongroup/persongroup_routes'));
router.use('/record', require('./record/record_routes'));

module.exports = router;
