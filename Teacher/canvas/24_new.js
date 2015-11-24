function doFirst(){
	var x = document.getElementById('canvas');
	var canvas = x.getContext('2d');
	
	canvas.lineWidth = 5;
	canvas.strokeStyle = 'red';
	canvas.fillStyle = 'pink';	
	
	canvas.arc(200,200,100,0, 2 * Math.PI, false);	
	canvas.stroke();
	canvas.fill();
	
	canvas.strokeStyle = 'steelblue';
//時針	
	canvas.beginPath();
	/*
	canvas.moveTo(200,200);
	canvas.lineTo(200,110);
	canvas.stroke(); 
	*/
	canvas.translate(200,200);
	canvas.moveTo(0,0);
	canvas.lineTo(0,-90);
	canvas.stroke(); 
	
//分針	
	/* canvas.beginPath();
	canvas.moveTo(200,200);
	canvas.lineTo(270,200);
	canvas.stroke();	 */
}
window.addEventListener('load',doFirst,false);
