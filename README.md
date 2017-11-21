## 简介的相册小项目

### 项目介绍  

* 可以展示相册,创建相册;进入某一相册可以展示图片,可以添加图片  

### 功能介绍  

* 首页: 展示相册列表,点击添加相册可以弹出模态框进行添加相册功能
* 相册: 展示某一相册内的所有图片,可以添加图片
* 交互: 首页和相册页的切换

### 项目构架

* 服务层 node.js
* 数据层 mysql
* 前台展示 实现增删改查的相册

### 环境搭建

* 搭建node开发环境
* mysql数据库搭建
* 目录基本结构
+ public --------------用于保存网页的静态文件
  + css
  + js
  + img
+ vender
+ resource ------------用于保存上传的图片资源等
+ views ---------------网站的静态网页,模版
+ app.js --------------网站配置
+ package.json --------程序入口

### mysql搭建

  * 表1  album_dir   字段 dir

  * 表2  album_file  字段 file

  ```` sql
      SET FOREIGN_KEY_CHECKS=0;


      DROP DATABASE IF EXISTS `album`;
      CREATE DATABASE `album`;
      USE album;


      -- ----------------------------
      -- Table structure for album_dir
      -- ----------------------------
      DROP TABLE IF EXISTS `album_dir`;
      CREATE TABLE `album_dir` (
        `dir` varchar(50) NOT NULL
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

      -- ----------------------------
      -- Records of album_dir
      -- ----------------------------
      INSERT INTO `album_dir` VALUES ('aaa');


      -- ----------------------------
      -- Table structure for album_file
      -- ----------------------------
      DROP TABLE IF EXISTS `album_file`;
      CREATE TABLE `album_file` (
        `file` varchar(255) NOT NULL,
        `dir` varchar(50) NOT NULL
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
  ````

### 项目流程

* 建立网站基本结构  
    > npm init  
    
* 引入需要的模块
    > npm install express -save  
    > express  
    > mysql  
* 加入准备好的页面静态文件  
    
    + public
    + views
    + resource
* 创建 app.js
    
    + TODO:第一次提交,基本项目流程级框架搭建完成

### 基本的业务实现流程

* express服务器搭建
  * 1:引入对象支持
  ```` javascript  
    const express = require('express');
  ````
  * 2:创建服务器
  ```` javascript
    let app = express();
  ````
  * 3:监听端口开启服务器
  ```` javascript
    app.listen(8000,()=>{
      console.log('服务器启动了');
    })
  ````
  * 4:根据请求处理响应
  ```` javascript
    app.use()
  ````
* mysql模块引入
  ```` javascript
    //  引入数据库对象
    const mysql = require('mysql');
    //  建立数据库链接
    const poll = mysql.createPool({
      connectionLimit: 10,
      host: '127.0.0.1',
      user: 'root',
      password: 'root',
      database: 'album'
    })
  ````
* 中间件设置
  * 路由中间件
  ````javascript
  // 配置路由规则==
    let router = express.Router();
    router
      // 测试路由
      .get('/text', (req, res, next) => {

      })
      // 显示相册列表 => 请求 '/'
      .get('/', (req, res, next) => {

      })
      // 显示照片列表 => '/showDir'
      .get('/showDir', (req, res, next) => {

      })
      // 添加目录  => '/addDir'
      .post('/showDir', (req, res, next) => {

      })
      // 添加照片  => '/addPic'
      .post('/addPic', (req, res, next) => {

      })
  ````
  * 内置中间件
  * 第三方中间件
  * 应用中间件
  * 错误处理中间件
