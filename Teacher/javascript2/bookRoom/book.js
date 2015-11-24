function doFirst(){
	document.getElementById('theForm').onsubmit = countDate;
}
function countDate(){
	var start = document.getElementById('start').value;
	var end = document.getElementById('end').value;
	
	var message = document.getElementById('message');
	
	var interval = '';
	var oneDay = 24 * 60 * 60 * 1000;
	
	var startDate = new Date(start);
	var endDate = new Date(end);
	
	//判斷輸入的日期是否為有效日期
	if(startDate.getTime() && endDate.getTime()){
		//確定開始日期在前
		if(startDate < endDate){
			var diff = endDate - startDate;
				if(diff <= oneDay){
					interval += '1 day';
				}else{
				interval +=  Math.round(diff / oneDay) + ' days';
			}
			message.innerHTML = interval;
		}else{
			message.innerHTML = 'The start date must come before the end date.';
		}
	}else{
		message.innerHTML = 'Please enter valid start and end date in the format MM/DD/YYYY.';
	}
	return false;
}
window.addEventListener('load',doFirst,false);
