var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection=mysql.createPool({
  host:'localhost',
  user:'root',
  password:'zcx1812281',
  database:'inform'
})
/* GET users listing. */
//1.Ա������ӿ�
router.post('/detail', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  connection.query("SELECT * FROM detail",function(err,rows,files){
    	res.send(rows)
//  	console.log(rows)
  })
});

//2.�û���¼�ӿ�
router.post('/user', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  connection.query("SELECT * FROM user",function(err,rows,files){
    	res.send(rows)
    	//console.log(rows)
  })
});

//3.�û�ע��ӿ���ϸ
router.post('/register', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  connection.query("SELECT * FROM register",function(err,rows,files){
    	res.send(rows)
    	//console.log(rows)
  })
});
//4.����Ա��¼�ӿ�
router.post('/register', function(req, res, next) {
	res.header('Access-Control-Allow-Origin','*');
	connection.query("SELECT * FROM Administrator",function(err,rows,files){
	    	res.send(rows)
	    	//console.log(rows)
	})
});
//5.��̨���ӽӿ�
router.post('/increase', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  connection.query("INSERT INTO detail(id,name,sex,age,status,picture,education,employee,entry,tel,hobby,province,address,marital) VALUES(id,name,sex,age,status,picture,education,employee,entry,tel,hobby,province,address,marital)",function(err,rows,files){
    	res.send(rows)
    	//console.log(rows)
  })
});
//6.��̨ɾ���ӿ�
router.post('/delete', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  connection.query("delete from detail where id=1",function(err,rows,files){
    	res.send(rows)
    	//console.log(rows)
  })
});
//7.��̨�޸Ľӿ�
router.post('/change', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  connection.query("update detail set field1=value1 where ��Χ ",function(err,rows,files){
    	res.send(rows)
    	//console.log(rows)
  })
});
//8.��ѯ���������Ľӿ�
router.post('/inquire', function(req, res, next) {
	res.header('Access-Control-Allow-Origin','*');
	connection.query("SELECE name FROM detail",function(err,rows,files){
	    	res.send(rows)
	    	//console.log(rows)
	})
});
//9.Ա���б�Ľӿ�
router.post('/list', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  connection.query("SELECT name FROM detail",function(err,rows,files){
    	res.send(rows)
    	//console.log(rows)
  })
});
//10.��Ƹ��Ϣ�ӿ�
router.post('/recruit', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  connection.query("SELECT name FROM zhaopin",function(err,rows,files){
    	res.send(rows)
    	//console.log(rows)
  })
});
//11.��̨��Ƹ���ӽӿ�
router.post('/zp_recruit', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  connection.query("INSERT INTO zhaopin(id,title,content)VALUES(id,title,content)",function(err,rows,files){
    	res.send(rows)
    	//console.log(rows)
  })
});
//12.��Ƹ��Ϣɾ���ӿ�
router.post('/zp_delete', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  connection.query("delete from detail where ��Χ",function(err,rows,files){
    	res.send(rows)
    	//console.log(rows)
  })
});
//13.��Ƹ��Ϣɾ���ӿ�
router.post('/news', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  connection.query("delete from detail where ��Χ",function(err,rows,files){
    	res.send(rows)
    	//console.log(rows)
  })
});
//14.������Ϣ�ӿ�
router.post('/news_zj', function(req, res, next) {
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