//加载
$(window).load(function(){
	$('body').addClass('loaded');
	$('#loader-wrapper .load_title').remove();
});
$(function() {
	$.ajax({
		type: 'post',
		url: '../php/dianzan.php',
		dataType: 'json',
		success: function(data) {
			for (var i = 0; i < 10; i++) {
				$("#d"+i).text(data[i].zan);
			}
		}
	})
})
function jr() {
	$("body").removeClass('loaded');
	$("#loader-wrapper .load_title").css("display","none");
	$("#ccss").attr("href","");
}
//导航栏stear
$(".gerensj").mouseenter(function() {
	$(this).find("div").slideDown();
});
$(".gerensj").mouseleave(function() {
	$(this).find("div").slideUp();
});
//导航栏end
//炫酷背景stear
var pingmuwidth = document.documentElement.clientWidth;
var pingmuheight = document.documentElement.clientHeight;
if (pingmuwidth < 768){
	$(".beijing").css("height",pingmuheight*0.4);
}
else {
	$(".beijing").css("height",pingmuheight*0.6);
}
window.onresize = function(){
	pingmuwidth = document.documentElement.clientWidth;
	pingmuheight = document.documentElement.clientHeight;
	if (pingmuwidth < 768){
		$(".beijing").css("height",pingmuheight*0.4);
	}
	else {
		$(".beijing").css("height",pingmuheight*0.6);
	}
}
window.onscroll = function() {
	var gunchutop = document.documentElement.scrollTop;
	if (gunchutop >= 1) {
		$(".daohang").css("background","rgba(5,2,15,1)");
	}
	else {
		$(".daohang").css("background","rgba(7,5,14,0)");
	}
}
//炫酷背景end
//毕业相册stear
$(function(){
	/*瀑布流开始*/
	var container = $('.waterfull ul');
	var loading=$('#imloading');
	// 初始化loading状态
	loading.data("on",true);
	/*判断瀑布流最大布局宽度，最大为1280*/
	function tores(){
		var tmpWid=$(window).width();
		if(tmpWid>1280){
			tmpWid=1280;
		}else{
			var column=Math.floor(tmpWid/320);
			tmpWid=column*320;
		}
		$('.waterfull').width(tmpWid);
	}
	tores();
	$(window).resize(function(){
		tores();
	});
	container.imagesLoaded(function(){
		container.masonry({
			columnWidth: 320,
			itemSelector : '.item',
		    isFitWidth: true,//是否根据浏览器窗口大小自动适应默认false
		    isAnimated: true,//是否采用jquery动画进行重拍版
		    isRTL:false,//设置布局的排列方式，即：定位砖块时，是从左向右排列还是从右向左排列。默认值为false，即从左向右
		    isResizable: true,//是否自动布局默认true
		    animationOptions: {
		    	duration: 800,
			easing: 'easeInOutBack',//如果你引用了jQeasing这里就可以添加对应的动态动画效果，如果没引用删除这行，默认是匀速变化
			queue: false//是否队列，从一点填充瀑布流
		}
	});
	});
	/*从后台获取到的数据*/

	var sqlsj = 1;
	var sqlJson=['images/by/11.jpg','images/by/12.jpg','images/by/13.jpg','images/by/14.jpg','images/by/15.jpg','images/by/16.jpg','images/by/17.jpg','images/by/18.jpg','images/by/19.jpg','images/by/20.jpg','images/by/21.jpg','images/by/22.jpg','images/by/23.jpg','images/by/24.jpg','images/by/25.jpg','images/by/26.jpg','images/by/27.jpg','images/by/28.jpg','images/by/29.jpg'];
	/*本应该通过ajax从后台请求过来类似sqljson的数据然后，便利，进行填充，这里我们用sqlJson来模拟一下数据*/
	$(window).scroll(function(){
		if(!loading.data("on")) return;
	    // 计算所有瀑布流块中距离顶部最大，进而在滚动条滚动时，来进行ajax请求，方法很多这里只列举最简单一种，最易理解一种
	    var itemNum=$('#waterfull').find('.item').length;
	    var itemArr=[];
	    itemArr[0]=$('#waterfull').find('.item').eq(itemNum-1).offset().top+$('#waterfull').find('.item').eq(itemNum-1)[0].offsetHeight;
	    itemArr[1]=$('#waterfull').find('.item').eq(itemNum-2).offset().top+$('#waterfull').find('.item').eq(itemNum-1)[0].offsetHeight;
	    itemArr[2]=$('#waterfull').find('.item').eq(itemNum-3).offset().top+$('#waterfull').find('.item').eq(itemNum-1)[0].offsetHeight;
	    var maxTop=Math.max.apply(null,itemArr);
	    if(maxTop<$(window).height()+$(document).scrollTop()){
		    //加载更多数据
		    loading.data("on",false).fadeIn(800);
		    (function(sqlJson){
		    	$.ajax({
		    		type: 'post',
		    		url: '../php/dianzan.php',
		    		dataType: 'json',
		    		success: function(data) {
		    			if(itemNum==29){
		    				loading.html('<a href="javascript:jsz();">点击查看更多</a>');
		    				$("#imloading").css("margin-top","20px");
		    			}
		    			else {
		    				var html="";
		    				if (sqlsj == 1) {
		    					for (var i = 0; i <4; i++) {
		    						html+="<li class='item'><a href='javascript:zanzan("+(i+11)+");' class='a-img'><img src='"+sqlJson[i]+"' alt=''></a><div class='qianm clearfloat'><span class='sp1'><b id='d"+(i+10)+"'>"+data[i+10].zan+"</b>点赞</span><span class='sp3'>点个赞呗&nbsp;</span></div></li>";
		    					}
		    					sqlsj = 2;
		    				}
		    				else if (sqlsj == 2) {
		    					for (var i = 4; i <8; i++) {
		    						html+="<li class='item'><a href='javascript:zanzan("+(i+11)+");' class='a-img'><img src='"+sqlJson[i]+"' alt=''></a><div class='qianm clearfloat'><span class='sp1'><b id='d"+(i+10)+"'>"+data[i+10].zan+"</b>点赞</span><span class='sp3'>点个赞呗&nbsp;</span></div></li>";
		    					}
		    					sqlsj = 3;
		    				}
		    				else if (sqlsj == 3) {
		    					for (var i = 8; i <12; i++) {
		    						html+="<li class='item'><a href='javascript:zanzan("+(i+11)+");' class='a-img'><img src='"+sqlJson[i]+"' alt=''></a><div class='qianm clearfloat'><span class='sp1'><b id='d"+(i+10)+"'>"+data[i+10].zan+"</b>点赞</span><span class='sp3'>点个赞呗&nbsp;</span></div></li>";
		    					}
		    					sqlsj = 4;
		    				}
		    				else if (sqlsj == 4) {
		    					for (var i = 12; i <16; i++) {
		    						html+="<li class='item'><a href='javascript:zanzan("+(i+11)+");' class='a-img'><img src='"+sqlJson[i]+"' alt=''></a><div class='qianm clearfloat'><span class='sp1'><b id='d"+(i+10)+"'>"+data[i+10].zan+"</b>点赞</span><span class='sp3'>点个赞呗&nbsp;</span></div></li>";
		    					}
		    					sqlsj = 5;
		    				}
		    				else if (sqlsj == 5) {
		    					for (var i = 16; i <19; i++) {
		    						html+="<li class='item'><a href='javascript:zanzan("+(i+11)+");' class='a-img'><img src='"+sqlJson[i]+"' alt=''></a><div class='qianm clearfloat'><span class='sp1'><b id='d"+(i+10)+"'>"+data[i+10].zan+"</b>点赞</span><span class='sp3'>点个赞呗&nbsp;</span></div></li>";
		    					}
		    					sqlsj = 6;
		    				}
		    				/*模拟ajax请求数据时延时800毫秒*/
		    				var time=setTimeout(function(){
		    					$(html).find('img').each(function(index){
		    						loadImage($(this).attr('src'));
		    					})
		    					var $newElems = $(html).css({ opacity: 0}).appendTo(container);
		    					$newElems.imagesLoaded(function(){
		    						$newElems.animate({ opacity: 1},500);
		    						container.masonry( 'appended', $newElems,true);
		    						loading.data("on",true).fadeOut();
		    						clearTimeout(time);
		    					});
		    				},100)
		    			}
		    		}
		    	})
		    	/*这里会根据后台返回的数据来判断是否你进行分页或者数据加载完毕这里假设大于30就不在加载数据*/
		    })(sqlJson);
		}
	});
	function loadImage(url) {
		var img = new Image(); 
	    //创建一个Image对象，实现图片的预下载
	    img.src = url;
	    if (img.complete) {
	    	return img.src;
	    }
	    img.onload = function () {
	    	return img.src;
	    };
	};
	loadImage('images/one.jpg');
	/*item hover效果*/
	var rbgB=['#71D3F5','#F0C179','#F28386','#8BD38B'];
	$('#waterfull').on('mouseover','.item',function(){
		var random=Math.floor(Math.random() * 4);
		$(this).stop(true).animate({'backgroundColor':rbgB[random]},1000);
	});
	$('#waterfull').on('mouseout','.item',function(){
		$(this).stop(true).animate({'backgroundColor':'#fff'},1000);
	});
})
function zanzan(a) {
	$.ajax({
		type: 'post',
		url: '../php/dzxg.php',
		data: {name:a},
		dataType: 'json',
		success: function() {
			var b = parseInt($("#d"+(a-1)).text());
			$("#d"+(a-1)).text(b+1);
		}
	})
}
function jsz() {
	layer.msg(' 网站持续建设中 ~ ');
}
function jwx() {
	layer.confirm('微信号： YuHanRui_', {
        btn: ['加微信','不加'] //按钮
    }, function(){
    	window.location.href = "../images/weixin.jpg";
    }, function(){
    	layer.msg('为什么不加我', {
            time: 20000, //20s后自动关闭
            btn: ['加，必须加', '好的，好的，加']
        });
    });
}
//毕业相册end
//摄影剪辑stear
var videos = document.getElementsByTagName('video');
for (var i = videos.length - 1; i >= 0; i--) {
	(function(){
		var p = i;
		videos[p].addEventListener('play',function(){
			pauseAll(p);
		})
	})()
}
function pauseAll(index){
	for (var j = videos.length - 1; j >= 0; j--) {
		if (j!=index) videos[j].pause();
	}
}
$(".jj div").mouseover(function(){
	$(this).find("div").css("opacity","1");
});
$(".jj div").mouseout(function(){
    $(this).find("div").css("opacity","0");
});
//摄影剪辑end