$(document).ready(function(){
/* Hide Function */
	$('#hide').click(function(){
		$(this).hide();
	});
	$('#demo').click(function(){
		$(this).hide();
	});
	
/* DoubleClick Function */
	$('h2').dblclick(function(){
		$(this).hide();
	});
	
/* Show Function */
	$('#show').click(function(){
		$('#hide').show();
		$('#demo').show();
		$('h2').show();
	});
});

