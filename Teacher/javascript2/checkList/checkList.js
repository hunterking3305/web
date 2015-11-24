function doFirst(){
	document.getElementById('theForm').onsubmit = addList;
}
var tasks = [];
function addList(){	
	var task = document.getElementById('task').value;	
	var list = document.getElementById('list');
	var output = '';
	
	if(task){
		tasks.push(task);
		
		/* output = '<ol>';		
		for(var i = 0; i < tasks.length; i++){
			output += '<li>' + tasks[i] + '</li>';
		}		
		output += '</ol>'; */
		
		output += '<ol><li>'
		output += tasks.join('</li><li>');
		output += '</li></ol>'
		
		list.innerHTML = output;
	}	
	return false;
}
window.addEventListener('load',doFirst,false);
