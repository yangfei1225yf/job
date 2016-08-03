;
$(function(){

var page = 0;
var index = 0;
$.ajax({
	type:"GET",
	url:"../php/school.php",
	dataType:"json",
	success:function(data) {
		console.log(data);

		schoolList(data);
		// 每页
		var per = parseInt(data.length/10);
		if(data.length%10>0){
			per++;
		}
		var $a = '';
		for(var j = 0;j < per;j++){
			$a += "<a>"+(j+1)+"</a>";
		}

		function pageNum(){
			$(".s_page a").eq(index).addClass("active").siblings().removeClass("active");
			$(".offline_tab_N ul").html('');
			page = $(".s_page a").eq(index).text()-1;
			schoolList(data);
		}
		$(".s_page").append($a);
		$(".s_page a").eq(0).addClass("active");
		$(".s_page a").on('click',function(){
			index = $(this).index();
			pageNum();
		})
		// 上一页
		$(".prev_page").click(function() {
			index--;
			if(index < 0) {
				index = 0;
			}
			pageNum();							
		})
		// 下一页
		$(".next_page").click(function() {
			index++;
			if(index >= per) {
				index = per-1;
			}
			pageNum();
			// $(".s_page a").eq(index).addClass("active").siblings().removeClass("active");
			// $(".offline_tab_N ul").html('');
			// page = $(".s_page a").eq(index).text()-1;
			// schoolList(data);
		})
	}
});
// 学校列表
function schoolList(data) {
	for (var i = page*10; i < page*10+10; i++) {
		if(i<data.length) {
			var $li = $(`<li class="school_list">
				<a href="school_info.html?t=`+(i+1)+`" class="clearfix">
					<img src="`+data[i].s_pic+`" class="school_list_img"/>
					<div class="school_list_div">
						<p class="s_l_name">`+data[i].s_name+`<span>[`+data[i].s_area+`]</span></p>
						<p class="s_l_star">
							<span class="star1"></span>
							<span class="star1"></span>
							<span class="star1"></span>
							<span class="star1"></span>
							<span class="star1 star2"></span>
							<i>评分<span>`+data[i].s_score+`</span>分</i>
						</p>									
						<p class="s_addr">`+data[i].s_address+`</p>
					</div>
				</a>
			</li>`)
			$li.appendTo($(".offline_tab_N ul"));
		}
	}
	
}	


		var index = 0;
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
		// 学校列表
		$(".offline_tab_U li").click(function(){
			index = $(this).index();
			$(this).addClass("active").siblings().removeClass("active");
			$(".offline_tab_N ul").eq(index).show().siblings().hide();
		});
			
		
		for(var i = 0; i<$(".offline_tab_U li").length;i++){
		$(".offline_tab_U li").eq(i).click(function(){
			$(this).addClass("offline_tab_active").siblings().removeClass("offline_tab_active")
			var index = $(this).index();
			$(".offline_tab_N div").eq(index).addClass("off_active").siblings().removeClass("off_active")
		})	
		}	
		// 页码 
		for(var j =1; j<10;j++){
			$(".off_num a").eq(j).click(function(){
				$(this).addClass("off_num_active").siblings().removeClass("off_num_active")
		})

	}
		
})