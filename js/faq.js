$(document).ready(function(){
  console.log('slider has loaded');

  $('.q1-hide').hide();
  $('#q1up').hide();

  $('#q1').click(function(e){
    $('.q1-hide').slideDown().fadeIn();
    $('#q1').hide();
    $('#q1up').fadeIn();
  });

  $('#q1up').click(function(e){
    $('.q1-hide').slideUp().hide();
    $('#q1up').hide();
    $('#q1').fadeIn();
  });

});