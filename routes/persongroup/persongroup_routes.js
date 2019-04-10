var express = require('express');
var router = express.Router();

router.use('/new', require('./new'));
router.use('/group', require('./group'));
router.use('/addFace', require('./addFace'));
router.use('/addPerson', require('./addPerson'));
router.use('/info', require('./info'));
router.use('/identify', require('./identify'));
router.use('/train', require('./train'));


module.exports = router;
