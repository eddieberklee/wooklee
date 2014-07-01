/* Requires this structure:
 *
 * <.slideshow-left></.slideshow-left>
 * <.slideshow-main>
 *   <.slideshow-page>
 *     <something></something>
 *     <something></something>
 *     <something></something>
 *   </.slideshow-page>
 * </.slideshow-main>
 * <.slideshow-right></.slideshow-right>
 *
 */

$(function() {
  
  function sendToBack($this, $current) {
    ss = $this.siblings('.slideshow-main').children('.slideshow-page');
    $ss = $(ss);
  }
  function sendToFront($this, $current) {
    ss = $this.siblings('.slideshow-main').children('.slideshow-page');
    $ss = $(ss);
  }
  var ss_width = 0;
  var currenti = 0;
  var comingupi;

  $(".slideshow-right").click(function() {
    var ss_width = parseInt($(this).siblings('.slideshow-main').css('width')) + parseInt($(this).siblings('.slideshow-left').css('width')) + 'px';
    $this = $(this);
    pages = $this.siblings('.slideshow-main').children('.slideshow-page');

    $current =  $(pages[currenti]);
    if ((currenti + 1) <= (pages.length - 1)) {
      comingupi = currenti + 1;
    } else {
      comingupi = 0;
    }
    $comingup = $(pages[comingupi]);
    // var ss_width = $this.siblings('.slideshow-main').css('width');

    $current.css('left', '0px');
    $current.css('top', '0px');
    $comingup.css('top', '0px');
    $comingup.css('left', ss_width);

    $comingup.css('z-index', parseInt($current.css('z-index'))+1);

    speed = 300;
    $current.stop().animate({
      left: '-=' + ss_width
    }, speed);
    $comingup.stop().animate({
      left: '-=' + ss_width
    }, speed);

    currenti = comingupi;
    sendToBack($this, $current);
  });

  $(".slideshow-left").click(function() {
    var ss_width = parseInt($(this).siblings('.slideshow-main').css('width')) + parseInt($(this).siblings('.slideshow-right').css('width')) + 'px';
    $this = $(this);
    pages = $this.siblings('.slideshow-main').children('.slideshow-page');

    $current =  $(pages[currenti]);
    if ((currenti - 1) >= 0) {
      comingupi = currenti - 1;
    } else {
      comingupi = pages.length-1;
    }
    $comingup = $(pages[comingupi]);
    // var ss_width = $this.siblings('.slideshow-main').css('width');

    $current.css('left', '0px');
    $current.css('top', '0px');
    $comingup.css('top', '0px');
    $comingup.css('left', '-' + ss_width);

    $comingup.css('z-index', parseInt($current.css('z-index'))+1);

    speed = 300;
    $current.stop().animate({
      left: '+=' + ss_width
    }, speed);
    $comingup.stop().animate({
      left: '+=' + ss_width
    }, speed);

    currenti = comingupi;
    sendToFront($this, $current);
  });
});
