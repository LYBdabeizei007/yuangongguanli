var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'entry'
})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/insert',function(req,res,next){
    res.header('Access-Control-Allow-Origin','*')
    pool.query('SELECT * FROM entry',function(err,rows){
        res.send(rows)
        console.log(rows)
    })
})
module.exports = router;