;
$(function() {
	var index = 0;
	// 左侧tab
	$(".my_list a").click(function() {
		index = $(this).index(".my_list a");
		$(".my_list a").eq(index).addClass("active").parent().siblings().children().removeClass("active");		
	})
	// 订单tab
	$(".my_orders_tab li").click(function() {
		index = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".my_orders_box").eq(index).show().siblings().hide();
	})
	// 全选
	$(".o_head1 input").click(function() {	
		if($(this).prop("checked")) {
			$("input[type='checkbox']").prop("checked","checked");
		}else {
			$("input[type='checkbox']").removeProp("checked");
		}	
	})
	// 退款、评价
	$(".o_set2").click(function() {
		console.log($(this).text())
		if($(this).text() == "退款") {
			$(".refund").toggle();
		}else if($(this).text() == "评价") {
			$(".evaluate").toggle();
		}
	})
	$(".refund_list1>div").click(function() {
		$(".refund_list1 ul").toggle();
		
	})
	$(".refund_list1>div>input").focus(function(event) {
		event.stopPropagation();
		
	})
	$(".refund_list1 ul li").click(function() {
		$(".refund_list1 input").val($(this).text());
	})
	
})
