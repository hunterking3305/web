function doFirst(){
	pic = document.getElementById('pic');  
	pic.addEventListener('dragstart', startDrag, false);
	pic.addEventListener('dragend',endDrag,false);	
	
	leftbox = document.getElementById('leftbox');
	leftbox.addEventListener('dragenter', function(e){e.preventDefault();}, false);
	leftbox.addEventListener('dragover', function(e){e.preventDefault();}, false);
	leftbox.addEventListener('drop', dropped, false);
	leftbox.addEventListener('dragleave', dragLeave, false);	
}
function startDrag(e){
	var data = '<img src="up.gif">';
	e.dataTransfer.setData('image/gif',data);
}
function endDrag(){
	pic.style.visibility = 'hidden';
}
function dropped(e){
	e.preventDefault();
	leftbox.innerHTML = e.dataTransfer.getData('image/gif');
}
function dragLeave(e){
	e.preventDefault();
	leftbox.style.border = '10px solid red';
}
window.addEventListener('load',doFirst,false);
