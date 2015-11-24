function doFirst(){
	var x = document.getElementById('canvas');
	var canvas = x.getContext('2d');
	
	var gradient = canvas.createLinearGradient(100,100, 300,250);
	gradient.addColorStop(0,'steelblue');
	gradient.addColorStop(1,'yellow');
	gradient.addColorStop(0.3,'green');


	canvas.fillStyle = gradient;
	canvas.fillRect(100,100,200,150);
}
window.addEventListener('load',doFirst,false);
