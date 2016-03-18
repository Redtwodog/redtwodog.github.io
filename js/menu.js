window.onload = function() {
	var close = document.getElementById('menu');
	close.onmouseover = function() {
		startMove(close,{left:0,opacity:100})
	};
	close.onmouseout = function() {
		startMove(close,{left:-200,opacity:30});
	}}