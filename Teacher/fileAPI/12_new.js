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
	if(file.type.indexOf('image') != -1){
		fileReader.onload = openFile;
		fileReader.readAsDataURL(file);
	}else{
		alert('IMAGE, please!!!');
	}
	
}
function openFile(e){
	document.getElementById('image') = e.target.result;
}
window.addEventListener('load', doFirst, false);