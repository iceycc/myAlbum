## 简介的相册小项目

### 项目构架

  *  服务层 node.js  
  *  客户端 实现增删改查的相册
  *  数据层 mysql

### 目录基本结构

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
      INSERT INTO `album_dir` VALUES ('vvv');
      INSERT INTO `album_dir` VALUES ('vvvb');

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
    
    + //TODO:第一次提交,基本项目流程级框架搭建完成