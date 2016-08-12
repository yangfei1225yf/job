<?php 
	//打开数据库
 	$url = "localhost:3306";//数据库的地址
 	$root = "root";//超级管理员
 	$pwd = "root";//mysql的密码
	@mysql_connect($url,$root,$pwd) or die ("数据库连接失败");//@忽略错误提示

	// 选择数据库
	mysql_select_db("xieyi");
	mysql_query("set names utf8");//设置字符集
 ?>