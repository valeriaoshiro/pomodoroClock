$(document).ready(function(){
	var $breakDisplay = $('.break-display');
	var $workDisplay = $('.work-display');
	var $countDisplay = $('.count');
	var isNew = true;
	var isWork = true;
	var count = 0;

	function workStart(){
		$('h1').countdown('destroy');
		$('h1').countdown({until: +Number($workDisplay.text())+'m', format: 'MS', compact: true, onExpiry: workFinish});
		$('h1').addClass('working');
		$('h1').removeClass('breaking');
		isNew = false;
	}
	function breakStart(){
		$('h1').countdown('destroy');
		$('h1').countdown({until: +Number($breakDisplay.text())+'m', format: 'MS', compact: true, onExpiry: breakFinish});
		$('h1').addClass('breaking');
		$('h1').removeClass('working');
		isNew = false;
	}
	function workFinish(){
		audio.play();
		isNew = true;
		isWork = !isWork;
		count++;
		$countDisplay.text(count);
		console.log('isWork', isWork);
		breakStart();
	}
	function breakFinish(){
		audio.play();
		isNew = true;
		isWork = !isWork;
		console.log('isWork', isWork);
		workStart();
	}
	
	function play(){
		var audio = document.getElementById("myAudio");
	}

	/* ----- Event Listeners ----- */

	// Minus botton in break
	$('.break .minus').on('click', function(){
		var holder = Number($breakDisplay.text());
		holder--;
		if(holder < 0) {
			holder = 0;
		}
		$breakDisplay.text(holder);
	});
	// Plus button in break
	$('.break .plus').on('click', function(){
		var holder = Number($breakDisplay.text());
		holder++;
		$breakDisplay.text(holder);
	});
	// Minus button in work
	$('.work .minus').on('click', function(){
		var holder = Number($workDisplay.text());
		holder--;
		if(holder < 0) {
			holder = 0;
		}
		$workDisplay.text(holder);
	});
	// Plus button in work
	$('.work .plus').on('click', function(){
		var holder = Number($workDisplay.text());
		holder++;
		$workDisplay.text(holder);
	});
	// Start button, it can start a new clock, or resume
	$('.start').on('click', function(){
		if(isNew && isWork) {
			workStart();
		} else if(isNew && !isWork) {
			breakStart();
		} else {
			$('h1').countdown('resume');
		}
	});
	// Pause button
	$('.pause').on('click', function() { 
	    $('h1').countdown('pause'); 
	});
	// Reset button. It resets to work mode.
	$('.reset').on('click', function(){
		workStart();
		$('h1').countdown('pause');
		count = 0;
		$countDisplay.text(count);
	});	


	workStart();
	$('h1').countdown('pause');
});

// +Number($workDisplay.text())+'m'
