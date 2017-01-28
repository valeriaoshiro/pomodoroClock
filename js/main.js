$(document).ready(function(){
	var $breakDisplay = $('.break-display');
	var $workDisplay = $('.work-display');
	var isNew = true;

	$('.break .minus').on('click', function(){
		var holder = Number($breakDisplay.text());
		holder--;
		if(holder < 0) {
			holder = 0;
		}
		$breakDisplay.text(holder);
	});
	$('.break .plus').on('click', function(){
		var holder = Number($breakDisplay.text());
		holder++;
		$breakDisplay.text(holder);
	});
	$('.work .minus').on('click', function(){
		var holder = Number($workDisplay.text());
		holder--;
		if(holder < 0) {
			holder = 0;
		}
		$workDisplay.text(holder);
	});
	$('.work .plus').on('click', function(){
		var holder = Number($workDisplay.text());
		holder++;
		$workDisplay.text(holder);
	});
	$('.start').on('click', function(){
		if(isNew) {
			$('h1').countdown({until: +Number($workDisplay.text()), format: 'MS', compact: true, onExpiry: workFinish});
			isNew = false;		
		} else {
			$('h1').countdown('resume');
		}
	});
	$('.stop').on('click', function() { 
	    $('h1').countdown('pause'); 
	});
	$('.reset').on('click', function(){
		$('h1').countdown('destroy');
		$('h1').countdown({until: +Number($workDisplay.text()), format: 'MS', compact: true, onExpiry: workFinish});
		isNew = false;
	});

	function workFinish(){
		alert('finish');
		isNew = true;
	}
	
});

// +Number($workDisplay.text())+'m'
