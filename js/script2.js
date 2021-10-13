$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".page-scroll").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 55
      }, 800);
  });
});


// paralax
$(window).scroll(function(){

  // jumbotron
  var wScroll = $(this).scrollTop();

  $('.jumbotron img').css({
    'transform' : 'translate(0px, '+ wScroll/4 +'%)'
  });

  $('.jumbotron h1').css({
    'transform' : 'translate(0px, '+ wScroll/2 +'%)'
  });

  $('.jumbotron p').css({
    'transform' : 'translate(0px, '+ wScroll/2 +'%)'
  });

  //portfolio
  if (wScroll > $('.portfolio').offset().top - 200) {
    $('.portfolio .img-thumbnail').addClass('tampil');
  }
});