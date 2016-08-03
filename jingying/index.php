<?php 
	session_start();
 ?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>首页</title>
		<link rel="stylesheet" type="text/css" href="css/base.css"/>
		<link rel="stylesheet" type="text/css" href="css/public.css"/>
		<link rel="stylesheet" type="text/css" href="css/index/index.css"/>
		
		<style type="text/css">
		</style>
	</head>
	<body>
		<div class="nav_Nav">
			<div class="nav_div">
				<a href="index.php" class="logo"><img src="img/index/logo.png"/></a>
				<img src="img/index/113200.png" class="faxian"/>
				
				<a href="javascript:void(0);" id="address">
					<span class="change">北京</span>
					<div class="city clearfix">
						<div><img src="img/index/city1.png"/><span>北京</span><p class="meng"></p></div>
						<div><img src="img/index/city2.png"/><span>大连</span><p class="meng"></p></div>
						<div><img src="img/index/city3.png"/><span>郑州</span><p class="meng"></p></div>
						<div><img src="img/index/city4.png"/><span>上海</span><p class="meng"></p></div>
						<div><img src="img/index/city5.png"/><span>广州</span><p class="meng"></p></div>
						<div><img src="img/index/city6.png"/><span>西安</span><p class="meng"></p></div>
						<div><img src="img/index/city7.png"/><span>武汉</span><p class="meng"></p></div>
					</div>
				</a>
				<ul class="clearfix">
					<li><a href="index.html">首页</a></li>
					<li><a href="offline_course/offline.html">线下课程</a></li>
					<li><a href="online_course/class_list.html">在线课程</a></li>
					<li><a href="school/school.html">学校</a></li>
					<li><a href="javascript:void(0);">互联网头条</a></li>
					<li><a href="javascript:void(0);">+提问</a></li>
				</ul>
				<?php 
					if(isset($_SESSION["username"])) {
				 ?>
				
				<ol>
					<li><a href="javascript:void(0);" style="border: none; color: #029850">个人中心</a></li>
				</ol>
				<?php }else { ?>
				<ol>
					<li><a href="login/login.html">注册</a></li>
					<li>
						<a href="login/login.html">登录</a>
					</li>
				</ol>
				<?php } ?>
			</div>
		</div>
	<!-- 主体 -->
		<div class="main">
			<header>	
				<div id="wrap">
				<div id="inner">
					<a href="javascript:void(0);"><img src="img/index/banner.png" alt=""></a>
					<a href="javascript:void(0);"><img src="img/index/banner2.png" alt=""></a>
					<a href="javascript:void(0);"><img src="img/index/banner3.png" alt=""></a>
				</div>
				<div class="paganation clearfix" id="paganation">
					<span class ="active"></span>
					<span></span>
					<span></span>
				</div>
				</div>
				<div class="h_rigjht">
					<div class="h_rigjht_h clearfix">
					<img src="img/index/touxiang.png"/>
					<div class="h_rigjht_r">
					<span>Hi,中午好，</span>
					<br />
					<span>欢迎来到精英吧</span>
					<br />
					<a href="login/login.html" class="a_active">登录</a>
					&nbsp;
					<a href="login/login.html">注册</a>
					</div>
					
					</div>
					<div class="h_rigjht_m">
					<span style="color:black ;">新手入门</span>
					<a href="javascript:void(0);" style="color:#9f9f9f ;">了解精英吧></a>
					</div>
					<ul class="h_rigjht_md clearfix">
						<li><a href="index/new_study.html" class="icon icon1">1.理论学习</a></li>
						<li><a href="index/new_study.html" class="icon icon2">2.大牛打疑</a></li>
						<li><a href="index/new_study.html" class="icon icon3">3.在线评估</a></li>
						<li><a href="index/new_study.html" class="icon icon4">4.线下实训</a></li>
					</ul>
					<div class="h_rigjht_b">
						<a href="javascript:void(0);">奖金</a>
						<a href="javascript:void(0);">就业</a>
						<a href="javascript:void(0);">圈子</a>
					</div>
					
				</div>
			</header>
			<ul class="online_c clearfix">
				<li><span>课程学习</span>  <br />采用在线教学模式，学习理论课程，让你快速完成理论知识的搭建</li>
				<li><span>学习指导</span><br />采用在线教学模式，学习理论课程，让你快速完成理论知识的搭建</li>
				<li><span>有问必答</span><br />采用在线教学模式，学习理论课程，让你快速完成理论知识的搭建</li>
				<li><span>招聘就业</span><br />采用在线教学模式，学习理论课程，让你快速完成理论知识的搭建</li>
				<li><span>带你走进互联网</span><br />采用在线教学模式，学习理论课程，让你快速完成理论知识的搭建</li>
			</ul>
			
			<h2>精英吧在线课程</h2>
			
			<ul class="online_class clearfix">
				<li><a href="javascript:void(0);"><img src="img/index/iOS_bg2.png"/><div class="mengc">正在录制，敬请期待！</div></a></li>
				<li><a href="javascript:void(0);"><img src="img/index/android_bg2.png"/><div class="mengc">正在录制，敬请期待！</div></a></li>
				<li><a href="javascript:void(0);"><img src="img/index/unity3D-bg.png"/><div class="mengc">正在录制，敬请期待！</div></a></li>
				<li><a href="javascript:void(0);"><img src="img/index/html5_bg2.png"/><div class="mengc">正在录制，敬请期待！</div></a></li>
				<li><a href="javascript:void(0);"><img src="img/index/expect_bg.png"/><div class="mengc">正在录制，敬请期待！</div></a></li>
			</ul>

			<h2>精英吧线下课程</h2>
			<div class="line">
				<img src="img/index/offlinecourse_bg.png"/>
				<a href="javascript:void(0);" class="line_btn">精品线下课程</a>
				<div class="line_meng"></div>
			</div>
			<h2>精英吧入驻学校</h2>
			<div class="school">
				<img src="img/index/settledinschool_bg.jpg"/>
				<a href="javascript:void(0);" class="school_btn">精英吧入驻学校</a>
				<div class="school_meng"></div>
			</div>
			<h2>不一样的学习方式：你学习的不仅仅是技能</h2>
			<ul class="diffent clearfix">
				<li>
					<img src="img/index/learningstyle_ico1.png"/><br />
					<span>同学一起学</span>
					<br />
					精准的算法，让你在学习的道路上不孤
					单，和志同道合，能力相当的同学为伴
					一起在学习的路上打怪升级，刷副本。
				</li>
				<li>
					<img src="img/index/learningstyle_ico2.png"/><br />
					<span>学习顾问指引</span>
					<br />
					贴心的学习顾问，当你遇到困难，学习动
					力不足，对学习方向和未来迷茫，出手相		
					助。
				</li>
				<li>
					<img src="img/index/learningstyle_ico3.png"/><br />
					<span>奖学制度</span>
					<br />
					每个时代都需要天才，但是也需要勤奋刻苦
					的人才，对，就是你，你学的好，我们就要	
					奖励你，我们要助推你成为社会的精英
				</li>
				<li>
					<img src="img/index/learningstyle_ico4.png"/><br />
					<span>有问必答</span>
					<br />
					遇到困难不要怕，上千名认证专家在线支
					持答疑，只要你提问，我们就回答。
				</li>
			</ul>
			<h2>目前我们共有超过30000注册学习用户<span>目前已经有259名学生获得奖学金</span></h2>
			<ul class="yonghu clearfix">
				<li>
					<img src="img/index/learninguser1.png"/><br />
					<span>王*</span><br />
					北京嘉丁母婴健康科技<br />
						iOS开发工程师<br />
						<br />
					<span>薪资</span><br />
					<span>12000元/月</span>
				</li>
				<li>
					<img src="img/index/learninguser2.png"/><br />
					<span>孙**</span><br />
					北京海游科技<br />
					Cocos2d-x<br />
					<br />
					<span>薪资</span><br />
					<span>12000元/月</span>
				</li><li>
					<img src="img/index/learninguser3.png"/><br />
					<span>陈**</span><br />
					软通动力<br />
					iOS开发工程师<br />
					<br />
					<span>薪资</span><br />
					<span>11000元/月</span>
				</li><li>
					<img src="img/index/learninguser4.png"/><br />
					<span>刘*</span><br />
					众信利华<br />
					iOS开发工程师<br />
					<br />
					<span>薪资</span><br />
					<span>12000元/月</span>
				</li>
				<li>
					<img src="img/index/learninguser5.png"/><br />
					<span>孙*</span><br />
					国富商通<br />
					iOS开发工程师<br />
					<br />
					<span>薪资</span><br />
					<span>10000元/月</span>
				</li>
			</ul>
			<h2>合作机构</h2>
			<div class="hezuo">
			<ul class="clearfix">
				<li><a href="javascript:void(0);"><img src="img/index/cooperation1.png"/></a></li>
				<li><a href="javascript:void(0);"><img src="img/index/cooperation2.png"/></a></li>
				<li><a href="javascript:void(0);"><img src="img/index/cooperation3.png"/></a></li>
				<li><a href="javascript:void(0);"><img src="img/index/cooperation4.png"/></a></li>
				<li><a href="javascript:void(0);"><img src="img/index/cooperation5.png"/></a></li>
				<li><a href="javascript:void(0);"><img src="img/index/cooperation6.png"/></a></li>
				<li><a href="javascript:void(0);"><img src="img/index/cooperation7.png"/></a></li>
				<li><a href="javascript:void(0);"><img src="img/index/cooperation8.png"/></a></li>
				<li><a href="javascript:void(0);"><img src="img/index/cooperation9.png"/></a></li>
				<li><a href="javascript:void(0);"><img src="img/index/cooperation10.png"/></a></li>
			</ul>
			<div class="he_left"><img src="img/index/cooperation_left.png"/></div>
			<div class="he_right"><img src="img/index/cooperation_right.png"/></div>
			</div>
	   	</div>
 	<!-- 底栏 -->
	   	<footer>
			<div class="footer">
				<div class="friend_line_bar clearfix">
					<h2>友情链接</h2>
					<ul class="clearfix">
						<li><a href="javascript:void(0);">蓝鸥科技</a></li>
						<li><a href="javascript:void(0);">蓝鸥科技</a></li>
						<li><a href="javascript:void(0);">蓝鸥科技</a></li>
						<li><a href="javascript:void(0);">蓝鸥科技</a></li>
						<li><a href="javascript:void(0);">蓝鸥科技</a></li>
						<li><a href="javascript:void(0);">蓝鸥科技</a></li>
					
					</ul>
					<a class="more_btn" href="friend_line.html">更多</a>
				</div>
				<div class="footer_info clearfix">
					<div class="f_info_list">
						<h3>我们的实验室</h3>
						<ul>
							<li><a href="javascript:void(0);">在线编程</a></li>
							<li><a href="javascript:void(0);">奖学制度</a></li>
							<li><a href="javascript:void(0);">在线班级</a></li>
							<li><a href="javascript:void(0);">课后60分钟考试</a></li>						
						</ul>
					</div>
					<div class="f_info_list">
						<h3>关于我们</h3>
						<ul>
							<li><a href="javascript:void(0);">精英吧简介</a></li>
							<li><a href="javascript:void(0);">联系我们</a></li>
							<li><a href="javascript:void(0);">加入我们</a></li>					
						</ul>
					</div>
					<div class="f_info_list">
						<h3>现有课程</h3>
						<ul>
							<li><a href="javascript:void(0);">iOS</a></li>
							<li><a href="javascript:void(0);">Android</a></li>
							<li><a href="javascript:void(0);">unity3D</a></li>
							<li><a href="javascript:void(0);">H5</a></li>						
						</ul>
					</div>
					<div class="f_info_list">
						<h3>帮助</h3>
						<ul>
							<li><a href="javascript:void(0);">联系客服</a></li>
							<li><a href="javascript:void(0);">版权声明</a></li>
							<li><a href="javascript:void(0);">法律声明</a></li>
							<li><a href="javascript:void(0);">服务条款</a></li>						
						</ul>
					</div>
					<div class="f_info_list list5">
						<h3>反馈方式</h3>
						<ul>
							<li><a href="javascript:void(0);">电子邮箱：help@xxxxxx.com</a></li>
							<li><a href="javascript:void(0);">精英吧微信公众号</a></li>
							<li>	<img src="img/index/weixin_code.png" alt="" /></li>				
						</ul>
					</div>
					<div class="f_info_list list6">
						<h3>精英吧APP扫描下载</h3>
						<img src="img/index/app_code.png"/>
					</div>
				</div>
			</div>
			<div class="company_name">蓝鸥科技有限公司©1997-2016 | 北京市海淀区清河毛纺路路南甲36号金五星商业大厦5层</div>
		</footer>
	<!-- 回到顶部 -->
		<div class="scroll">
			<div class="gong clearfix">
				<a href="javascript:void(0);">公众号</a> 
				<div class="weixingongzong">
				<img src="img/index/2d.png"/>
				</div>
			</div>
			<div class="question clearfix"><a href="javascript:void(0);">问卷调查</a></div>
			<div class="liuyan clearfix"><a href="javascript:void(0);">在线留言</a></div>
			<div class="scroll_btn"><img src="img/index/returntotop.png"/></div>
		</div>
		<script src="js/lib/jquery.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/index.js" type="text/javascript" charset="utf-8"></script>
	</body>
</html>
