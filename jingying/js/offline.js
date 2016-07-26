$(function(){
		for(var a=0;a<$(".daohang_all").length;a++){
			$(".daohang_all").eq(a).children().click(function(){
				
				$(this).children().addClass("daohang_active")
				
				$(this).siblings().children().removeClass("daohang_active")
			})
		}
		for(var b=0;b<$(".daohang_all1").length;b++){
			$(".daohang_all1").eq(b).children().click(function(){
				$(this).children().addClass("daohang_active")
				$(this).siblings().children().removeClass("daohang_active")
			})
		}
		
		for(var c = 0; c<$(".offline_tab_U li").length;c++){
		$(".offline_tab_U li").eq(c).click(function(){
				$(this).children().addClass("offtab_act")
				$(this).siblings().children().removeClass("offtab_act")
			})
			
		}
		for(var i = 0; i<$(".offline_tab_U li").length;i++){
		$(".offline_tab_U li").eq(i).click(function(){
			$(this).addClass("offline_tab_active").siblings().removeClass("offline_tab_active")
			var index = $(this).index();
			$(".offline_tab_N div").eq(index).addClass("off_active").siblings().removeClass("off_active")
		})	
		}		
		for(var j =1; j<10;j++){
		$(".off_num a").eq(j).click(function(){
			$(this).addClass("off_num_active").siblings().removeClass("off_num_active")
		})
		}
		})