$(function(){
  dropDown = $('.dropdown');

  $(dropDown).hover(
    function(){
      $(this).children('ul').animate({
        height: '150px'}, 500)
    },
    function(){
      $(this).children('ul').animate({
        height: '0px'}, 500)
      });
  })
