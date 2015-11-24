var file;
var fileReader;
function doFirst(){
	document.getElementById('myFile').onchange = fileChange;
	document.getElementById('openButton').onclick = readImage;
}
function fileChange(){
	file = document.getElementById('myFile').files[0];
	if(file){
		var message = 'File Name : ' + file.name + '\n';
		message += 'File Size : ' + file.size + ' bytes\n';
		message += 'File Type : ' + file.type + '\n';
		message += 'Last Modified : ' + file.lastModifiedDate + '\n';		
		document.getElementById('fileInfo').value = message;
	
		fileReader = new FileReader();
		fileReader.onload = openFile;
	}
}
function readImage(){
	fileReader.readAsDataURL(file);
}
function openFile(e){
	document.getElementById('image').src = e.target.result;
	//alert(e.target.result);
}
window.addEventListener('load', doFirst, false);