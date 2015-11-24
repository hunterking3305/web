function doFirst(){
	var x = document.getElementById('canvas');
	var canvas = x.getContext('2d');
	
	var gradient = canvas.createRadialGradient(200,175, 5, 200,175, 100);

	gradient.addColorStop(1,'steelblue');
	gradient.addColorStop(0,'yellow');

	canvas.fillStyle = gradient;
	canvas.fillRect(100,100,200,150);
}
window.addEventListener('load',doFirst,false);
