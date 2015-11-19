$(document).ready( function() {
  var degrees = -18;

  $('a[href="' + this.location.pathname + '"]').parents('li,ul').addClass('active');


  function temp_up() {
    degrees += 54;
    $('#arrow').css('transform', 'rotate('+degrees+'deg)');
  });
});



