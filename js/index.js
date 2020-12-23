//网页加载后执行事件
$(function () {
    $('#myTab a:first').tab('show');
 })
//获取窗口宽度
var lunle = document.documentElement.clientWidth;
if (lunle < 768) {
	alert('此网站不支持移动端');
}
//导航栏start
//加载layui,导航依赖element模块，否则无法进行功能性操作
layui.use('element', function() {
  var element = layui.element;
  element.on('nav(demo)', function(elem){
    layer.msg(elem.text());
  });
});
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
//轮播图文字位置
function lunbotext() {
	var lunbotextl = lunle/2+80;
	$(".lunbotext").css("left",lunbotextl);
}
lunbotext();
//浏览器窗口大小被改变时触发事件
window.onresize = function(){
	lunle = document.documentElement.clientWidth;
    lunbotext();
}
//页面滚动事件
window.onscroll = function() {
	var gunchutop = document.documentElement.scrollTop;
	if (gunchutop >= 1) {
		//导航栏背景出现
		$(".daohangby").css({
			"background":"rgba(30,159,255,1)",
			"width":"100%"
	    });
	    //遮挡消失
	    $(".zhedang").css("opacity","0");
	}
	else {
		//导航栏背景消失
		$(".daohangby").css({
			"background":"rgba(30,159,255,0)",
			"width":"10%"
	    });
	}
}
//导航栏end
//轮播图start
$(".lunbo2").css("left",lunle);
var lunshu = 1;
function lunboyd(e) {
	$(".lunbo"+e).css({
		"left":lunle,
		"transform":"scale(0.7)"
	});
}
function lunboxg(a,b) {
	$(".lunbo"+a).css({
		"left":-lunle,
		"transform":"scale(0.8)",
		"opacity":"0.2",
		"z-index":"1"
	});
	$(".lunbo"+b).css({
		"left":"0",
		"transform":"scale(1)",
		"opacity":"1",
		"z-index":"2"
	});
	setTimeout("lunboyd("+a+")",3000);
}
function lunbopd() {
	if (lunshu == 1) {
		lunboxg(1,2);
		lunshu = 2;
	}
	else{
		lunboxg(2,1);
		lunshu = 1;
	}
}
setInterval("lunbopd()",5000);
//轮播图end
//简历start
//启动标签页
$('#myTab a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
  $(this).parent().attr('class','active');
  $(this).parent().siblings().attr('class','');
  if ($(this).attr("alt") == 1) {
  	layer.msg(' 网站持续建设中 ~ ');
  }
})
//音乐下载
$('.table div span').click(function() {
	var a = $(this).attr("alt")+".mp3";
	download("./music/"+a,a,"source/mp3");
})
//音频播放
//创建Audio对象
var song = new Audio;
//歌曲暂停
var isStopped = true;
//当前歌曲
var currentSong = 0;
//播放列表
var playlist = ["红色高跟鞋","偏爱","起风了","寄","年轮说"];
//播放列表可见
var playlistVisible = false;
function bofanglb() {
	for (var i = 0; i <5; i++) {
	    $("#bofanglb"+i).text(playlist[i]);
	}
}
//上一首或下一首
function skip(to) {
	//上一首
	if (to == 'prev') {
		stop();
		//第一首时上一首跳到最后一首
		currentSong = (--currentSong)%playlist.length;
		if (currentSong < 0) {
			currentSong += playlist.length;
		}
		playpause();
	}
	//下一首
	else if (to == 'next') {
		stop();
		currentSong = (++currentSong)%playlist.length;
		playpause();
	}
	else if (to < 5) {
		playlist = ["红色高跟鞋","偏爱","起风了","寄","年轮说"];
		bofanglb();
		if (to == '0') {
		    stop();
		    currentSong = (to)%playlist.length;
		    playpause();
	    }
	    else if (to == '1') {
		    stop();
		    currentSong = (to)%playlist.length;
		    playpause();
	    }
	    else if (to == '2') {
	    	stop();
	    	currentSong = (to)%playlist.length;
		    playpause();
	    }
	    else if (to == '3') {
	    	stop();
		    currentSong = (to)%playlist.length;
		    playpause();
	    }
	    else if (to == '4') {
		    stop();
		    currentSong = (to)%playlist.length;
		    playpause();
	    }
	}
	else if (to <10) {
		playlist = ["南山南","姑娘","往后余生","故梦","撒野"];
		bofanglb();
		if (to == '5') {
		    stop();
		    currentSong = (to-5)%playlist.length;
		    playpause();
	    }
	    else if (to == '6') {
		    stop();
		    currentSong = (to-5)%playlist.length;
		    playpause();
	    }
	    else if (to == '7') {
	    	stop();
	    	currentSong = (to-5)%playlist.length;
		    playpause();
	    }
	    else if (to == '8') {
	    	stop();
		    currentSong = (to-5)%playlist.length;
		    playpause();
	    }
	    else if (to == '9') {
		    stop();
		    currentSong = (to-5)%playlist.length;
		    playpause();
	    }
	}
	else if (to <15) {
		playlist = ["所念皆星河","Windy Hill","My Soul","夏の喚く","Adagio for Summer Wind"];
		bofanglb();
		if (to == '10') {
		    stop();
		    currentSong = (to-10)%playlist.length;
		    playpause();
	    }
	    else if (to == '11') {
		    stop();
		    currentSong = (to-10)%playlist.length;
		    playpause();
	    }
	    else if (to == '12') {
	    	stop();
	    	currentSong = (to-10)%playlist.length;
		    playpause();
	    }
	    else if (to == '13') {
	    	stop();
		    currentSong = (to-10)%playlist.length;
		    playpause();
	    }
	    else if (to == '14') {
		    stop();
		    currentSong = (to-10)%playlist.length;
		    playpause();
	    }
	}
	else if (to <20) {
		playlist = ["Dancin (Krono Remix)","Autumn（秋）","Nevada","Tony Igy-Astronomia","Sorrow"];
	    bofanglb();
		if (to == '15') {
		    stop();
		    currentSong = (to-15)%playlist.length;
		    playpause();
	    }
	    else if (to == '16') {
		    stop();
		    currentSong = (to-15)%playlist.length;
		    playpause();
	    }
	    else if (to == '17') {
	    	stop();
	    	currentSong = (to-15)%playlist.length;
		    playpause();
	    }
	    else if (to == '18') {
	    	stop();
		    currentSong = (to-15)%playlist.length;
		    playpause();
	    }
	    else if (to == '19') {
		    stop();
		    currentSong = (to-15)%playlist.length;
		    playpause();
	    }
	}
}
function stop() {
	//暂停音频
	song.pause();
	//更改播放图标
	document.getElementById('anniu2').className = "glyphicon glyphicon-play";
	//暂停动画
	document.getElementById("glow").classList.add("disable-animation");
	//设置音频播放位置最前面
	song.currentTime = 0;
	//播放器进度条
	document.getElementById("seek").value = 0;
	//歌曲是否暂停
	isStopped = true;
}
function playpause() {
	//判断音频是否暂停
	if (!song.paused) {
		//暂停音频
		song.pause();
		//更改播放图标
		document.getElementById('anniu2').className = "glyphicon glyphicon-play";
		//暂停动画
		document.getElementById("glow").classList.add("disable-animation");
	}
	else {
	    if (isStopped) {
	    	    //设置音频的src属性值
		    	song.src = "./music/"+playlist[currentSong]+".mp3";
		    }
		    //开始播放音频
		    song.play();
		    //歌曲文件  //没有用var关键字直接赋值方式声明的是全局变量  //split()方法用于把一个字符串分割成字符串数组
		    songFile = playlist[currentSong].split("/");
		    //设置歌名
		    songName = document.getElementById("songName");
		    songName.innerHTML = songFile[songFile.length - 1];
		    //继续动画
		    document.getElementById("glow").classList.remove("disable-animation");
		    //更改播放图标
		    document.getElementById('anniu2').className = "glyphicon glyphicon-pause";
		    //歌曲是否暂停
		    isStopped = false;
	    }
}
//滑动播放进度
function setPos(pos) {
	song.currentTime = pos;
}
//声音开关
function mute() {
	//判断是否关闭声音
	if (song.muted) {
		//开声音
		song.muted = false;
		//改变声音图标
		document.getElementById('mute').className = "glyphicon glyphicon-volume-up";
	}
	else {
		//关声音
		song.muted = true;
		//改变声音图标
		document.getElementById('mute').className = "glyphicon glyphicon-volume-off";
	}
}
//音量大小
function setVolume(volume) {
	song.volume = volume;
}
//显示或隐藏播放列表
function togglePlaylist() {
	//判断播放列表是否可见
	if (playlistVisible) {
		document.getElementById('playlist').className = "hide";
		document.getElementById('player').className = "";
		playlistVisible = false;
	}
	else {
		document.getElementById('player').className = "hide";
		document.getElementById('playlist').className = "";
		playlistVisible = true;
	}
}
//播放音乐地址文件
function addList() {
	//没有用var关键字直接赋值方式声明的是全局变量
	sourceUrl = document.getElementById('sourceUrl').value;
	sourceUrl.split(",").forEach((file) => {
		fileUrl = file.trim();
		if (fileUrl != "" && playlist.indexOf(fileUrl) == -1) {
			parent = document.getElementById('list');
			listItem = document.createElement('div');
			listItem.setAttribute('class','list-item');
			wrapper = document.createElement('div');
			wrapper.setAttribute('class','wrap-text');
			span = document.createElement('span');
			span.innerHTML = fileUrl;
			wrapper.appendChild(span);
			listItem.appendChild(wrapper);
			btn = document.createElement('button');
			btn.setAttribute('onclick','removeList(this)');
			btn.innerHTML = '×';
			listItem.appendChild(btn);
			parent.appendChild(listItem);
			playlist.push(fileUrl);
			document.getElementById('sourceUrl').value = '';
		}
	});
}
function removeList(item) {
	index = playlist.indexOf(item.parentElement.firstChild.innerText);
	if (index != -1){
		playlist.splice(index,1);
		item.parentElement.remove();
	}
}
//发生错误时触发事件
song.addEventListener('error', function(){
	stop();
	document.getElementById("songName").innerHTML = "Error Loading Audio";
});
//播放位置发生改变时触发事件
song.addEventListener('timeupdate', function() {
	//返回音频当前播放位置，返回十进制的整数
	curtime = parseInt(song.currentTime,10);
	//滑动条的音频长度
	document.getElementById('seek').max = song.duration;
	//滑动条的当前位置
	document.getElementById('seek').value = curtime;
});
//播放结束时触发事件
song.addEventListener("ended", function() {
	song.pause();
	song.currentTime = 0;
	document.getElementById('seek').value = 0;
	if ((currentSong + 1) >= playlist.length) {
		currentSong = 0;	
	}
	else {
		currentSong++;
	}
	stop();
	song.src = playlist[currentSong];
	playpause();
});
var input = document.getElementById("sourceUrl");
//按下按钮时触发事件
input.addEventListener("keyup", function(event) {
	//按下Enter键
	if (event.keyCode === 13) {
		//取消事件默认动作
		event.preventDefault();
		//播放音乐地址文件
		addList();
	}
});
//视频播放
function _extends() {_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};return _extends.apply(this, arguments);}const { ReactDOM, React, TimlineMax, TweenMax, Power0 } = window;
const { useState, useEffect, useRef } = React;
const { render } = ReactDOM;
const rootNode = document.getElementById('app');
const rootNodeq = document.getElementById('aqq');
const buildTimelines = (player, video) => {
  const indicators = player.querySelectorAll('.video-player__indicator');
  const playingTL = new TimelineMax().
  add(
  TweenMax.to(indicators[2], video.duration / 2, {
    scaleX: 1,
    ease: Power0.easeNone }),
  0).
  add(
  TweenMax.to(indicators[3], video.duration / 2, {
    scaleY: 1,
    ease: Power0.easeNone }),
  0).
  add(
  TweenMax.to(indicators[0], video.duration / 2, {
    scaleX: 1,
    ease: Power0.easeNone }),
  video.duration / 2).
  add(
  TweenMax.to(indicators[1], video.duration / 2, {
    scaleY: 1,
    ease: Power0.easeNone }),
  video.duration / 2);
  playingTL.seek(video.currentTime);
  playingTL.paused(true);
  const endingTL = new TimelineMax({
    onComplete: () => playingTL.seek(0),
    onReverseComplete: () => video.play() }).
  add(
  TweenMax.to(video, 0.25, {
    scale: 0 })).
  add(TweenMax.to(player.querySelector('.video-player__action'), 0.25, { scale: 1 }));
  endingTL.paused(true);
  return [playingTL, endingTL];
};
const VideoPlayer = ({ src, border = 5, accent = '#bada55', ...videoProps }) => {
  const [duration, setDuration] = useState(0);
  const playerRef = useRef(null);
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const timeRef = useRef(null);
  const playingTL = useRef(null);
  const endingTL = useRef(null);
  // If the video duration changes, lets build the timelines
  useEffect(() => {
    if (playerRef.current && videoRef.current && videoRef.current.duration > 0) {
      const [playing, ending] = buildTimelines(playerRef.current, videoRef.current);
      playingTL.current = playing;
      endingTL.current = ending;
      // updateTimestamp()
    }
  }, [duration]);
  const onPlay = () => playingTL.current && playingTL.current.play();
  const onPause = () => playingTL.current && playingTL.current.pause();
  const onEnded = () => endingTL.current && endingTL.current.play();
  const onSeeking = () => playingTL.current && playingTL.current.seek(videoRef.current.currentTime);
  const updateTimestamp = () => timeRef.current.innerText = `0:${videoRef.current.currentTime < 10 ? `0${Math.floor(videoRef.current.currentTime)}` : Math.floor(videoRef.current.currentTime)} / 0:${duration < 10 ? `0${Math.floor(duration)}` : Math.floor(duration)}`;
  const onTimeUpdate = () => {
    progressRef.current.value = videoRef.current.currentTime / videoRef.current.duration;
    // updateTimestamp()
  };
  const onReplay = () => {
    videoRef.current.currentTime = 0;
    endingTL.current.reverse();
  };
  const onInput = () => {
    videoRef.current.currentTime = videoRef.current.duration * progressRef.current.value;
    playingTL.current.seek(videoRef.current.duration * progressRef.current.value);
  };
  return (
    React.createElement("div", { ref: playerRef, className: "video-player", style: {
        '--accent': accent,
        '--border': border } },
    React.createElement("video", _extends({
      className: "video-player__video",
      controls: true,
      src: src,
      onPlay: onPlay,
      onPause: onPause,
      onEnded: onEnded,
      onDurationChange: () => setDuration(videoRef.current.duration),
      onSeeking: onSeeking,
      onTimeUpdate: onTimeUpdate,
      ref: videoRef },
    videoProps)),
    new Array(4).fill().map((i, idx) =>
    React.createElement("div", { key: `video-player-indicator--${idx}`, className: "video-player__indicator" })),
    React.createElement("button", { className: "video-player__action", onClick: onReplay },
    React.createElement("svg", { viewBox: "0 0 24 24" },
    React.createElement("path", { d: "M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z" })))));
};
//       <div className='video-player__controls'>
//         <span ref={timeRef} className='video-player__duration'>0:00 / 0:00</span>
//         <input defaultValue={0} ref={progressRef} type='range' min={0} max={1} step={0.001} onInput={onInput}/>
//       </div>
const App = () => {
  return (
    React.createElement(VideoPlayer, { src: "./video/团校培训.mp4" }));

};
const Aqq = () => {
  return (
    React.createElement(VideoPlayer, { src: "./video/干事户外扩展培训.mp4" }));

};
render(React.createElement(App, null), rootNode);
render(React.createElement(Aqq, null), rootNodeq);
//简历end
var sfz = 0;
function shenfenz() {
	if (sfz == 8) {
		sfz = -1;
		$("#shenfenz").css("opacity","0.6");
		setTimeout(function() {$("#shenfenz").attr("src","images/深份证/"+sfz+".png")},300);
		setTimeout(function() {$("#shenfenz").css("opacity","1")},300);
		++sfz;
	}
	else {
		$("#shenfenz").css("opacity","0.6");
		setTimeout(function() {$("#shenfenz").attr("src","images/深份证/"+sfz+".png")},300);
		setTimeout(function() {$("#shenfenz").css("opacity","1")},300);
		++sfz;
	}
}
setInterval("shenfenz()",3000);
//只能同时播放一个视频
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
//跳转新窗口
$(".ab1").click(function() {
	window.open($(this).attr("alt"));
})