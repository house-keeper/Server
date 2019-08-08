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


// 창문 기록 보여주기 
router.get('/', async (req, res, next) => {
    
    let getRecordQuery = `SELECT * FROM window ORDER BY idx DESC LIMIT 10`;
    let innerResult = [];
    let result = {};
    
    try {
        let getRecordResult = await db.Query(getRecordQuery);
        console.log(getRecordResult);
        result.message = "Success Get Window Repository";    

        for(let i=0;i<getRecordResult.length;i++){
            innerResult.push(getRecordResult[i]);
        }
        result.data = innerResult; 
    } catch (error) {
        return next(error);
    }
    return res.status(result);
});


// 창문 기록 삭제
router.delete('/:idx', async (req, res, next) => {

    let deleteRecordQuery = `DELETE FROM window WHERE idx = ?`;
    let result = {};

    try {
        let deleteRecordResult = await db.Query(deleteRecordQuery,[req.params.idx]);
        result.message = "Success Delete Window Repository";    

    } catch (error) {
        return next(error);
    }
    return res.status(result);
});


module.exports = router; 