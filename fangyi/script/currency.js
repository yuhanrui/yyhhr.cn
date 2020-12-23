//YuHanRui
var idquan = document.getElementById('idquan');
var a = 1;
idquan.parentNode.onclick = function() {
	if (a == 1){
		idquan.style.visibility = 'hidden';
		a = 0;
	}
	else{
		idquan.style.visibility = '';
		a = 1;
	}
}

var idyzm = document.getElementById('idyzm');
idyzm.onclick = function() {
	alert('暂时无法提供服务');
}
var idyzmy = document.getElementById('idyzmy');
idyzmy.onclick = function() {
	alert('暂时无法提供服务');
}

var shuru = function shuruhs() {
	this.lastElementChild.style.display = 'block';
	this.lastElementChild.style.fontSize = '14px';
	this.lastElementChild.style.top = '-25px';
	this.lastElementChild.style.color = '#fdb115';
	this.firstElementChild.focus();
}
var noshuru = function noshuruhs() {
	if (this.value == '') {
		this.nextElementSibling.style.display = 'block';
		this.nextElementSibling.style.fontSize = '16px';
	    this.nextElementSibling.style.top = '0';
	    this.nextElementSibling.style.color = 'rgba(0,0,0,.3)';
	}
	else{
		this.nextElementSibling.style.display = 'none';
	}
}
var idform1 = document.getElementById('idform1');
idform1.parentNode.onclick = shuru;
idform1.previousElementSibling.onblur = noshuru;
var idform2 = document.getElementById('idform2');
idform2.parentNode.onclick = shuru;
idform2.previousElementSibling.onblur = noshuru;
var idform3 = document.getElementById('idform3');
idform3.parentNode.onclick = shuru;
idform3.previousElementSibling.onblur = noshuru;
var idmailbox1 = document.getElementById('idmailbox1');
idmailbox1.parentNode.onclick = shuru;
idmailbox1.previousElementSibling.onblur = noshuru;
var idmailbox2 = document.getElementById('idmailbox2');
idmailbox2.parentNode.onclick = shuru;
idmailbox2.previousElementSibling.onblur = noshuru;
var idmailbox3 = document.getElementById('idmailbox3');
idmailbox3.parentNode.onclick = shuru;
idmailbox3.previousElementSibling.onblur = noshuru;

var idmima = document.getElementById('idmima');
var idmimaright = document.getElementById('idmimaright');
var b = 1;
var mima = function() {
	if (b == 1){
		idmima.src = 'images/shut.png';
		idmima.previousElementSibling.firstElementChild.type = 'password';
		idmimaright.src = 'images/shut.png';
		idmimaright.previousElementSibling.firstElementChild.type = 'password';
		b = 0;
	}
	else{
		idmima.src = 'images/open.png';
		idmima.previousElementSibling.firstElementChild.type = 'text';
		idmimaright.src = 'images/open.png';
		idmimaright.previousElementSibling.firstElementChild.type = 'text';
		b = 1;
	}
}
idmima.onclick = mima;
idmimaright.onclick = mima;

var region =document.querySelector('.region');
var c = 1;
region.previousElementSibling.onclick = function() {
	if (c == 1){
		region.style.display = 'block';
		region.parentNode.nextElementSibling.src = 'images/top.png'
		c = 0;
	}
	else{
		region.style.display = 'none';
		region.parentNode.nextElementSibling.src = 'images/bottom.png'
		c = 1;
	}
}
var regionhs = function regiondhs() {
	region.previousElementSibling.innerText = this.firstElementChild.innerText;
	region.style.display = 'none';
	region.parentNode.nextElementSibling.src = 'images/bottom.png'
	c = 1;
}
for (var i = 1; i <= 12; i++) {
	var y = 'idregion' + i;
	var idregion1 = document.getElementById(y);
    idregion1.parentNode.onclick = regionhs;
}