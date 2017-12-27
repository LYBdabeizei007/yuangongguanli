var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var formidable=require('formidable')
var fs=require('fs')
var connection=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'zcx1812281',
    database:'shixun2'
})
/* GET users listing. */

//员工头像接口
router.post('/img',function (req,res, next) {
    res.header('Access-Control-Allow-Origin','*')
    var form=new formidable()
    form.uploadDir='public/image'
    form.parse(req,function (err, fields, files) {
        for(i in files){
            var file=files[i]
            var fName=new Date().getTime()
            switch(file.type){
                case 'image/jpeg':
                    fName+='.jpg';
                    break
                case 'image/png':
                    fName+='.png';
                    break
                case 'image/gif':
                    fName+='.gif';
                    break
            }
            var newPath='public/image/'+fName
            fs.renameSync(file.path,newPath)
            res.send({
                a:'image/'+fName,
                b:newPath
            })
        }
    })
})
//1.员工详情接口
router.post('/detail', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  connection.query("SELECT * FROM detail",function(err,rows,files){
    	res.send(rows)
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
    let [
        name,
        sex,
        age,
        tel,
        birthday,
        province,
        address,
        school,
        education,
        posting,
        employee,
        hobby,
        entry,
        dimission,
        marital,
        I,
        I2
    ]=[
        req.body.name,
        req.body.sex,
        req.body.age,
        req.body.tel,
        req.body.birthday,
        req.body.province,
        req.body.address,
        req.body.school,
        req.body.education,
        req.body.posting,
        req.body.employee,
        req.body.hobby,
        req.body.entry,
        req.body.dimission,
        req.body.marital,
        req.body.I,
        req.body.I2
    ]
    connection.query(`INSERT INTO detail (name,sex,age,tel,birthday,province,address,school,education,posting,employee,hobby,entry,dimission,marital,img,path) VALUES('${name}','${sex}','${age}','${tel}','${birthday}','${province}','${address}','${school}','${education}','${posting}','${employee}','${hobby}','${entry}','${dimission}','${marital}','${I}','${I2}')`,function(err,rows,files){
        res.send('添加成功')
    })
});
//6.后台删除接口
router.post('/delete', function(req, res, next) {
    let id=req.body.id
    let path=req.body.path
  res.header('Access-Control-Allow-Origin','*');
  connection.query(`DELETE FROM detail WHERE id='${id}'`,function(err,rows,files){
      fs.unlink(`${path}`,function () {
          res.send('删除成功')
      })
  })
});
//7.后台修改的接口
router.post('/change', function(req, res, next) {
    let [
        id,
        name,
        sex,
        age,
        tel,
        birthday,
        province,
        address,
        school,
        education,
        posting,
        employee,
        hobby,
        entry,
        dimission,
        marital,
        I,
        I2
    ]=[
        req.body.id,
        req.body.name,
        req.body.sex,
        req.body.age,
        req.body.tel,
        req.body.birthday,
        req.body.province,
        req.body.address,
        req.body.school,
        req.body.education,
        req.body.posting,
        req.body.employee,
        req.body.hobby,
        req.body.entry,
        req.body.dimission,
        req.body.marital,
        req.body.I,
        req.body.I2
    ]
  res.header('Access-Control-Allow-Origin','*');
  connection.query(`UPDATE detail set name='${name}',sex='${sex}',age='${age}',tel='${tel}',birthday='${birthday}',province='${province}',address='${address}',school='${school}',education='${education}',posting='${posting}',employee='${employee}',hobby='${hobby}',entry='${entry}',dimission='${dimission}',marital='${marital}',img='${I}',path='${I2}' WHERE id='${id}' `,function(err,rows,files){
    	res.send(rows)

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
  // res.send(1)
});
//11.后台招聘增加接口
router.post('/zp_recruit', function(req, res, next) {
    let [
        gangwei,
        jingyan,
        yaoqiu,
        fuli
    ]=[
        req.body.gangwei,
        req.body.jingyan,
        req.body.yaoqiu,
        req.body.fuli
    ]
  res.header('Access-Control-Allow-Origin','*');
  connection.query(`INSERT INTO recruit(gangwei,jingyan,yaoqiu,fuli)VALUES('${gangwei}','${jingyan}','${yaoqiu}','${fuli}')`,function(err,rows,files){
      res.send('1')
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
//后台招聘读取接口
router.post('/zp_selsect', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    connection.query("SELECT * FROM recruit",function(err,rows,files){
        res.send(rows)
    })
});
//后台招聘读取(id)接口
router.post('/id3', function(req, res, next) {
    let id=req.body.id
    res.header('Access-Control-Allow-Origin','*');
    connection.query(`SELECT * FROM recruit WHERE id='${id}'`,function(err,rows,files){
        res.send(rows)
    })
});
//后台招聘更新接口
router.post('/updata3', function(req, res, next) {
    let [
        gangwei,
        jingyan,
        yaoqiu,
        fuli
    ]=[
        req.body.gangwei,
        req.body.jingyan,
        req.body.yaoqiu,
        req.body.fuli
    ]
    res.header('Access-Control-Allow-Origin','*');
    connection.query(`UPDATE recruit set gangwei='${gangwei}',jingyan='${jingyan}',yaoqiu='${yaoqiu}',fuli='${fuli}'`,function(err,rows,files){
        res.send(rows)
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
//查询成员信息（id）的接口说明
router.post('/id', function(req, res, next) {
    let id=req.body.id
    res.header('Access-Control-Allow-Origin','*');
    connection.query(`SELECT * FROM detail WHERE id='${id}'`,function(err,rows,files){
        res.send(rows)
    })
})
// 新闻查询(id)接口
router.post('/id2', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    let id=req.body.id
    connection.query(`SELECT * FROM news WHERE id='${id}'`,function(err,rows,files){
        res.send(rows)
    })
});
// 新闻修改接口
router.post('/news_xg', function(req, res, next) {
    let [title,xinwen,id]=[req.body.title,req.body.xinwen,req.body.id]
    res.header('Access-Control-Allow-Origin','*');
    connection.query(`UPDATE news set title='${title}',detail='${xinwen}' WHERE id='${id}' `,function(err,rows,files){
        res.send(rows)
    })
});
// 新闻查询接口
router.post('/news_xx', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    connection.query("SELECT * FROM news",function(err,rows,files){
        res.send(rows)
    })
});
//新闻增加接口
router.post('/news_zj', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    let [title,xinwen]=[req.body.title,req.body.xinwen]
    console.log(title,xinwen)
    connection.query(`INSERT INTO news (title,detail) VALUES ('${title}','${xinwen}')`,function(err,rows,files){
        res.send(rows)
        //console.log(rows)
    })
});
// 新闻删除接口
router.post('/news_delete', function(req, res, next) {
    let id=req.body.id
    res.header('Access-Control-Allow-Origin','*');
    connection.query(`DELETE FROM news WHERE id='${id}'`,function(err,rows,files){
        res.send(rows)
    })
});
module.exports = router;