function doFirst(){
	document.getElementById('theForm').onsubmit = charCount;
}
function charCount(){
	var comments = document.getElementById('comments');
	var count = comments.value.length;
	
	document.getElementById('count').value = count;
	
	if(count > 10){
		comments.value = comments.value.slice(0,10);
	}
	
	return false;
}
window.addEventListener('load',doFirst,false);
//window.onload = doFirst;

var theForm = document.getElementById('theForm');
theForm.addEventListener('reset',function(){
	return confirm('Are you sure you want to reset the form?');
},false);