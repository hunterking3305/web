function doFirst(){
	var x = document.getElementById('canvas');
	var canvas = x.getContext('2d');
	
	canvas.lineWidth = 5;
	canvas.strokeStyle = 'red';

	canvas.moveTo(150,400);
	canvas.arcTo(320,100,500,350,150);	
	canvas.stroke();
	
	canvas.lineWidth = 1;
	canvas.strokeStyle = 'blue';
	
	canvas.beginPath();
	canvas.moveTo(150,400);
	canvas.lineTo(320,100);
	canvas.lineTo(500,350);
	canvas.stroke();
}
window.addEventListener('load',doFirst,false);
