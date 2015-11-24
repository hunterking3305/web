function doFirst(){
	var x = document.getElementById('canvas');
	var canvas = x.getContext('2d');
	
	canvas.font = 'bold 50px Comic Sans MS';
	canvas.fillStyle = 'steelblue';
	canvas.shadowOffsetX = 4;
	canvas.shadowOffsetY = 4;
	canvas.shadowColor = 'rgba(200,0,0,0.5)';
	canvas.shadowBlur = 5;
	
	canvas.fillText('omgSilvia?',150,150);
	
	/* canvas.moveTo(150,150);
	canvas.lineTo(400,150);
	canvas.stroke(); */
}
window.addEventListener('load',doFirst,false);
