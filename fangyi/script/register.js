//YuHanRui
var idmode = document.getElementById('idmode');
var e = 1;
idmode.lastElementChild.onclick = function() {
	if (e == 1) {
		idform1.parentNode.parentNode.style.left = '-370px';
	    idform2.parentNode.parentNode.style.left = '-370px';
	    idform3.parentNode.parentNode.style.left = '-370px';
	    idmailbox1.parentNode.parentNode.style.left = '0';
	    idmailbox2.parentNode.parentNode.style.left = '0';
	    idmailbox3.parentNode.parentNode.style.left = '0';
	    idmode.firstElementChild.innerText = '不想使用邮箱注册，使用';
	    idmode.lastElementChild.innerText = '手机号注册 >';
	    e = 0;
	}
	else{
		idform1.parentNode.parentNode.style.left = '0';
	    idform2.parentNode.parentNode.style.left = '0';
	    idform3.parentNode.parentNode.style.left = '0';
	    idmailbox1.parentNode.parentNode.style.left = '370px';
	    idmailbox2.parentNode.parentNode.style.left = '370px';
	    idmailbox3.parentNode.parentNode.style.left = '370px';
	    idmode.firstElementChild.innerText = '不想使用手机号注册，使用';
	    idmode.lastElementChild.innerText = '邮箱注册 >';
	    e = 1;
	}
}