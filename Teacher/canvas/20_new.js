function doFirst(){
	var x = document.getElementById('canvas');
	var canvas = x.getContext('2d');
	
	canvas.lineWidth = 5;
	canvas.strokeStyle = 'red';

	canvas.moveTo(150,150);
	canvas.quadraticCurveTo(250,320,450,100);	
	canvas.stroke();
	
	canvas.lineWidth = 1;
	canvas.strokeStyle = 'blue';
	
	canvas.beginPath();
	canvas.moveTo(150,150);
	canvas.lineTo(250,320);
	canvas.lineTo(450,100);
	canvas.stroke();
	
}
window.addEventListener('load',doFirst,false);
