;
$(function() {

		var list =$(".sel_list li");
		var blist =$(".sel_right");
			list.on("click",function(){	
				var index=$(this).index();
				$(this).addClass('active').siblings().removeClass('active');
				blist.hide().eq(index).show();	
			})
		/*****************************/
		$('.sel_right .sel_nav li').on('click',function(){
				var index=$(this).index();
				$(this).parents(".sel_right").find(".sel_tip").hide();
				$(this).parents(".sel_right").find(".chart").hide().eq(index).show();
				$(this).addClass('act1').siblings().removeClass('act1')
			})

			$(".link_ios").click(function(){
				$(".IOS").trigger("click");
				$(this).parents(".sel_tip").css({
					display:"none",
				})
			})
		/*****************************/
		var chart1 = echarts.init(document.getElementById('chart1'));
			option1 = {
			    title: {
			        text: '学习曲线：（你当前所在班级为A班）',
			        left: 'left'
			    },
			    tooltip: {},
			    legend: {
			        data:['销量','数量'],
			        left: 'right'
			    },
			    grid: {
			        left: '25px',
			        right: '25px',
			        bottom: '3%',
			        containLabel: true
			    },
			/*******下边的范围拖动条*******/
			   dataZoom: [
				        {
				            show: true,
				            realtime: true,
				            start: 30,
				            end: 70,
				            // xAxisIndex: [0, 1]
				        },
				        {
				            type: 'inside',
				            realtime: true,
				            start: 30,
				            end: 70,
				            // xAxisIndex: [0, 1]
				        }
				    ],
/******坐标轴*******/
			    xAxis: {
			    	text:"天数",
			        data: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"],
			        axisTick: {
			        	inside:true,
			            alignWithLabel: true
			            }
			    },
			    yAxis: {
			    	axisTick: {
			        	inside:true,
			            }
			    },
			//表内数据
			    series: [{
			        name: '销量',
			        type: 'line',
			        data: [5,"","","","","","","","","","","", 20, 36, 10, 10,"","","","","", 20]
			    },{
			        name: '数量',
			        type: 'line',
			        data: [60, 50, 40, 30, 20, 10]
			    }],   
			};
			 chart1.setOption(option1);//输出图表

		var chart2 = echarts.init(document.getElementById('chart2'));
			option2 = {
			    title: {
			        text: '学习曲线：（你当前所在班级为A班）',
			        left: 'left'
			    },
			    tooltip: {},
			    legend: {
			        data:['同学成绩','班级平均分'],
			        left: 'right'
			    },
			    grid: {
			        left: '25px',
			        right: '25px',
			        bottom: '3%',
			        containLabel: true
			    },
			   
			    xAxis: {
			    	text:"天数",
			        data: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"],
			        axisTick: {
			                alignWithLabel: true
			            }
			    },
			    yAxis: {},
			    series: [{
			        name: '同学成绩',
			        type: 'bar',
			        data: [5,"","","","","","","","","","","", 20, 36, 10, 10,"","","","","", 20]
			    },{
			        name: '班级平均分',
			        type: 'bar',
			        data: [60, 50, 40, 30, 20, 10]
			    }],   
			};
			chart2.setOption(option2);
});