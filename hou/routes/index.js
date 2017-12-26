var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection=mysql.createPool({
  host:'localhost',
  user:'root',
  password:'123456',
  database:'inform'
})
/* GET users listing. */
//1.员工详情接口
router.post('/detail', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  connection.query("SELECT * FROM detail",function(err,rows,files){
    	res.send(rows)
//  	console.log(rows)
  })
});

//2.用户登录接口
router.post('/user', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  connection.query("SELECT * FROM user",function(err,rows,files){
    	res.send(rows)
    	//console.log(rows)
  })
});

//3..用户注册接口
router.post('/register', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  connection.query("SELECT * FROM register",function(err,rows,files){
    	res.send(rows)
    	//console.log(rows)
  })
});
//4.管理员登录接口
router.post('/register', function(req, res, next) {
	res.header('Access-Control-Allow-Origin','*');
	connection.query("SELECT * FROM Administrator",function(err,rows,files){
	    	res.send(rows)
	    	//console.log(rows)
	})
});
//5.后台增加接口
router.post('/increase', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  connection.query("INSERT INTO detail(id,name,sex,age,status,picture,education,employee,entry,tel,hobby,province,address,marital) VALUES(id,name,sex,age,status,picture,education,employee,entry,tel,hobby,province,address,marital)",function(err,rows,files){
    	res.send(rows)
    	//console.log(rows)
  })
});
//6.后台删除接口
router.post('/delete', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  connection.query("delete from detail where id=1",function(err,rows,files){
    	res.send(rows)
    	//console.log(rows)
  })
});
//7.后台修改的接口
router.post('/change', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  connection.query("update detail set field1=value1 where ��Χ ",function(err,rows,files){
    	res.send(rows)
    	//console.log(rows)
  })
});
//8.查询（姓名）的接口说明
router.post('/inquire', function(req, res, next) {
	res.header('Access-Control-Allow-Origin','*');
	connection.query("SELECE name FROM detail",function(err,rows,files){
	    	res.send(rows)
	    	//console.log(rows)
	})
});
//9.员工列表的接口说明
router.post('/list', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  connection.query("SELECT name FROM detail",function(err,rows,files){
    	res.send(rows)
    	//console.log(rows)
  })
});
//10.员工列表的接口说明
router.post('/recruit', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  connection.query("SELECT name FROM zhaopin",function(err,rows,files){
    	res.send(rows)
    	//console.log(rows)
  })
});
//11.后台招聘增加接口
router.post('/zp_recruit', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  connection.query("INSERT INTO zhaopin(id,title,content)VALUES(id,title,content)",function(err,rows,files){
    	res.send(rows)
    	//console.log(rows)
  })
});
//12.后台招聘删除接口
router.post('/zp_delete', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  connection.query("delete from detail where ��Χ",function(err,rows,files){
    	res.send(rows)
    	//console.log(rows)
  })
});
//13.新闻信息接口
router.post('/news', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  connection.query("delete from detail where ��Χ",function(err,rows,files){
    	res.send(rows)
    	//console.log(rows)
  })
});
//14.新闻增加接口
router.post('/news_zj', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  connection.query("SELECT * FROM xinwen",function(err,rows,files){
    	res.send(rows)
    	//console.log(rows)
  })
});
//15.router.post('/news_zj', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  connection.query("SELECT * FROM xinwen",function(err,rows,files){
    	res.send(rows)
    	//console.log(rows)
  })
});
//16.考勤接口
router.post('/clocking', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  connection.query("SELECT * FROM xinwen",function(err,rows,files){
    	res.send(rows)
    	//console.log(rows)
  })
});
/*
router.post('/oo', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  console.log(req.body)
  var d=(req.body.aa)-1;
  connection.query('SELECT * FROM list LIMIT '+d*2+',2',function(err,rows,files){
    console.log(rows)
    res.send(rows)
  })
});


router.get('/lp', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  console.log(req.body)
  var d=(req.body.aa)-1;
  connection.query('SELECT * FROM list LIMIT 0,2',function(err,rows,files){
    console.log(rows)
    res.send(rows)
  })
});


*/
module.exports = router;