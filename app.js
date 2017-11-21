'use strict';
// * express服务器搭建
//   * 1:引入对象支持
//   * 2:创建服务器
//   * 3:监听端口开启服务器
//   * 4:根据请求处理响应
// * mysql模块引入
// * 中间件设置
//   * 应用中间件
//   * 路由中间件
//   * 内置中间件
//   * 第三方中间件
//   * 错误处理中间件

// 1-引入核心对象及第三方包===========
//  引入express对象支持
const express = require('express');
//  引入post请求解析包
const bodyParser = require('body-parser');
//  引入文件功能增强包
const fse = require('fs-extra');
//  引入解析上传文件的包
const formidable = require('formidable');
//  引入path核心对象
const path = require('path');
//  引入数据库对象
const mysql = require('mysql');
//  建立数据库链接
const pool = mysql.createPool({
  connectionLimit: 10,
  host: '127.0.0.1',
  user: 'root',
  password: 'wby123',
  database: 'album'
})




//2- 创建服务器
let app = express();
// 配置模版引擎
app.engine('html',require('express-art-template'))
// 配置路由规则==
let router = express.Router();
router
  // 测试路由
  .get('/text', (req, res, next) => {
      pool.getConnection((err,connection)=>{
        // 处理链接时的异常
        if (err) return next(err);
        connection.query('select * from album_dir', (err, results, fields)=>{
          //查询完毕以后,及时释放链接
          connection.release()
          if (err) return next(err);
          res.render('test.html',{
            text:results[1].dir
          })
        })
      })
  })
  // 显示相册列表 => 请求 '/'
  .get('/', (req, res, next) => {
    pool.getConnection((err,connection)=>{
      if(err) return next(err);
      connection.query('select * from album_dir',(err,results)=>{
        // 查询完毕完毕,释放链接
        connection.release();
        if(err) return next(err);
        res.render('index.html',{
          album:results
        })
      })
    })
  })
  // 显示照片列表 => '/showDir'
  .get('/showDir', (req, res, next) => {
    let dirname = req.query.dir;
    pool.getConnection((err,connection)=>{
      if(err) return next(err);
      connection.query('select * from album_file where dir = ?', [dirname],(err,results)=>{
        // 释放数据库链接
        connection.release();
        if(err) return next(err);
        res.render('album.html',{
          album:results,
          dir:dirname  //为新增照片准备的
        })
      })
    })
  })
  // 添加目录  => '/addDir'
  .post('/showDir', (req, res, next) => {

  })
  // 添加照片  => '/addPic'
  .post('/addPic', (req, res, next) => {

  })





// 3-根据请求处理响应
//  处理静态文件和相册目录
app.use('/public',express.static('./public'));
app.use('resource',express.static('./resource'));

//  路由中间件执行列表
app.use(router);
//  错误处理中间件
app.use((err,req,res,next)=>{
  console.log(err);
  res.send(`
        你访问的页面出问题了....清稍等再试..........
        <a href="/">去首页玩耍</a>
  `)
  
});







// 4-监听端口开启服务器
app.listen(8000, () => {
  console.log('服务器启动了');
})