<?php 
	require_once("conn.php");
	$username = $_POST["username"];
	$pwd = $_POST["password"];
	$sql = "select * from login where `username` = '$username' and `password` = MD5('$pwd')";
	mysql_query($sql);
	if(mysql_affected_rows() > 0) {
		echo '{"msg":1}';
	}else {
		echo '{"msg":0}';
	}
 ?>