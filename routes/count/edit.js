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



// 외부인 이름 변경
router.post('/', async (req, res, next) => {
    
    let result = {};

    let editNameQuery = `UPDATE outsider SET name = ? WHERE idx = ?`;

    try {
        let tmpResult = await db.Query(editNameQuery,[req.body.afterName,req.body.idx]);
        result.message = "Success Edit Outsider Name";    
    } catch (error) {
        return next(error);
    }
    return res.status(result);
});

module.exports = router; 