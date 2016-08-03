$(function() {
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
	// tab切换
	$(".info_tab li").click(function() {
		var index = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".info_list>div").eq(index).show().siblings().hide();
	})
	// 数据
	var $ts = location.search;
		// console.log($ts);
	var reg = /\?t=/;
	$ts = $ts.replace(reg,''); 
	console.log($ts);
	$.ajax({
		type:"GET",
		url:"../php/school_info.php",
		dataType:"json",
		data:{
			t:$ts
		},
		success:function(data) {
			console.log(data);
			schoolInfo(data);
		}
	})
	function schoolInfo(data) {
		var $div = $(`<div id="school_info" class="clearfix">
			<div class="s_logo"><img src="`+data[0].s_pic+`" alt=""></div>
			<div class="s_info">
				<h1>`+data[0].s_name+`</h1>
				<div class="s_info_box">
					<p class="s_add">`+data[0].s_address+`</p>
					<div class="s_star">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span class="star5"></span>
					</div>
					<p class="s_num"><span>87</span>人报名</p>
					
				</div>					
				<a class="reservation" href="javascript:void(0);">预约咨询</a>
			</div>
		</div>`);
		$div.prependTo($(".school_left"));
	}
})
