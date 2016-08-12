<?php 
	$sql = "select * from renderings-swiper";
	$resule = mysql_query($sql);
	if(mysql_affected_rows() > 0) {
		while ($row = mysql_fetch_assoc($rusult)) {
			echo $row["title"];
			echo $row["link"];
			echo $row["src"];
		}
	}
 ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<title>renderings</title>	
	<link rel="stylesheet" href="css/reset.css">
	<link rel="stylesheet" href="css/public.css">
	<link rel="stylesheet" href="css/renderings.css">
    <link rel="stylesheet" href="css/swiper.min.css">

</head>
<body>
		<!-- 导航栏 -->
	<header>
		<nav>
			<div id="nav">
				<a class="logo" href="">
					<img src="img/logo.png" alt="">
				</a>
				<ul class="nav-list">
					<li><a href="index.html">Home</a></li>
					<li><a href="about.html">ABOUT</a></li>
					<li class="active"><a href="renderings.html">Renderings</a></li>
					<li><a href="bim.html">BIM</a></li>
					<li><a href="3dAnimate.html">3D Anlmate</a></li>
					<li><a href="contact.html">Contact</a></li>
				</ul>
				<button type="button" class="nav-toggle">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
	            </button>
			</div>
		</nav>
	</header>
	<!-- /导航栏 -->
	<!-- 主体内容 -->
	<section id="renderings">
		<div class="word-title"">
			<p class="word-flag"><span></span>DIGITAL EFFECT DRAWING<span></span></p>
		</div>
		<!-- 大图滚动 -->
		<div class="swiper-container">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide">
	            	<img src="img/drawing-big.png" alt="">
	            </div>
	            <div class="swiper-slide">
	            	<img src="img/drawing-big.png" alt="">
	            </div>
	            <div class="swiper-slide">
	            	<img src="img/drawing-big.png" alt="">
	            </div>
	        </div>
    		<div class="swiper-pagination"></div>
   		</div>
   		<!-- 瀑布流 -->
   		<ul id="renderings-wrap">
   			<li></li>
   			<li></li>
   			<li></li>
   		</ul>
   		<div id="slider-box">顶部</div>
	</section>
	<!-- /主体内容 -->
	<!-- 联系我们 -->
	<section class="contact-flag">
		<div class="word-flag-box">				
			<p class="word-flag"><span></span>CONTACT US<span></span></p>
		</div>
		<div class="contact-detail">
			<p>Email: eric@shining365.com</p>
			<a href="tel:8613816903400">Mobile Phone: 86 138 1690 3400</a>
			<a href="tel:862165896866-403">Tel：+86 21 6589 6866-403 +86 21 6598 3188-304</a>
		</div>
	</section>
	<!-- /联系我们 -->
	<!-- 底部 -->
	<footer id="footer">
		<p>Copyright &copy; 1998-2015&nbsp; shining&nbsp; Group</p>
	</footer>
	<!-- /底部 -->
	<!-- js -->
	<script src="js/jquery.min.js"></script>
	<script src="js/public.js"></script>	
	<script type="text/javascript" src="js/swiper.jquery.min.js"></script>
	<script>
		$(function() {
			var swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        calculateHeight:true,//自动适应高度
		        loop:true,
		        paginationClickable: true,
		        spaceBetween: 30,
		        centeredSlides: true,
		        autoplay: 4000,
		        autoplayDisableOnInteraction: true
			});
		});

		var wrap = document.getElementById("renderings-wrap");
		var list = document.querySelectorAll("#renderings-wrap li");
		var footer = document.getElementById("footer");
		function createDiv() {
			for(var i = 0; i < 12; i++) {
				//找高度最小的li
				var minList = list[0];
				for(var j = 0; j < list.length; j++) {
					if(minList.offsetHeight > list[j].offsetHeight) {
						minList = list[j];
					}
				}
				var box = document.createElement("div");
				var innerMask = document.createElement("div");
				var magnifier = document.createElement("span");
				var newImg = document.createElement("img");
				var att = document.createAttribute("src");
				att.value = "img/Drawing-"+(i+1)+".png";
				newImg.setAttributeNode(att);
				box.className = "box";
				innerMask.className = "inner-mask";
				magnifier.className = "magnifier";
				magnifier.innerHTML = "图片加载图片加载图片加载";												
				box.appendChild(innerMask);
				innerMask.appendChild(magnifier);
				box.appendChild(newImg);
				minList.appendChild(box);
			}
		}
		createDiv();
		window.onscroll = function() {
			console.log(footer.getBoundingClientRect().bottom)
			console.log(document.documentElement.clientHeight)
			if(footer.getBoundingClientRect().bottom - 1 <= document.documentElement.clientHeight) {
				createDiv();
			}
		}

		var goTop = document.getElementById("slider-box");
		goTop.onclick = function() {
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		var raf = window.requestAnimationFrame(up);
		function up() {
			scrollTop -= 100;
			document.body.scrollTop = scrollTop;
			document.documentElement.scrollTop = scrollTop;
			raf = window.requestAnimationFrame(up);
			if(scrollTop <= 0) {
				window.cancelAnimationFrame(raf)
			}
		}
	}
	</script></body>
</html>