;
$(".nav-list li").on("click",function() {
	// $(this).addClass("active");
});

$(".nav-toggle").on("click",function() {
	$(".nav-list").toggle();
});

// 回到顶部
$("#slider-box").click(function() {
	$("html,body").animate({
		scrollTop:0
	},300)
})