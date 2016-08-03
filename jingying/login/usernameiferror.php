<?php 
	include_once("conn.php");
	$username = $_POST["username"];
	$sql = "select `username` from login where `username` = '$username'";
	// 执行sql语句
	mysql_query($sql);
	if(mysql_affected_rows() > 0) {
		echo '{"msg":"success"}';
	}else {
		echo '{"msg":"fail"}';
	}





 ?>