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



// 외부인 이름 목록 가져오기
router.get('/', async (req, res, next) => {
    
    let getNameQuery = `SELECT DISTINCT name FROM outsider`;
    let result = {};
    let tmpArray = [];
    
    try {
        let nameResult = await db.Query(getNameQuery);
        for(let i=0;i<nameResult.length;i++){
            tmpArray.push(nameResult[i].name);
        }
        result.message = "Success Get Outsider Name list";    
        result.data = tmpArray;
    } catch (error) {
        return next(error);
    }
    return res.status(result);
});



module.exports = router; 