<?php 
	session_start();
 ?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>登录</title>
		<link rel="stylesheet" type="text/css" href="../css/base.css"/>
		<link rel="stylesheet" type="text/css" href="../css/login/login.css"/>
		<style type="text/css">
		.right_login{
			display: none;
		}
		</style>
	</head>
	<body>
	<!-- 登录导航 -->
		<div class="nav_Nav_login">
			<div class="login_nav clearfix">
				<a href="../index.html" id="logo"><img src="../img/index/logo.png"/></a>
				<span>发觉你的价值</span>
				<a href="../offline_course/offline.html">iOS</a>
				<a href="../offline_course/offline.html">Android</a>
				<a href="../offline_course/offline.html">Unity</a>
				<a href="../offline_course/offline.html">H5</a>
				<a href="../online_course/class_list.html">课程</a>
			</div>
		</div>
	<!-- 登录、注册 -->
		<div class="login_bg">
			<div class="login_main clearfix">
				<div class="login_wrap">
					<div class="login_plist clearfix">
						<p class="login_plist_active">登录</p>
						<p>注册</p>
					</div>
					<ul >
						<!-- 登录 -->
						<li class="login_active clearfix">
						<form action="login.php" method="post">
								
							<label for="phone" class="label_phone">
							      <input type="text" name="username" id="phone" value="" placeholder="请输入电话号码"/>
							</label>
							<p class="phone_num clearfix">
							<span class="yishiyong">请输入11位电话号码 </span>&nbsp;&nbsp;&nbsp;<span class="kong">不能为空</span><span class="right_login">正确</span> <span class="error_login">此号码不存在</span>
							</p>
							<label for="check_num" class="label_check">
							      <input type="text" name="" id="check_num" value="" placeholder="验证码"/>
							<button class="get_num_code"><img src="code.php" id="code" width="100%" height="100%"></button>
							</label>
							<p class="phone_num"><span class="yan_bixu">请输入正确的验证码</span>&nbsp;&nbsp;&nbsp;<span class="yan_kong">不能为空</span><span class="yan_right">正确</span></p>
							<label for="password" class="label_password">
							      <input type="password" name="password" id="password" value="" placeholder="请输入密码"/>
							</label>
							<p class="phone_num"><span class="mi_bixu">请输入正确的密码</span>&nbsp;&nbsp;&nbsp;<span class="mi_kong">不能为空</span><span class="mi_right">正确</span> <span class="mima_error">密码错误</span></p>
							
							<p id="tongyi">
							      <input type="checkbox" name=""  value="" /><span class="input_span1">记住我</span> <a href="javascript:void(0);"   class="chongzhi">重置密码？</a>
							</p>
							<!-- <button class="zhuche_tj">确&nbsp;认</button> -->
							<input type="button" name="" class="denglu" value="确&nbsp;认">

						</form>
						<!-- 注册 -->
						</li>
						<li class="clearfix">
							<label for="phone1" class="label_phone">
								<input type="" name="phone1" id="phone1" value="" placeholder="请输入电话号码"/>
							</label>
							<p class="phone_num clearfix">
								<span class="phone1_bixu">请输入11位电话号码</span>&nbsp;&nbsp;&nbsp; <span class="phone_already">已使用</span><span class="phone_can">可以使用</span><span class="phone1_kong">不能为空</span>
							</p>


							<label for="check_num" class="label_check">
								<input type="" name="" id="check_num" value="" placeholder="验证码"/>
							</label>
							
							<input type="button" name="" id="get_num" value="获取验证码" />

							<p class="phone_num clearfix">
								<span class="phone_num_yan">请输入验证码</span>&nbsp;&nbsp;&nbsp;
								<!-- <span class="kong1">不能为空</span> -->
							</p>

							<label for="pwd" class="label_password">
								<input type="password" name="pwd" id="pwd" value="" placeholder="请输入密码"/>
							</label>
							<p class="phone_num clearfix">
								<span class="phone1_pwd">请输入8位的只包含数字或字母的密码</span>&nbsp;&nbsp;<span class="pwd_right">符合</span><span class="pwd_error">不符合</span><span class="pwd_kong">不能为空</span>
							</p>


							<label for="password_again" class="label_password_again">
								<input type="" name="" id="password_again" value="" placeholder="请重新输入密码"/>
							</label>
							<p class="phone_num clearfix">
								<span class="pwd_again">请重新输入一遍确认</span>&nbsp;&nbsp;&nbsp;<span class="again_kong">不能为空</span><span class="again_right">正确</span>
							</p>

							<p id="tongyi" class="clearfix">
								<input type="checkbox" name=""  value="" /><span class="input_span1">同意网站条款</span>
							</p>
							<!-- <button class="zhuche_tj">提&nbsp;交</button> -->
							<input type="button" name="" class="zhuche_tj" value="提&nbsp;交">
						</li>
					</ul>
				</div>
			</div>
		</div>
		<p class="login_footer">蓝鸥科技有限公司©1997-2016 | 北京市海淀区清河毛纺路路南甲36号金五星商业大厦5层</p>
		<script src="../js/lib/jquery.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="../js/login.js" type="text/javascript" charset="utf-8"></script>

	</body>
</html>














