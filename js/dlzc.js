//输入框提示
$(".zhdw,.mmdw").prev().focus(function() {
	$(this).next().css("top","-31px");
	$(this).next().css("font-size","14px");
})
$(".zhdw,.mmdw").prev().blur(function() {
	if ($(this).val() == "") {
		$(this).next().css("display","block");
		$(this).next().css("top","0");
	    $(this).next().css("font-size","16px");
	}
	else{
		$(this).next().css("display","none");
	}
})
$(".zhdw,.mmdw").click(function() {
	$(this).prev().focus();
})
//登录事件
$("#dl").click(function(){
	var zh = $("#zh").val();
	var mm = $("#mm").val();
	if (zh.length == 0 && mm.length == 0) {
		layer.msg('请输入账号和密码');
	} else if(zh.length == 0) {
		layer.msg('请输入账号');
	} else if(mm.length == 0) {
		layer.msg('请输入密码');
	} else if(zh.length < 6) {
		layer.msg('请输入6位数以上账号');
	} else if(mm.length < 6) {
		layer.msg('请输入6位数以上密码');
	} else if(zh.length > 18) {
		layer.msg('请输入18位数以下账号');
	} else if(mm.length > 18) {
		layer.msg('请输入18位数以下密码');
	} else{  //Ajax
		var lj;
	    if (window.XMLHttpRequest) {  // code for IE7+, Firefox, Chrome, Opera, Safari
	    	lj = new XMLHttpRequest();
        } else {  // code for IE6, IE5
        	lj = new ActiveXObject("Microsoft.XMLHTTP");
        }
        lj.open("post","../php/zc.php",true);
        lj.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        dlsj = "zh="+zh+"&mm="+mm;
        lj.send(dlsj);
        lj.onreadystatechange = function() {
        	if (lj.readyState == 4 && lj.status == 200) {
        		var a = lj.responseText;
        		if (a == 0) {
        			layer.msg('该账号已被注册');
        		} else if(a == 1) {
        			layer.confirm('注册成功！是否去登录', {
                    btn: ['登录','我还要注册~'] //按钮
                }, function(){
                	window.location.replace("../xtwxsh.html");
                }, function(){
                	layer.msg('注册那么多干嘛', {
                        time: 20000, //20s后自动关闭
                        btn: ['我就要', '哈哈哈哈哈']
                    });
                });
        		} else {
        			layer.msg('注册失败');
        		}
        	}
        }
    }
})

var mouseX = 0,
mouseY = 0,
windowHalfX = window.innerWidth / 2,
windowHalfY = window.innerHeight / 2,
SEPARATION = 200,
AMOUNTX = 10,
AMOUNTY = 10,
camera,
scene,
renderer;
init();
animate();
function init() {
	var container,
	separation = 100,
	amountX = 50,
	amountY = 50,
	particle;
	container = document.createElement( 'div' );
	document.body.appendChild( container );
	scene = new THREE.Scene();
	renderer = new THREE.CanvasRenderer({ alpha: true });
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );
	camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,1,10000);
	camera.position.z = 100;
	var PI2 = Math.PI * 2;
	var material = new THREE.SpriteCanvasMaterial({
		color: 0xffffff,
		program: function ( context ) {
			context.beginPath();
			context.arc( 0, 0, 0.5, 0, PI2, true);
			context.fill();
		}
	});
	var geometry = new THREE.Geometry();
	for ( var i = 0; i < 100; i ++ ) {
		particle = new THREE.Sprite( material );
		particle.position.x = Math.random() * 2 - 1;
		particle.position.y = Math.random() * 2 - 1;
		particle.position.z = Math.random() * 2 - 1;
		particle.position.normalize();
		particle.position.multiplyScalar( Math.random() * 10 + 450 );
		particle.scale.x = particle.scale.y = 10;
		scene.add( particle );
		geometry.vertices.push( particle.position );
	}
            // lines
            var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0xffffff, opacity: 0.5 } ) );
            scene.add( line );
            // mousey
            document.addEventListener( 'mousemove', onDocumentMouseMove, false );
            document.addEventListener( 'touchstart', onDocumentTouchStart, false );
            document.addEventListener( 'touchmove', onDocumentTouchMove, false );
            window.addEventListener( 'resize', onWindowResize, false );
	    } // end init();
	    function onWindowResize() {
	    	windowHalfX = window.innerWidth / 2;
	    	windowHalfY = window.innerHeight / 2;
	    	camera.aspect = window.innerWidth / window.innerHeight;
	    	camera.updateProjectionMatrix();
	    	renderer.setSize( window.innerWidth, window.innerHeight );
	    }
	    function onDocumentMouseMove(event) {
	    	mouseX = event.clientX - windowHalfX;
	    	mouseY = event.clientY - windowHalfY;
	    }
	    function onDocumentTouchStart( event ) {
	    	if ( event.touches.length > 1 ) {
	    		event.preventDefault();
	    		mouseX = event.touches[ 0 ].pageX - windowHalfX;
	    		mouseY = event.touches[ 0 ].pageY - windowHalfY;
	    	}
	    }
	    function onDocumentTouchMove( event ) {
	    	if ( event.touches.length == 1 ) {

	    		event.preventDefault();

	    		mouseX = event.touches[ 0 ].pageX - windowHalfX;
	    		mouseY = event.touches[ 0 ].pageY - windowHalfY;

	    	}
	    }
	    function animate() {

	    	requestAnimationFrame( animate );
	    	render();

	    }
	    function render() {

	    	camera.position.x += ( mouseX - camera.position.x ) * .05;
	    	camera.position.y += ( - mouseY + 200 - camera.position.y ) * .05;
	    	camera.lookAt( scene.position );

	    	renderer.render( scene, camera );

	    }