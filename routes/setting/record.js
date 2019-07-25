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





// 녹음 상용구 가져오기
router.get('/', async (req, res, next) => {
    
    let getRecordQuery = `SELECT * FROM record ORDER BY idx`;
    let innerResult = [];
    let result = {};
    
    try {
        let getRecordResult = await db.Query(getRecordQuery);
        result.message = "Success Get Record";    

        for(let i=0;i<getRecordResult.length;i++){
            innerResult.push(getRecordResult[i]);
        }
        result.data = innerResult; 
    } catch (error) {
        return next(error);
    }
    return res.status(result);
});


// 녹음 상용구 추가
router.post('/', upload.fields([{ name: 'file', maxCount: 1 }]), async (req, res, next) => {

    let postRecordQuery = `INSERT INTO record(file) VALUES(?)`;
    let result = {};

    try {
        let postRecordResult = await db.Query(postRecordQuery,[req.files['file'][0].location]);
        result.message = "Success Post Record";    

    } catch (error) {
        return next(error);
    }
    return res.status(result);
});



module.exports = router;    