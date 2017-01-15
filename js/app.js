

// function to remove div on button click
$(document).ready(function(){
	$('#one').click(function(){
			if (prize == 1) {
				$(this).append(winMessage);
				$("#1").attr("src", "img/moneyBox.jpg");
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
			$("#2").attr("src", "img/moneyBox.jpg");
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
			$("#3").attr("src", "img/moneyBox.jpg");	
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
			$("#4").attr("src", "img/moneyBox.jpg");
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
	var amount = (Math.floor(Math.random() * 10) + 1) *10;
	var winMessage = "<h2> YOU WON $"+amount+"!!!! </h2>";
	var loseMessage = "<h2> SORRY TRY AGAIN </h2>";
	
	
})

