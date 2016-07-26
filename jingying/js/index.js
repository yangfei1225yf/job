$(function(){
			$("#address").click(function(){
				$(".city").toggle()	
				$(this).toggleClass("ar_active")
			})
			for(var i =0;i<$(".city div").length;i++){
			$(".city div").eq(i).click(function(){		
				var a = $(this).children("span").html()
				$("#address").children("span.change").html(a)
			})
			}

//		轮播图	

	var index = 0;//当前图片的下标
	var perWidth = $("#inner a").eq(0).width();//每张图片的宽度

	function tab() {
		$("#inner").stop().animate({
			left:-index * perWidth
		})
		// $(this).addClass("active").siblings().removeClass("active");
		$("#paganation span").eq(index).addClass("active").siblings().removeClass("active");
	}
	function prev() {
		index--;
		if(index < 0) {
			index = $("#paganation span").size() - 1;
		}
		tab();
	}
	function next() {
		index++;
		if(index > $("#paganation span").size() - 1) {
			//.size() .length 返回的是个数
			index = 0;
		}
		tab();
	}
	//1.给下面小原点加事件
	$("#paganation span").on("mouseenter",function() {
		//$(this).index();//返回点击的圆点的下标
		index = $(this).index();
		tab();
	})
	var timer = setInterval(next,4000);
	$("#wrap").hover(function() {
		clearInterval(timer);
	},function() {
		timer = setInterval(next,4000);
	})
	for(var c=0;c<$(".act").length;c++){
	$(".act").eq(c).click(function(){
		$(this).addClass("activeBTN").siblings().removeClass("activeBTN")
	})
	}
	
//	合作机构
	$(".he_right").click(function(){
		$(".hezuo ul").stop().animate({
			left:0
		},200,function(){
			$(".hezuo ul").css({left:-167})
			$(".hezuo ul li:last").insertBefore($(".hezuo ul li:first"))

		})

		})
		$(".he_left").click(function(){
		$(".hezuo ul").stop().animate({
			left:-334
		},200,function(){
			$(".hezuo ul").css({left:-167})
			$(".hezuo ul li:first").insertBefore($(".hezuo ul li:last"))

		})
		})
	
	
//	滚轴事件
		function scroll_lachuan(){
		var w =( document.body.offsetWidth -1224 )/2-80
		if(document.body.offsetWidth<1224){
			$(".scroll").css({
				right:-60
			})
			}else if(document.body.offsetWidth>1224){
				$(".scroll").css({
				right:w
			})
		}
		}	
		scroll_lachuan()
			
		window.onresize=function(){
		scroll_lachuan()
		
		}
		$(".scroll_btn").click(function(){
		$("html,body").animate({
			scrollTop:0
		},200)
		})
	
})	