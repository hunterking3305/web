function doFirst(){
	var x = document.getElementById('canvas');
	var canvas = x.getContext('2d');
	
	canvas.lineWidth = 5;
	canvas.strokeStyle = 'red';

	canvas.moveTo(150,300);
	canvas.bezierCurveTo(200,120,450,90,550,400);	
	canvas.stroke();
	
	canvas.lineWidth = 1;
	canvas.strokeStyle = 'blue';
	
	canvas.beginPath();
	canvas.moveTo(150,300);
	canvas.lineTo(200,120);
	canvas.lineTo(450,90);
	canvas.lineTo(550,400);
	canvas.stroke();
	
}
window.addEventListener('load',doFirst,false);
