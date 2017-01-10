console.log("working");


// function to remove div on button click
$(documenyt).ready(function(){
	$("#myBtn").click(function(){
		console.log("clicking");
		$('#one').fadeIn(3000);
	});




	$('#two').click(function(){
		$(this).fadeOut();
	})
})