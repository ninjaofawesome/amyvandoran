$(document).ready(function(){
  console.log('faq has loaded');

  $('.q1-hide').hide();
  $('#q1up').hide();
  $('.q2-hide').hide();
  $('#q2up').hide();
  $('.q3-hide').hide();
  $('#q3up').hide();

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

   $('#q2').click(function(e){
    $('.q2-hide').slideDown().fadeIn();
    $('#q2').hide();
    $('#q2up').fadeIn();
  });

  $('#q2up').click(function(e){
    $('.q2-hide').slideUp().hide();
    $('#q2up').hide();
    $('#q2').fadeIn();
  });

  $('#q3').click(function(e){
    $('.q3-hide').slideDown().fadeIn();
    $('#q3').hide();
    $('#q3up').fadeIn();
  });

  $('#q3up').click(function(e){
    $('.q3-hide').slideUp().hide();
    $('#q3up').hide();
    $('#q3').fadeIn();
  });

});