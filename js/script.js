$(document).ready(function() {
  //sticky
  $('.js--section-produtos').waypoint(function(direction) {
    if(direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  });

});