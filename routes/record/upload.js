const express = require('express');
const router = express.Router();
const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
aws.config.loadFromPath('./config/aws_config.json');
const s3 = new aws.S3();
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'housekeeper',
        acl: 'public-read',
        key: function(req, file, cb) {
            cb(null, Date.now() + '.' + file.originalname.split('.').pop());
        }
    })
});
const mysql = require('mysql');
//const dbConfig = require('../../config/dbPool');
const dbConfig = {
	host : 'jsmdbinstance.cmunz4rplqqo.ap-northeast-2.rds.amazonaws.com',
	port : 3306,
	user : 'jsm',
	password : 'jsmzzang',
	database : 'housekeeper'
};
const connection = mysql.createConnection(dbConfig);


router.post('/', upload.single('file'), function(req, res){
    
    const voice = req.file.location;

    var sql = "INSERT INTO record (first) VALUES (?)";

    var query = connection.query(sql, voice, function(err, result){
        if(err) {
            console.log(err);
            res.status(500).send('Internal Server Error')
        }
        else {
            res.status(201).send({
                message : "Save Success"
            });
        }
    });

});


module.exports = router;


