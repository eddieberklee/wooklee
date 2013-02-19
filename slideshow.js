/* Requires this structure:
 *
 * <.ss-left>
 * </.ss-left>
 * <.ss-main>
 *   <.ss-page>
 *     <.ss-row>
 *       <a.circle></a.circle>
 *       <a.circle></a.circle>
 *       <a.circle></a.circle>
 *       <a.circle></a.circle>
 *     </.ss-row>
 *   </.page>
 * </.ss-main>
 * <.ss-right>
 * </.ss-right>
 *
 */

$(function() {
  
  function sendToBack($this, $current) {
    ss = $this.siblings('.ss-main').children('.ss-page');
    $ss = $(ss);
  }
  function sendToFront($this, $current) {
    ss = $this.siblings('.ss-main').children('.ss-page');
    $ss = $(ss);
  }
  var ss_width = 0;
  var currenti = 0;
  var comingupi;

  $(".ss-right").click(function() {
    var ss_width = parseInt($(this).siblings('.ss-main').css('width')) + parseInt($(this).siblings('.ss-left').css('width')) + 'px';
    $this = $(this);
    pages = $this.siblings('.ss-main').children('.ss-page');

    $current =  $(pages[currenti]);
    if ((currenti + 1) <= (pages.length - 1)) {
      comingupi = currenti + 1;
    } else {
      comingupi = 0;
    }
    $comingup = $(pages[comingupi]);
    // var ss_width = $this.siblings('.ss-main').css('width');

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

  $(".ss-left").click(function() {
    var ss_width = parseInt($(this).siblings('.ss-main').css('width')) + parseInt($(this).siblings('.ss-right').css('width')) + 'px';
    $this = $(this);
    pages = $this.siblings('.ss-main').children('.ss-page');

    $current =  $(pages[currenti]);
    if ((currenti - 1) >= 0) {
      comingupi = currenti - 1;
    } else {
      comingupi = pages.length-1;
    }
    $comingup = $(pages[comingupi]);
    // var ss_width = $this.siblings('.ss-main').css('width');

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
