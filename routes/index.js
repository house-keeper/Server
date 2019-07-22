var express = require('express');
var router = express.Router();

//router.use('/facelist', require('./facelist/facelist_routes'));
//router.use('/persongroup', require('./persongroup/persongroup_routes'));
router.use('/s3', require('./s3/s3_routes'));
router.use('/setting', require('./setting/setting_routes'));

module.exports = router;
