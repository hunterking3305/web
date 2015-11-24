function doFirst(){
	if(typeof window.print == 'function'){
		var printButton = document.createElement('button');
		printButton.innerText = 'Print';
		
		printButton.addEventListener('click',function(){
			window.print();
		},false);
		
		document.body.insertBefore(printButton, document.getElementById('main'));
	}
}
window.addEventListener('load',doFirst,false);
