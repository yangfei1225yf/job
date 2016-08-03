<?php 
	session_start();
	$backCode = $_SESSION["check_code_number"];
	$frontCode = $_GET["code"];

	if($frontCode == $backCode) {
		echo '{"msg":"pass"}';
	}else {
		echo '{"msg":"unpass"}';
	}
?>