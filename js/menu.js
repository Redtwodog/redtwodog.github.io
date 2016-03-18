window.onload = function() {
	var close = document.getElementById('menu');
	close.onmouseover = function() {
		startMove(0);
		startOpactiy(100);
	};
	close.onmouseout = function() {
		startMove(-200);
		startOpactiy(30);
	}
}
var timer = null;
var timer2 = null;
var alpha = 30;

function startMove(ev) {
	var close = document.getElementById('menu');
	clearInterval(timer);
	var speed = (ev - close.offsetLeft) / 40;
	speed=speed>0?Math.ceil(speed):Math.floor(speed);
	timer = setInterval(function() {
		if (close.offsetLeft == ev) {
			clearInterval(timer)
		} else {
			close.style.left = menu.offsetLeft + speed + 'px'
		}
	}, 30)
}

function startOpactiy(target) {
	var close = document.getElementById('menu');
	clearInterval(timer2);
	var speed2 = 0;
	timer2 = setInterval(function() {
		if (alpha > target) {
			speed2 = -10;
		} else {
			speed2 = 10;
		}
		if (alpha == target) {
			clearInterval(timer2)
		} else {
			alpha += speed2;
			close.style.filter = 'alpha(opacity=' + alpha + ')';
			close.style.opacity = alpha / 100;
		}
	}, 30)
}