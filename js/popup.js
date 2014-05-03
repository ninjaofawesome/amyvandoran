$(document).ready(function(){
  console.log('pop up loaded');
  $('.modalDialog').hide().fadeIn(600);
  $('.btn-primary-centered').click(function(e){
  $('.modalDialog').fadeOut(600).hide();
  });



});