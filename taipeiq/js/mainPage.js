count = true;

$(document).ready(function(){
/* searchBar */
	$('#keying:text').focus(function(){
		$(this).css({
			'background-color':'#9dceff',
			'font':'bold 20px Tahoma'
		});
	});
	$(':text').blur(function(){
		$(this).css('background-color','#ddd');
	});
	
/* dashboardSlide */
	$('#label').click(function(){
		if(count){
			$(this).stop().animate(
				{right:'0px'},
				1500,
				'easeOutBounce'
			);
			count = false;
		}else{
			$(this).stop().animate(
				{right:'-430px'},
				1500,
				'easeOutBounce'
			);
			count = true;
		}	
	});
	
});



