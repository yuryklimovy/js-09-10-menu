$(function() {
  var dropDown = $('.dropdown');

  $(dropDown).hover(
    function() {
      $(this).children('ul').animate({
          height: '250px',
        }, 500),
        $(this).children('ul').children('li').animate({
          backgroundColor: '#937DE9',
        }, 1000
      )},
    function() {
      $(this).children('ul').animate({
          height: '0px'
        }, 500),
        $(this).children('ul').children('li').animate({
          backgroundColor: '#545371',
        }, 1000)
    });
});
