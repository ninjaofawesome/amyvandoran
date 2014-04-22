$(document).ready(function(){
  console.log('slider has loaded');

  $('.q1-hide').hide();

  $('#q1').click(function(e){
    $('.q1-hide').slidedown().fadeIn();
  });

});