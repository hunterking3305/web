function doFirst(){
	var x = document.getElementById('canvas');
	var canvas = x.getContext('2d');
	
	canvas.fillRect(100,100,200,150);
	canvas.clearRect(150,150,50,50);
	/*	
	canvas.strokeRect(100,100,200,150);
	canvas.rect(100,100,200,150);
	canvas.stroke();
	*/
}
window.addEventListener('load',doFirst,false);
