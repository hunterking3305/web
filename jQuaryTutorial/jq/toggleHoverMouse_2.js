$(document).ready(function(){
/* toggle Function */
	$('button').click(function(){
		$('h2').toggle();
		$('#demo').toggle();
	});

/* Hover Function */
	$('#demo2').hover(function(){
		$(this).css({
			'font-size':'30px',
			'color':'blue'
		});
	});
	
/* Mouseover and Mouseleaver */
	$('#light').mouseover(function(){
		$(this).css({
			'width':'200px',
			'height':'300px'
		}).mouseleave(function(){
			$(this).css({
			'width':'100px',
			'height':'150px'
			});
		});
	});
});

