$(document).ready( function() {

  $('#submit').click( function() {
    alert('you pressed submit?');
  });

  $('a[href="' + this.location.pathname + '"]').parents('li,ul').addClass('active');

  $('#change').click( function() {
  	var current = $( "#circle" ).attr('class');
  	var next;
  	if (current === 'mood1') {
  		next = 'mood2';
  	}
  	else {
  		next = 'mood1';
  	}
		$( "#circle" ).removeClass( current ).addClass( next );
  });
});

