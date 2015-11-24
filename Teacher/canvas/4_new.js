function doFirst(){
	var x = document.getElementById('canvas');
	var canvas = x.getContext('2d');
	
	canvas.moveTo(100,100);
	canvas.lineTo(200,200);
	canvas.lineTo(350,80);
	canvas.closePath();
	
	canvas.stroke();	
}
window.addEventListener('load',doFirst,false);
