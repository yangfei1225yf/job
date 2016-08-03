-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: 2016-08-01 05:50:48
-- 服务器版本： 5.5.42
-- PHP Version: 5.6.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `xiaoqiang`
--

-- --------------------------------------------------------

--
-- 表的结构 `offline`
--

CREATE TABLE `offline` (
  `id` int(16) NOT NULL,
  `c_name` varchar(256) NOT NULL,
  `c_address` varchar(256) NOT NULL,
  `c_score` float NOT NULL,
  `c_price` float NOT NULL,
  `c_sale` int(32) NOT NULL,
  `c_pic` varchar(256) NOT NULL,
  `c_school` varchar(256) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `offline`
--

INSERT INTO `offline` (`id`, `c_name`, `c_address`, `c_score`, `c_price`, `c_sale`, `c_pic`, `c_school`) VALUES
(1, 'Ajax全接触', '高科技园实兴东街11号北楼三层', 8.6, 16000, 453, '/jingyingba/img/active/c=1.jpg', '莱茵教育'),
(2, 'React入门', '西直门南大街16号西楼', 9.8, 12000, 451, '/jingyingba/img/active/c=2.jpg', '火星人教育'),
(3, '电商网站前端架构', '北京市海淀区西三旗桥东上奥世纪B座', 8, 19600, 2621, '/jingyingba/img/active/c=3.jpg', '启思教育'),
(4, 'Swift-进入OOP时代', '北京市朝阳区朝外街道华普国际大厦', 7.7, 18900, 2312, '/jingyingba/img/active/c=4.jpg', '优才学院'),
(5, '使用Swift开发iOS8 App实战', '西直门南大街16号西楼', 8.4, 10000, 2121, '/jingyingba/img/active/c=5.jpg', '华育国际'),
(6, 'Android面试常客Handler详解', '北京市海淀区西三旗桥东上奥世纪B座', 8.2, 10000, 1213, '/jingyingba/img/active/c=6.jpg', '炫游教育'),
(7, '微信6.0主界面', '高科技园实兴东街11号北楼三层', 9.1, 19800, 898, '/jingyingba/img/active/c=7.jpg', '中企聚易'),
(8, 'JavaScript入门篇', '西直门南大街16号西楼', 9.2, 18900, 898, '/jingyingba/img/active/c=8.jpg', '莱茵教育'),
(9, '百度地图在Android中的使用', '北京市海淀区西三旗桥东上奥世纪B座', 7.8, 10000, 898, '/jingyingba/img/active/c=9.jpg', '中企聚易'),
(10, 'H5+JS+CSS3 实现圣诞情缘', '北京市朝阳区朝外街道华普国际大厦', 7.9, 10000, 999, '/jingyingba/img/active/c=10.jpg', '火星人教育'),
(11, 'Android攻城狮的第一门课（入门篇）', '西直门南大街16号西楼', 9, 10000, 2331, '/jingyingba/img/active/c=11.jpg', '启思教育'),
(12, 'Android UI模板设计', '高科技园实兴东街11号北楼三层', 9.5, 19800, 2321, '/jingyingba/img/active/c=12.jpg', '优才学院'),
(13, '浅谈Android动画', '北京市海淀区西三旗桥东上奥世纪B座', 9.4, 10000, 2411, '/jingyingba/img/active/c=13.jpg', '莱茵教育'),
(14, 'Android-仿微信语音聊天', '北京市朝阳区朝外街道华普国际大厦', 9.6, 18900, 2123, '/jingyingba/img/active/c=14.jpg', '中企聚易'),
(15, 'Tab选项卡切换效果', '北京市海淀区西三旗桥东上奥世纪B座', 9.9, 10000, 1223, '/jingyingba/img/active/c=15.jpg', '炫游教育'),
(16, 'Android必学-AsyncTask基础', '高科技园实兴东街11号北楼三层', 8.8, 10000, 1212, '/jingyingba/img/active/c=16.jpg', '优才学院'),
(17, 'iOS-动画进阶', '西直门南大街16号西楼', 8.8, 19800, 1224, '/jingyingba/img/active/c=17.jpg', '火星人教育'),
(18, 'iOS基础入门之Foundation框架初体验', '北京市朝阳区朝外街道华普国际大厦', 8.9, 10000, 212, '/jingyingba/img/active/c=18.jpg', '启思教育'),
(19, 'AngularJS实战', '北京市海淀区西三旗桥东上奥世纪B座', 8.1, 10000, 342, '/jingyingba/img/active/c=19.jpg', '华育国际'),
(20, 'Android动感系列-扫一扫', '高科技园实兴东街11号北楼三层', 8, 10000, 1222, '/jingyingba/img/active/c=20.jpg', '炫游教育'),
(21, 'JavaScript深入浅出', '西直门南大街16号西楼', 9.9, 10000, 2332, '/jingyingba/img/active/c=21.jpg', '炫游教育');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `offline`
--
ALTER TABLE `offline`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `offline`
--
ALTER TABLE `offline`
  MODIFY `id` int(16) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=22;