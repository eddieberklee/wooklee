$(function() {
	// variable to detect a switch
	
	document.addEventListener('click', function(e) {
		e.stopPropagation();
	}, true);

	$(document).click(function(event) {
		$target = $(event.target);
		if ($target.hasClass('exclude')) {
		} else {
			console.log('stop!');
			event.stopPropagation();
			event.preventDefault();
			return false;
		}
	});

	/*
	indivClicked = true | false;
	$(anything).click(function() {
		if (indivClicked) {
			if (target is not in exceptions) {
				// don't do anthing
			} else {
				e.preventDefault();
				runAnimationToExitIndiv();
			}
		} else {
			// do nothing
		}
	})
	*/


	// when indiv is clicked and its page brought up, need to:
	// change everything's "cursor:pointer;" css


});




