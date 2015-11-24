var fileReader;
function doFirst(){
	document.getElementById('dropZone').ondragover = dragOver;
	document.getElementById('dropZone').ondrop = dropped;
}
function dragOver(e){
	e.preventDefault();
}
function dropped(e){
	e.preventDefault();
	var file = e.dataTransfer.files[0];
	
	document.getElementById('message').innerHTML = file.name;
	
	fileReader = new FileReader();	
	if(file.type == 'video/mp4' || file.type == 'video/ogg' || file.type == 'video/webm'){ 
		fileReader.onload = openFile;
		fileReader.readAsDataURL(file);
	}else{
		alert('.mp4 .ogv .webm, please!!!');
	}
	
}
function openFile(e){
	var myMovie = document.getElementById('myMovie');
	myMovie.src = e.target.result;
	myMovie.play();
}
window.addEventListener('load', doFirst, false);