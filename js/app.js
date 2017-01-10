

// function to remove div on button click
$(document).ready(function(){
	$('#one').click(function(){
			if (prize == 1) {
				$(this).append(winMessage);
			} else {
				$(this).append(loseMessage);
			};
		$(this).animate({
			left: '200px',
			height: '320px'
		});
		$('div').unbind("click");
	});

	$('#two').click(function(){
		if (prize == 2) {
			$(this).append(winMessage);
		} else {
			$(this).append(loseMessage);
		};
		$(this).animate({
			left: '200px',
			height: '320px'
		});
		$('div').unbind("click");
	});

	$("#three").click(function(){
		if (prize == 3) {
			$(this).append(winMessage);
		} else {
			$(this).append(loseMessage);
		};
		$('#three').animate({
			left: '200px',
			height: '320px'
		});
		$('div').unbind("click");
	});

	$("#four").click(function(){
		if (prize == 4) {
			$(this).append(winMessage);
		} else {
			$(this).append(loseMessage);
		};
		$('#four').animate({
			left: '200px',
			height: '320px'
		});
		$('div').unbind("click");
	});

	var prize = Math.floor(Math.random() * 4) + 1;
	var winMessage = "<h2> YOU WON $100!!!! </h2>";
	var loseMessage = "<h2> SORRY TRY AGAIN </h2>";
	
	
})

