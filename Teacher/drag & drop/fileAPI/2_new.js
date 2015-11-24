function doFirst(){
	document.getElementById('myFile').onchange = fileChange;	
}
function fileChange(){
	var file = document.getElementById('myFile').files[0];
	if(file){
		var message = 'File Name : ' + file.name + '\n';
		message += 'File Size : ' + file.size + ' bytes\n';
		message += 'File Type : ' + file.type + '\n';
		message += 'Last Modified : ' + file.lastModifiedDate + '\n';
		
		document.getElementById('fileInfo').value = message;
	}
}
window.addEventListener('load',doFirst,false);