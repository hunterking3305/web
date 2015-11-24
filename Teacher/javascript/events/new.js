function doFirst(){
	document.getElementById('theForm').onsubmit = eventHandler;
}
function eventHandler(){
	var events = ['click','mouseover','keypress','contextmenu','select','focus'];
	for(var i = 0; i < events.length; i++){
		var checkbox = document.getElementById(events[i]);
		if(checkbox.checked){
			document.addEventListener(events[i],listenFor,false);
		}else{
			document.removeEventListener(events[i],listenFor,false);
		}
	}
	document.getElementById('result').value = '';
	return false;
}
function listenFor(e){
	var message = e.target.nodeName + ' : '+ e.type + '\n';	
	document.getElementById('result').value += message;
}
window.addEventListener('load',doFirst,false);
