<?php 
	include_once("conn.php");
	$username = $_POST["username"];
	$password = $_POST["password"];
	$sql = "insert into login(`id`,`password`,`username`) values(null,MD5('$password'),'$username')";
	// echo $sql;
	mysql_query($sql);
	// echo mysql_insert_id();
	if(mysql_insert_id()>0){
		echo '{"msg":"chenggong"}';
	}else{
		echo '{"msg":"shibai"}';
	}




 ?>