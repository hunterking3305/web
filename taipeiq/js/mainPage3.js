count = true;

$(document).ready(function(){
/* selectors */
	$('#trigger_bar').click(function(){
		if(count){
			$('#selectors').stop().animate(
				{left:'-45px'},
				1500,
				'easeOutBounce'
			);
			count = false;
		}else{
			$('#selectors').stop().animate(
				{left:'-580px'},
				1500,
				'easeOutBounce'
			);
			count = true;
		}	
	});
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
				{right:'-230px'},
				1500,
				'easeOutBounce'
			);
			count = true;
		}	
	});
	$('input[type=checkbox]').click(function() {  
            $("input").attr('disabled', false);  
            if ($("input:checked").length >= 3) {  
                $("input:checked").attr('disabled', false);
				if($("input").not(':checked')){
					$("input").not(':checked').attr('disabled',true);
				}	
            } else {  
                
            }  
    }); 
});



