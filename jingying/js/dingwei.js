		$(function(){
			for(var i=0; i<$(".ding_divlist img").length;i++){
				$(".ding_divlist img").eq(i).click(function(){
					var index = $(this).index()
//					alert(index)
					$(this).addClass("ding_div_active").siblings().removeClass("ding_div_active")
					$(".ding_imglist img").eq(index).addClass("ding_img_active").siblings().removeClass("ding_img_active")
				})
			}
			$(".button2").click(function(){
				$("#mask").css({
					display:"block"
				})
			})
			$("#confirm").click(function(){
				$("#mask").css({
					display:"none"
				})
			})
			$("#cancle").click(function(){
				$("#mask").css({
					display:"none"
				})
			})
			$(".tip a").click(function(){
				$("#mask").css({
					display:"none"
				})
			})
			
			//蒙层box 上下居中
			
			
			function meng_box(){
			var h =  document.documentElement.clientHeight;
				h =(h-310)/2;
			$("#box").css({
					marginTop:h
			})
			}
			meng_box()
			window.onresize=function(){
				meng_box()
			}
			
			
			
//			tab 中间
		for(var c = 0; c<$(".ding_tab_m li").length;c++){
			$(".ding_tab_m li").eq(c).click(function(){
				var index = $(this).index()
				$(this).addClass("ding_tab_m_active").siblings().removeClass("ding_tab_m_active")
				$(".ding_tab_nei li").eq(index).addClass("ding_tab_nei_active").siblings().removeClass("ding_tab_nei_active")
			})
		}
		
		})
		
		
		