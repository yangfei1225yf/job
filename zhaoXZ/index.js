var arr=["img/loading_bg.png","img/loading_word.png","img/txt_bg.png","img/fly_bg.png","img/fly1.png","img/fly2.png","img/phone1.png","img/phone2.png","img/suipian_bg.png","img/suipian1.png","img/suipian2.png","img/suipian3.png","img/suipian4.png","img/suipian5.png","img/suipian6.png","img/suipian7.png","img/suipian8.png","img/ready_bg.png","img/ready_word.png","img/shanghua.png","img/qiu1.png","img/qiu2.png","img/qiu3.png","img/title1.png","img/title2.png","img/title3.png","img/title4.png","img/title5.png","img/title6.png","img/title7.png","img/title8.png","img/tankuang1.png","img/tankuang2.png","img/tankuang3.png","img/tankuang4.png","img/tankuang5.png","img/tankuang6.png","img/tankuang7.png","img/tankuang8.png","img/heti_txt.png","img/heti1.png","img/heti2.png","img/heti3.png","img/heti4.png","img/heti5.png","img/heti6.png","img/heti7.png","img/heti8.png","img/choujiang_txt.png","img/jiangpin1.png","img/jiangpin2.png","img/jiangpin3.png","img/jiangpin4.png","img/jiangpin5.png","img/chahao.png","img/game_bg.png","img/box.png","img/baobeier.png","img/xuzheng.png","img/heti_bg.png","img/choujiang_bg.png","img/shuoming.png","img/gameover_bg.png"]
var loading=$(".loading");
var tiaoguo_bol=false
loading.fadeIn(1000,function () {
	loadingFn(arr)
})
function loadingFn(arr) {
	var index=0
	for (var i = 0; i < arr.length; i++) {
		var img=new Image()
		img.src=arr[i]
		img.onload=function () {
			index++
			if (index==arr.length) {
				loading.fadeOut(1000,function () {
					show_txt();
					tiaoguo.fadeIn(2000)
				});			
			}
		}
	}		
}
var tiaoguo=$(".tiaoguo");
tiaoguo.on("touchstart",function () {
	tiaoguo_bol=true
	var txt=$(".txt");
	var fly=$(".fly");
	var suipian=$(".suipian");
	var ready=$(".ready");
	txt.hide()
	fly.hide()
	suipian.hide()
	ready.hide()
	tiaoguo.hide()
	show_ready()
})
function show_txt() {
	var txt=$(".txt");
	var txt_box=$(".txt_box")
	txt_box.html("")
	var str="公元9025年,外星人为了争夺,封印在vivo手机中的神秘能量,发起宇宙战乱,超人徐峥为了保卫神秘能量,带着手机来到浩瀚宇宙中,分身成为8个自己,分别保卫8块手机碎片,消失在太阳系的八大行星中,据说找齐徐峥的8个分身,就能启动神秘能量保护地球,...";
	var index=0;
	var delay=0;
	txt.fadeIn(1000,function () {
		step()
	})
	function step() {
		delay++;
		if (delay>=5) {
			if (str.charAt(index)==",") {
				txt_box.html(txt_box.html()+"<br>");
			}
			else  {
				txt_box.html(txt_box.html()+str.charAt(index));
			}
			index++
			delay=0
		}
		txt_box.css({
			marginTop:-txt_box.height()/2
		})
		id=requestAnimationFrame(step);
		if (index>=str.length) {
			cancelAnimationFrame(id);
			setTimeout(function () {
				txt.fadeOut(1000,function () {
					show_fly()
				})
			},1000)				
		}
	}
}
function show_fly() {
	if (tiaoguo_bol) {return}
	var fly=$(".fly");
	var fly_man=$(".fly_man");
	var phone1=$(".phone1");
	var phone2=$(".phone2");
	var num=0;
	fly.fadeIn(1000,function () {
		change()
	})		
	function change() {
		setTimeout(function () {
			if (num==0) {
				num=1;
				fly_man.attr("src","img/fly1.png");
			}
			else {
				num=0
				fly_man.attr("src","img/fly2.png");
			}
			if (fly.css("display")=="block"&&fly_man.offset().left>-fly_man.width()) {
				change()
			}
		},200)
	}
	setTimeout(function () {
		phone1.show()
	},4000)
	setTimeout(function () {
		phone1.fadeOut(1000);
		phone2.fadeIn(1000,function () {
			setTimeout(function () {
				fly.hide()
				show_suipian()
			},1000)
		});
	},6000)
}
function show_suipian() {
	if (tiaoguo_bol) {return}
	var suipian=$(".suipian");
	suipian.show()
	setTimeout(function () {
		suipian.hide()
		tiaoguo.hide()
		show_ready()
	},3000)
}
function show_ready() {
	var ready=$(".ready");
	var ready_word=$(".ready_word");
	var shanghua=$(".shanghua");
	ready.show()
	var start_bol=false;
	ready.on("touchstart",function (e) {
		var t1=ready_word.offset().top;
		var t2=shanghua.offset().top;
		var dy=e.touches[0].clientY;
		ready.on("touchmove",function (e) {
			var y=e.touches[0].clientY-dy;
			if (y<0) {
				if (y<=-100) {
					y=-100
				}
				ready_word.css({
					top:t1+y
				})
				shanghua.css({
					top:t2+y
				})
				start_bol=true;
			}
		})
		e.preventDefault();
	})
	ready.on("touchend",function () {
		ready.off("touchmove")
		if (start_bol) {
			ready.fadeOut(1000,function () {
				play(1)
			})
		}
	})
}
var index=1;
var time_bol=true
function play(index) {
	var round=$(".round");
	var title=$(".title");
	var box=$(".box");
	var p=$(".box").find("p")
	var pic=$(".pic");
	pic.html("")
	var tankuang=$(".tankuang");
	for (var i = 0; i < title.length; i++) {
		title.hide()
	}
	title.eq(index-1).show()
	box.show()
	round.fadeIn(500,function () {
		createDiv(index+1)
		setTimeout(function () {
			time_bol=true
			timeFn()
		},1000)
	});
	function createDiv(k) {
		var rnd=Math.floor(Math.random()*k*k);
		for (var i = 0; i < k*k; i++) {
			var div=$("<div></div>");
			div.width(pic.width()/k)
			div.height(pic.height()/k)
			pic.append(div)
		}
		var div=pic.find("div");
		div.eq(rnd).css({
			backgroundImage:"url(img/xuzheng.png)",
			// backgroundColor:"red"
		})
		div.eq(rnd).on("touchstart",function () {
			time_bol=false;
			tankuang.eq(index-1).fadeIn(500,function () {
				setTimeout(function () {	
					round.hide()		
					box.hide()
					tankuang.eq(index-1).hide();
					index++
					if (index>8) {
						hetiFn()
						return;
					}
					play(index)
				},1000)
			})
		})
	}
	function timeFn() {
		if (index==1) {
			var t=60;
		}
		else {
			var t=tt
		}
		var timer=setInterval(function () {
			if (time_bol) {
				t-=0.01;
			}
			if (t<=0) {
				clearInterval(timer);
				t=0;
				gameoverFn()
			}
			tt=t.toFixed(2)
			var str=String(tt).split(".");
			if (str[0].length==1) {
				str[0]="0"+str[0]
			}
			p.html(str[0]+":"+str[1]);
		},10)
	}
}
function gameoverFn() {
	var gameover=$(".gameover");
	var btn1=gameover.find(".btn1");
	var btn2=gameover.find(".btn2");
	gameover.fadeIn();
	btn2.on("touchstart",function () {
		shuomingFn()
	})
}
function hetiFn() {
	var heti=$(".heti");
	var choujiang=$(".choujiang");
	var btn1=choujiang.find(".btn1");
	var btn2=choujiang.find(".btn2");
	heti.fadeIn(1000,function () {
		setTimeout(function () {
			heti.hide();
			choujiang.show();
			btn1.on("touchstart",function () {
				jiangpinFn()
			})
			btn2.on("touchstart",function () {
				shuomingFn()
			})
		},3000)
	})
}
function jiangpinFn() {
	var jiangpin=$(".jiangpin");
	var main=$(".main");
	var rnd=Math.round(Math.random()*4);
	jiangpin.fadeIn();
	main.eq(rnd).fadeIn()
}
function shuomingFn() {
	var shuoming=$(".shuoming");
	shuoming.fadeIn();
	var tuichu=$(".tuichu");
	var shuoming_txt=$(".shuoming_txt");
	var con=$(".con");
	var gundong=$(".gundong");
	gundong.height(shuoming_txt.height()*shuoming_txt.height()/con.height())
	var scale=(shuoming_txt.height()-con.height())/(shuoming_txt.height()-gundong.height())
	con.on("touchstart",function (e) {
		var dt=con.position().top;
		var dy=e.touches[0].clientY;
		$(document).on("touchmove",function (e) {
			var y=e.touches[0].clientY-dy+dt;
			if (y>=0) {y=0}
			if (y<=shuoming_txt.height()-con.height()) {
				y=shuoming_txt.height()-con.height()
			}
			con.css({
				top:y
			})
			gundong.css({
				top:y/scale
			})
		})
		e.preventDefault()
	})
	gundong.on("touchstart",function (e) {
		var dt=gundong.position().top;
		var dy=e.touches[0].clientY;
		$(document).on("touchmove",function (e) {
			var y=e.touches[0].clientY-dy+dt;
			if (y<=0) {y=0}
			if (y>=shuoming_txt.height()-gundong.height()) {
				y=shuoming_txt.height()-gundong.height()
			}
			gundong.css({
				top:y
			})
			con.css({
				top:y*scale
			})
		})
		e.preventDefault()
	})

	$(document).on("touchend",function () {
		$(document).off("touchmove")
	})
	tuichu.on("touchstart",function () {
		shuoming.fadeOut();
	})
}






















