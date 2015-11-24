function doFirst(){
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');
	
	document.addEventListener('mousemove', usePen, false);
}
function usePen(e){
	canvas.strokeRect(e.clientX, e.clientY,10,10);
}
window.addEventListener('load',doFirst,false);
