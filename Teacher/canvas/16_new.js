function doFirst(){
	var x = document.getElementById('canvas');
	var canvas = x.getContext('2d');
	
	canvas.lineWidth = 5;
	canvas.strokeStyle = 'red';

	canvas.arc(200,250,100,0, Math.PI, false);	
	canvas.stroke();
	
	canvas.beginPath();
	canvas.arc(500,250,100,0, Math.PI, true);	
	canvas.stroke();
	
	canvas.beginPath();
	canvas.arc(200,500,100,0, 3/2 * Math.PI, false);	
	canvas.stroke();
	
	canvas.beginPath();
	canvas.arc(500,500,100,0, 2 * Math.PI, false);	
	canvas.stroke();
}
window.addEventListener('load',doFirst,false);
