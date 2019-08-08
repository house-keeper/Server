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



// 외부인 리스트 가져오기
router.get('/', async (req, res, next) => {
    
    let getNameQuery = `SELECT DISTINCT name FROM outsider`;
    let result = {};
    let objectArray = [];

    let getResultQuery = `SELECT * FROM outsider WHERE name = ? ORDER BY time DESC limit 1`;
    let getCountQuery = `SELECT COUNT(name) AS count FROM outsider WHERE name = ?`;
    
    try {
        let nameResult = await db.Query(getNameQuery);
               
        for(let j=0;j<nameResult.length;j++){
            let outsiderObject = {};
            let tmpResult = await db.Query(getResultQuery,nameResult[j].name);
            outsiderObject.idx = tmpResult[0].idx;
            outsiderObject.photo = tmpResult[0].photo;
            outsiderObject.time = tmpResult[0].time;
            outsiderObject.name = tmpResult[0].name;

            let countResult = await db.Query(getCountQuery, nameResult[j].name);
            outsiderObject.count = countResult[0].count;
            objectArray.push(outsiderObject);
        }

        result.message = "Success Get Outsider list";    
        result.data = objectArray;
    } catch (error) {
        return next(error);
    }
    return res.status(result);
});


// 외부인 상세 가져오기
router.get('/:name', async (req, res, next) => {
    
    let result = {};
    let objectArray = [];

    let getResultQuery = `SELECT * FROM outsider WHERE name = ?`;
    
    try {
        let tmpResult = await db.Query(getResultQuery,[req.params.name]);
               
        for(let j=0;j<tmpResult.length;j++){
            let outsiderObject = {};
            outsiderObject.idx = tmpResult[0].idx;
            outsiderObject.photo = tmpResult[0].photo;
            outsiderObject.time = tmpResult[0].time;
            outsiderObject.name = tmpResult[0].name;
            objectArray.push(outsiderObject);
        }

        result.message = "Success Get Outsider detail";    
        result.data = objectArray;
    } catch (error) {
        return next(error);
    }
    return res.status(result);
});


// 외부인 사진 삭제
router.delete('/:idx', async (req, res, next) => {

    let deletePhotoQuery = `DELETE FROM outsider WHERE idx = ?`;
    let result = {};

    try {
        let deletePhotoResult = await db.Query(deletePhotoQuery,[req.params.idx]);
        result.message = "Success Delete Outsider photo";    

    } catch (error) {
        return next(error);
    }
    return res.status(result);
});

module.exports = router; 