$(document).ready(function(){
	$('#animate').click(function(){
		$('#demo1').animate({'margin-left':'500px'});
		$('#demo1').animate({'margin-top':'200px'});
		$('#demo1').animate({'margin-left':'0px'});
		$('#demo1').animate({'margin-top':'0px'});
			
		$('#demo2').animate({'margin-left':'0px'});
		$('#demo2').animate({'margin-top':'0px'});
		$('#demo2').animate({'margin-left':'500px'});
		$('#demo2').animate({'margin-top':'200px'});
	});
});