$(function() {
	$('header a').click(function() {
		event.preventDefault();
		var selector = $(this).attr('href').substring(1);
		var $selector = $('a[name=\"'+selector+'\"');

		if (typeof $selector.offset() == 'undefined') {
			$('html, body').animate({
				scrollTop: 0,
			}, 400);
		} else {
			var topDistance = $selector.offset().top;
			$('html, body').animate({
				scrollTop: topDistance,
			}, 400);
		}
	});
});