/* Requires this structure:
 *
 * <.ss-left>
 * </.ss-left>
 * <.ss-main>
 *   <.page>
 *   </.page>
 * </.ss-main>
 * <.ss-right>
 * </.ss-right>
 *
 */

$(function() {
  
  function sendToBack($this, $current) {
    ss = $this.siblings('.ss-main').children('.ss-long-scroll');
    $ss = $(ss);
    console.log($ss.find($current).html());

    $ss.append($current);
  }
  function sendToFront($this, $current) {
    ss = $this.siblings('.ss-main').children('.ss-long-scroll');
    $ss = $(ss);

    $ss.find($current).remove();
    $ss.prepend($current);
  }

  $(".ss-right").click(function() {
    $this = $(this);
    pages = $this.siblings('.ss-main').children('.ss-long-scroll').children('.ss-page')

    $current =  $(pages[0]);
    $comingup = $(pages[1]);
    var ss_width = $this.siblings('.ss-main').css('width');

    $current.css('left', '0px');
    $comingup.css('left', '820px');

    speed = 300;
    $current.stop().animate({
      left: '-=' + ss_width
    }, speed);
    $comingup.stop().animate({
      left: '-=' + ss_width
    }, speed);

    sendToBack($this, $current);
  });

  $(".ss-left").click(function() {
    $this = $(this);
    pages = $this.siblings('.ss-main').children('.ss-long-scroll').children('.ss-page')

    $current =  $(pages[0]);
    $comingup = $(pages[pages.length-1]);
    var ss_width = $this.siblings('.ss-main').css('width');

    $current.css('left', '0px');
    $comingup.css('left', '-'+ss_width);

    speed = 300;
    $current.stop().animate({
      left: '+='+ss_width
    }, speed);
    $comingup.stop().animate({
      left: '+='+ss_width
    }, speed);

    sendToFront($this, $comingup);
  });
});
