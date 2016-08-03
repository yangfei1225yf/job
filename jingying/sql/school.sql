-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: 2016-07-31 08:04:39
-- 服务器版本： 5.5.42
-- PHP Version: 5.6.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `xiaoqiang`
--

-- --------------------------------------------------------

--
-- 表的结构 `school`
--

CREATE TABLE `school` (
  `id` int(16) NOT NULL,
  `s_name` varchar(256) NOT NULL,
  `s_area` varchar(256) NOT NULL,
  `s_score` float NOT NULL,
  `s_address` varchar(256) NOT NULL,
  `s_pic` varchar(256) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `school`
--

INSERT INTO `school` (`id`, `s_name`, `s_area`, `s_score`, `s_address`, `s_pic`) VALUES
(1, '莱茵教育', '北京荣昌校区', 9, '北京市海淀区西三旗桥东上奥世纪B座', '/jingyingba/img/active/s=1.jpg'),
(2, '莱茵教育', '武汉大学', 8.9, '北京市海淀区西三旗桥东上奥世纪B座', '/jingyingba/img/active/s=2.jpg'),
(3, '火星人教育', '海淀区', 8.9, '北京市海淀区西三旗桥东上奥世纪B座', '/jingyingba/img/active/s=3.jpg'),
(4, '中企聚易', '海淀区', 8.8, '北京市海淀区西三旗桥东上奥世纪B座', '/jingyingba/img/active/s=4.jpg'),
(5, '启思教育', '海淀区', 8.9, '北京市海淀区西三旗桥东上奥世纪B座', '/jingyingba/img/active/s=5.jpg'),
(6, '华育国际', '朝阳区', 8, '北京市朝阳区朝外街道华普国际大厦', '/jingyingba/img/active/s=6.jpg'),
(7, '炫游教育', '海淀区', 9.9, '西直门南大街16号西楼', '/jingyingba/img/active/s=7.jpg'),
(8, '优才学院', '北京教学中心', 9.8, '高科技园实兴东街11号北楼三层', '/jingyingba/img/active/s=1.jpg'),
(9, '莱茵教育', '北京荣昌校区', 9, '北京市海淀区西三旗桥东上奥世纪B座', '/jingyingba/img/active/s=1.jpg'),
(10, '华育国际', '朝阳区', 8, '北京市朝阳区朝外街道华普国际大厦', '/jingyingba/img/active/s=6.jpg'),
(11, '优才学院', '北京教学中心', 9.8, '高科技园实兴东街11号北楼三层', '/jingyingba/img/active/s=1.jpg'),
(12, '启思教育', '海淀区', 8.9, '北京市海淀区西三旗桥东上奥世纪B座', '/jingyingba/img/active/s=5.jpg'),
(13, '启思教育', '海淀区', 8.9, '北京市海淀区西三旗桥东上奥世纪B座', '/jingyingba/img/active/s=5.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `school`
--
ALTER TABLE `school`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `school`
--
ALTER TABLE `school`
  MODIFY `id` int(16) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=14;