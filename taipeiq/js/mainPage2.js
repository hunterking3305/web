count = true;

$(document).ready(function(){
/* selectors */
	
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
/* Order Bar */
	$('#sortable').sortable();
	$('#sortable').disableSelection();
	
/* dashboardSlide */
	$('#labelin').click(function(){
		if(count){
			$('#label').stop().animate(
				{right:'0px'},
				1500,
				'easeOutBounce'
			);
			count = false;
		}else{
			$('#label').stop().animate(
				{right:'-430px'},
				1500,
				'easeOutBounce'
			);
			count = true;
		}	
	});
	
});



