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
	
	fileReader = new FileReader();	  //FileReader物件提供讀取檔案的方法
	if(file.type.indexOf('text') != -1){
		fileReader.onload = openFile;
		fileReader.readAsText(file);
	}else{
		alert('TEXT, please!!!');
	}
	
}
function openFile(e){
	document.getElementById('fileContent').value = e.target.result;
}
window.addEventListener('load', doFirst, false);