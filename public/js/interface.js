$(document).ready( function() {

  $('#submit').click( function() {
    alert('you pressed submit?');
  });

  $('a[href="' + this.location.pathname + '"]').parents('li,ul').addClass('active');
});

