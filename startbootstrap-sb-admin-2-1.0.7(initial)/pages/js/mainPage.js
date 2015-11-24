$(document).ready(function(){
	$('#env').click(function(){
		$(this).slideDown();
		$('img').fadeIn();
		$('#content').slideToggle();
		//$('#content').fadeIn(1000).fadeOut(2000);  //1000毫秒 , fadeIn淡入
	});  
});