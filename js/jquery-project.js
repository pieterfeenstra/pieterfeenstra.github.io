$(document).ready(function(){
	$('h2').click(function(){
		alert("Hello! I am an alert box!!")

		});
		$('.thumbnail .btn').click(function(){
			$(this).parent().parent().parent().hide();
				
		
				
			
		});
		$('.btn-unhide').click(function(){
			$('.thumbnail').show();
		});


});