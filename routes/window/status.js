const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const crypto = require('crypto-promise');
const async = require('async');
const bodyParser = require('body-parser');
const aws = require('aws-sdk');
aws.config.loadFromPath('./config/aws_config.json');
const s3 = new aws.S3();
const db = require('../../module/pool.js');
const upload = require('../../module/multer');





// 창문 현재 상태 가져오기
router.get('/', async (req, res, next) => {
    
    let getWindowStatusQuery = `SELECT window_status FROM window ORDER BY id DESC limit 1`;
    let result = {};
    let data = {};
    
    try {
        let getWindowStatusResult = await db.Query(getWindowStatusQuery);
        result.message = "Success Get Door Status";
        data.w_status = getWindowStatusResult[0].window_status;
        result.data = data; 
    } catch (error) {
        return next(error);
    }
    return res.status(result);
});

 



module.exports = router;    