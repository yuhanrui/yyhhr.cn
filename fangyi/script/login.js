//YuHanRui
var idmodedl = document.getElementById('idmodedl');
var f = 1;
idmodedl.lastElementChild.onclick = function() {
	if (f == 1) {
		idform1.parentNode.parentNode.style.left = '-370px';
	    idform2.parentNode.parentNode.style.left = '-370px';
	    idform3.parentNode.parentNode.style.left = '-370px';
	    idmailbox1.parentNode.parentNode.style.left = '0';
	    idmailbox2.parentNode.parentNode.style.left = '0';
	    idmailbox3.parentNode.parentNode.style.left = '0';
	    idmodedl.firstElementChild.innerText = '不想使用邮箱登录，使用';
	    idmodedl.lastElementChild.innerText = '手机号登录 >';
	    f = 0;
	}
	else{
		idform1.parentNode.parentNode.style.left = '0';
	    idform2.parentNode.parentNode.style.left = '0';
	    idform3.parentNode.parentNode.style.left = '0';
	    idmailbox1.parentNode.parentNode.style.left = '370px';
	    idmailbox2.parentNode.parentNode.style.left = '370px';
	    idmailbox3.parentNode.parentNode.style.left = '370px';
	    idmodedl.firstElementChild.innerText = '不想使用手机号登录，使用';
	    idmodedl.lastElementChild.innerText = '邮箱登录 >';
	    f = 1;
	}
}