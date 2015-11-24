function doFirst(){
	var x = document.getElementById('canvas');
	var canvas = x.getContext('2d');
//lineCap	
	canvas.lineWidth = 25;
	canvas.strokeStyle = 'red';
	
	canvas.lineCap = 'butt';
	canvas.moveTo(50,50);
	canvas.lineTo(250,50);
	canvas.stroke();
	
	canvas.beginPath();
	canvas.lineCap = 'round';
	canvas.moveTo(50,100);
	canvas.lineTo(250,100);
	canvas.stroke();
	
	canvas.beginPath();
	canvas.lineCap = 'square';
	canvas.moveTo(50,150);
	canvas.lineTo(250,150);
	canvas.stroke();
	
	canvas.beginPath();
	canvas.lineWidth = 5;
	canvas.strokeStyle = 'black';
	canvas.moveTo(50,25);
	canvas.lineTo(50,175);
	canvas.stroke();
//lineJoin	
	canvas.lineWidth = 25;
	canvas.strokeStyle = 'red';
	
	canvas.lineJoin = 'miter';
	canvas.strokeRect(50,300,200,250);
	
	canvas.lineJoin = 'round';
	canvas.strokeRect(350,300,200,250);
	
	canvas.lineJoin = 'bevel';
	canvas.strokeRect(650,300,200,250);
}
window.addEventListener('load',doFirst,false);
