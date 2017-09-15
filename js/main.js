
$(document).ready(function () {
  $('.carousel').slick({
  	slidesToScroll: 1,
  	autoplay: true,
  	autoplaySpeed: 4000,
  	arrows: false,
  	draggable: false,
  	pauseOnFocus: false,
  	pauseOnHover: false
  });
  
  var lengthScrolled = 0;

  $(window).scroll(function() {
  
  	var vertPosition = $(this).scrollTop();
  
  	if (vertPosition - lengthScrolled > 50) {
  		var navHeight = $('.navbar').css('height');
	  	$('.navbar').animate({top: '-' + navHeight}, 150);
  		lengthScrolled = vertPosition;
  	} else if (lengthScrolled - vertPosition > 50) {
  		$('.navbar').animate({top: '0px'}, 150);
  		lengthScrolled = vertPosition;
  	}
  });
});

