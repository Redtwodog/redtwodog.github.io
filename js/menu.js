window.onload=function(){
	var close=document.getElementById('menu');
	close.onmouseover=function(){
		startMove(0)
	};
	close.onmouseout=function(){
		startMove(-200)
	}
	var timer=null;
	function startMove(ev){
		clearInterval(timer);
		var speed=0;
		timer=setInterval(function(){
			if(close.offsetLeft<ev){
				speed=10;
			}
			else{speed=-10}
				if (close.offsetLeft==ev) {clearInterval(timer)}
					else{close.style.left=menu.offsetLeft+speed+'px'}
		},30)
	}
}