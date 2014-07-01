$(function() {
	// variable to detect a switch
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



	// when indiv is clicked and its page brought up, need to:
	// change everything's "cursor:pointer;" css


});




