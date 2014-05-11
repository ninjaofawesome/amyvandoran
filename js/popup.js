$(document).ready(function(){
  console.log('popup has loaded');

  $('.modalDialog').hide().fadeIn(600);
  $('.btn-primary-centered').click(function(e){

    $('.modalDialog').fadeOut(600);

  });


});

