
$(function(){
	// 头部 城市切换
	$("#address").click(function(){
		$(".city").toggle()	
		$(this).toggleClass("ar_active")
	});
	for(var i =0;i<$(".city div").length;i++){
		$(".city div").eq(i).click(function(){		
			var a = $(this).children("span").html()
			$("#address").children("span.change").html(a)
		})
	}
	
})	