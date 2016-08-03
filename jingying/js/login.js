		$(function(){
		for(var i=0;i<$(".login_plist p").length;i++){
			$(".login_plist p").eq(i).click(function(){
				var index =$(this).index()
				$(this).addClass("login_plist_active").siblings().removeClass("login_plist_active")
				$(".login_wrap ul li").eq(index).addClass("login_active").siblings().removeClass("login_active")
			})
		}	

//		获取验证码倒计时
			$("#get_num").click(function(){
				$(this).css({
					borderColor:"#cccccc",
					backgroundColor:"#cccccc",
					color:"white"
				})
			})
		var wait=60;
		function time(o) {
        if (wait == 0) {
            o.removeAttribute("disabled");           
            o.value="获取验证码";
            wait = 60;
        } else {
            o.setAttribute("disabled", true);
            o.value="还剩" + wait + "秒";
            wait--;
            setTimeout(function() {
                time(o)
            },1000)
        }
    }
		$("#get_num").click(function(){
			time(this)
		})

		// 登录页面
		$(".phone_num").children().hide();
		$(".login_wrap ul li:first").click(function(){
			$("ul li:first .phone_num >:first-child") .show();
		})
		$(".login_wrap ul li:last").click(function(){
			$("ul li:last .phone_num >:first-child") .show();
		})


//		手机号码
		$(".right_login").hide()
		$(".kong").hide()
		$(".error_login").hide()
		var denglu_pho = false;
		$("#phone").on("blur", function(){
			$.ajax({
				type:"POST",
				url:"usernameiferror.php",
				data:{
					username:$.trim($("#phone").val())
				},
				dataType:"json",
				success:function(data){
					// console.log(data)
					var reg = /^\d{11}$/;
					var tel =$.trim($("#phone").val());
					 if(reg.test(tel)){
					 	if(data.msg == "success"){
					 		denglu_pho = true;
					 		$(".right_login").show()
					 		$(".yishiyong").hide()
		 					$(".kong").hide()
		 					$(".error_login").hide()
					 	}else{
					 		denglu_pho = false;
					 		$(".error_login").show()
					 		$(".right_login").hide()
					 	}
					}else{
						denglu_pho = false;
					 	$(".yishiyong").show()
					 	$(".kong").hide()
					 	$(".error_login").hide()
					 	$(".right_login").hide()
					}
					if(tel!== ""){
						$(".kong").hide()
					}
					else{
						denglu_pho = false;
						$(".kong").show()
					}					
				}
			})
		})
		//密码
		$(".mi_error").hide()
		$(".mi_right").hide()
		$(".mi_kong").hide()
		$(".mima_error").hide()
		var denglu_pwd = false;
		$("#password").on("blur",function(){
			$.ajax({
				type:"POST",
				url:"passwordiferror.php",
				data:{
					username:$.trim($("#phone").val()),
					password:$.trim($("#password").val())
				},
				dataType:"json",
				success:function(data){
					// console.log(data)
					if($("#password").val().trim() !==""){
						denglu_pwd = false;
						$(".mi_kong").hide()
						$(".mima_error").hide()
					if(data.msg == "1"){
						denglu_pwd = true;
						$(".mi_right").show()
						$(".mi_bixu").hide()
						$(".mima_error").hide()
					}else{
						denglu_pwd = false;
						$(".mi_bixu").show()
						$(".mi_right").hide()
						$(".mima_error").show()
					}
					}else{
						denglu_pwd = false;
						$(".mi_kong").show()
						$(".mima_error").hide()
					}
				}

			})
		})
		//验证码
		$(".yan_error").hide()
		$(".yan_right").hide()
		$(".yan_kong").hide()
		var denglu_yan = false;
		$("#check_num").on("blur",function(){
			$.ajax({
				type:"GET",
				url:"checkCode.php",
				data:{
					code:$.trim($("#check_num").val())
				},
				dataType:"json",
				success:function(data){
					if(data.msg == "pass"){
						denglu_yan = true;
						$(".yan_right").show()
						$(".yan_bixu").hide()
					}else{
						denglu_yan = false;
						$(".yan_bixu").show()
						$(".yan_right").hide()
					}
					if($.trim($("#check_num").val()) !==""){
						$(".yan_kong").hide()
					}else{
						denglu_yan = false;
						$(".yan_kong").show()
					}
				}
			})
		})
		// 全部合格后 给予确认按键一个地址

		$(".denglu").click(function(){
				if((denglu_yan == true) && (denglu_pwd == true) && (denglu_pho == true)){
					$.ajax({
						type:"POST",
						url:"setUser.php",
						data:{
							username:$.trim($("#phone").val())
						},
						success:function() {
							window.location.href='../index.php';
						}
					})
					
				}
		})





		// 注册页面

		$(".phone_already").hide()
		$(".phone_can").hide()
		$(".phone1_kong").hide()
		var zhu_pho = false;
		$("#phone1").on("blur", function(){
			$.ajax({
				type:"POST",
				url:"usernameiferror.php",
				data:{
					username:$.trim($("#phone1").val())
				},
				dataType:"json",
				success:function(data){
					// console.log(data)
					var reg = /^\d{11}$/;
					var tel =$.trim($("#phone1").val());
					 if(reg.test(tel)){
					 	if(data.msg == "success"){
					 		zhu_pho = false;
					 		$(".phone_already").show()
					 		$(".phone_can").hide()
					 		
					 	}else{
					 		zhu_pho = true;
					 		$(".phone_already").hide()
					 		$(".phone_can").show()
					 		
					 	}
					}else{
						zhu_pho = false;
					 	$(".phone_already").hide()
					 	$(".phone_can").hide()
					 	
					}
					if(tel!== ""){
						$(".phone1_kong").hide()

					}
					else{
						zhu_pho = false;
						$(".phone1_kong").show()
						
					}					
				}
			})
		})
		
		$(".pwd_kong").hide()
		$(".pwd_right").hide()
		$(".pwd_error").hide()
		// 密码
		var zhu_pwd = false;
		$("#pwd").on("blur",function(){
		var tel =$.trim($("#pwd").val());
		var regMi = /^[a-zA-Z0-9]{8}$/;
		 
		 if(tel!== ""){
				$(".pwd_kong").hide()
				if(!regMi.test(tel)){
					zhu_pwd = false;
				 	$(".pwd_error").show()
				 	$(".pwd_right").hide()

				 }else{
				 	zhu_pwd = true;
				 	$(".pwd_error").hide()
				 	$(".pwd_right").show()
		 		}

		}else{
		zhu_pwd = false;
		$(".pwd_kong").show()
		$(".pwd_error").hide()
		$(".pwd_right").hide()

		}		

		})
		
		$(".again_kong").hide()
		$(".again_right").hide()
		$("#password_again").on("blur",function(){
		
	 	var a =$.trim($("#password_again").val());
		var b =$.trim($("#pwd").val());

		if(a == ""){
				$(".again_kong").show();
				$(".again_right").hide()

			}else{

			if(a==b){
				$(".again_right").show()
				$(".again_kong").hide()
			}else{
				$(".again_right").hide()
				$(".again_kong").hide()
			}

		}

		})

		var zhu_wait=3;
		function time_success(x) {
        if (zhu_wait == 0) {
            x.removeAttribute("disabled");           
            x.value="提交";
            zhu_wait = 3;
            // 给予确认按键一个地址 和session 一个地址
        	$.ajax({
				type:"POST",
				url:"setUser.php",
				data:{
					username:$.trim($("#phone1").val())
				},
				success:function() {
					window.location.href='../index.php';
				}
			})
        } else {
            x.setAttribute("disabled", true);
            x.value="注册成功（" + zhu_wait + "秒后跳转）";
            zhu_wait--;
            setTimeout(function() {
                time_success(x)
            },1000)

        }
    }	
   

		// 判断 用户名和密码是否符合规则
		var zhuche_tj = document.querySelector(".zhuche_tj");
		$(".zhuche_tj").bind("click",function(){
			
			if(zhu_pho == true && zhu_pwd == true){
				$.ajax({
				type:"POST",
				url:"adduser.php",
				data:{
					username:$.trim($("#phone1").val()),
					password:$.trim($("#pwd").val())

				},
				dataType:"json",
				success:function(data){
					console.log(data)
					if(data.msg == "chenggong"){
						time_success(zhuche_tj)
						$(".zhuche_tj").unbind("click")//取消重复点击
					}
				}
			})
			}else{
				alert("请输入正确的信息")
			}

		})
				

		})		
		





