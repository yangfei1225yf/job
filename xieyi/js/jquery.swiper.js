
;jQuery.fn.extend({
	swiper:function(options) {
		var o = options || {};

		$(this).each(function(eIndex,element) {
			var _this = $(element);//每一个单独的调用方法的对象
			var index = 0;

			//生成小圆点
			var pagination = $("<div class='swiper-pagination'></div>");
			var len = _this.find(".swiper-slide").size();
		for(var i = 0; i < len;i++ ) {
				if(i == 0) {
					var span = $("<span class='swiper-active'></span>")
				}else {
					var span = $("<span></span>",{
						// text:(i+1)
					})
				}
				pagination.append(span);

			}	
			_this.append(pagination);


			//给小圆点添加点击事件
			_this.find("span").on("click",function() {
				index = $(this).index();
				tab();
			})
			function tab() {
				if(o.animateFlag) {
					_this.find(".swiper-inner").animate({
						left: - index * _this.width()
					})
				}else {
					_this.find(".swiper-inner").css({
						left: - index * _this.width()
					})
				}				
				_this.find("span").eq(index).addClass("swiper-active").siblings().removeClass("swiper-active");
			}
			function next() {
				index++;
				if(index > len - 1) {
					index = 0;
					_this.css({
						left: - index * _this.width()
					})
				}
				tab();
			}
			if(o.autoPlay) {
				var timer = setInterval(function() {
					next();
				},2000)
				_this.on("mouseenter",function() {
					clearInterval(timer);
				})
				_this.on("mouseleave",function() {
					timer = setInterval(function() {
						next();
					},2000)
				})
			}
		})
		return $(this);
	}
})