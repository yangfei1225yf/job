<?php 
	$url = "localhost:3306";
	$user = "root";
	$pwd = "root";
	$conn = @mysql_connect($url,$user,$pwd) or die("数据库连接失败！");
	mysql_select_db("jingyingba");//查找数据库
	mysql_query("set names utf8");//设置字符类型
	$sql = "select * from offline";
	$result = mysql_query($sql);
	$arr = array();
	if(mysql_num_rows($result) > 0) {
		while ($row = mysql_fetch_assoc($result)) {
			array_push($arr, $row);
		}
	}
	echo json_encode($arr);
 ?>