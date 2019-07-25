const express = require('express');
const router = express.Router();
const mysql = require('mysql');
//const dbConfig = require('./config/dbPool');
const dbConfig = {
	host : 'jsmdbinstance.cmunz4rplqqo.ap-northeast-2.rds.amazonaws.com',
	port : 3306,
	user : 'jsm',
	password : 'jsmzzang',
    database : 'housekeeper',
    connectionLimit : 25
};
const connection = mysql.createConnection(dbConfig);

router.delete('/', function(req, res){ 

    const idx = req.body.idx;
    
    var sql = `DELETE FROM record WHERE idx = ${idx}`;
    
    var query = connection.query(sql, function(err, result){
        if(err) {
            console.log(err)
            res.status(500).send('Internal Server Error')
        }
        else {
            res.status(200).send({
                result
            });
        }
    });
  
});

module.exports = router;