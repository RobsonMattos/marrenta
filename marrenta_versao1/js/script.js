$(document).ready(function() {
  //sticky
  $('.js--section-produtos').waypoint(function(direction) {
    if(direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px;'
  });

  $('.js-home').click(function() {
    $('html, body').animate({scrollTop: $('#home').offset().top}, 1000);
  });

  $('.js-produtos').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-produtos').offset().top}, 1000);
  });

  $('.js-contato').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-contato').offset().top}, 1000);
  });
});