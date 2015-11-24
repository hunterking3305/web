function doFirst(){
	var x = document.getElementById('canvas');
	var canvas = x.getContext('2d');
	
	var pic = new Image();
	pic.src = 'JacksonShark.png';
	
	pic.addEventListener('load',function(){canvas.drawImage(pic, 0, 0, x.width, x.height);},false);
	
}
window.addEventListener('load',doFirst,false);
