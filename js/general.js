(function(){
  function mobileNavMenu(){
    var btn = document.getElementsByClassName("mobile-info");
    var mMenu = document.getElementsByClassName("mobile-menu");


    $(mMenu).hide();

    $(btn).click(function(){
      $(mMenu).slideToggle(750);
    });
  }

  //holy shit refactor this.
  function faqExplicit(){
    $('.q1-hide').hide();
    $('#q1up').hide();
    $('.q2-hide').hide();
    $('#q2up').hide();
    $('.q3-hide').hide();
    $('#q3up').hide();
    $('.q4-hide').hide();
    $('#q4up').hide();
    $('.q5-hide').hide();
    $('#q5up').hide();
    $('.q6-hide').hide();
    $('#q6up').hide();
    $('.q7-hide').hide();
    $('#q7up').hide();
    $('.q8-hide').hide();
    $('#q8up').hide();
    $('.q9-hide').hide();
    $('#q9up').hide();
    $('.q10-hide').hide();
    $('#q10up').hide();

    $('#q1').click(function(e){
      $('.q1-hide').slideDown().fadeIn();
      $('#q1').hide();
      $('#q1up').fadeIn();
    });

    $('#q1up').click(function(e){
      $('.q1-hide').slideUp();
      $('#q1up').hide();
      $('#q1').fadeIn();
    });

     $('#q2').click(function(e){
      $('.q2-hide').slideDown().fadeIn();
      $('#q2').hide();
      $('#q2up').fadeIn();
    });

    $('#q2up').click(function(e){
      $('.q2-hide').slideUp();
      $('#q2up').hide();
      $('#q2').fadeIn();
    });

    $('#q3').click(function(e){
      $('.q3-hide').slideDown().fadeIn();
      $('#q3').hide();
      $('#q3up').fadeIn();
    });

    $('#q3up').click(function(e){
      $('.q3-hide').slideUp();
      $('#q3up').hide();
      $('#q3').fadeIn();
    });

     $('#q4').click(function(e){
      $('.q4-hide').slideDown().fadeIn();
      $('#q4').hide();
      $('#q4up').fadeIn();
    });

    $('#q4up').click(function(e){
      $('.q4-hide').slideUp();
      $('#q4up').hide();
      $('#q4').fadeIn();
    });
    $('#q5').click(function(e){
      $('.q5-hide').slideDown().fadeIn();
      $('#q5').hide();
      $('#q5up').fadeIn();
    });

    $('#q5up').click(function(e){
      $('.q5-hide').slideUp();
      $('#q5up').hide();
      $('#q5').fadeIn();
    });

    $('#q6').click(function(e){
      $('.q6-hide').slideDown().fadeIn();
      $('#q6').hide();
      $('#q6up').fadeIn();
    });

    $('#q6up').click(function(e){
      $('.q6-hide').slideUp();
      $('#q6up').hide();
      $('#q6').fadeIn();
    });

    $('#q7').click(function(e){
      $('.q7-hide').slideDown().fadeIn();
      $('#q7').hide();
      $('#q7up').fadeIn();
    });

    $('#q7up').click(function(e){
      $('.q7-hide').slideUp();
      $('#q7up').hide();
      $('#q7').fadeIn();
    });

    $('#q8').click(function(e){
      $('.q8-hide').slideDown().fadeIn();
      $('#q8').hide();
      $('#q8up').fadeIn();
    });

    $('#q8up').click(function(e){
      $('.q8-hide').slideUp();
      $('#q8up').hide();
      $('#q8').fadeIn();
    });

    $('#q9').click(function(e){
      $('.q9-hide').slideDown().fadeIn();
      $('#q9').hide();
      $('#q9up').fadeIn();
    });

    $('#q9up').click(function(e){
      $('.q9-hide').slideUp();
      $('#q9up').hide();
      $('#q9').fadeIn();
    });

    $('#q10').click(function(e){
      $('.q10-hide').slideDown().fadeIn();
      $('#q10').hide();
      $('#q10up').fadeIn();
    });

    $('#q10up').click(function(e){
      $('.q10-hide').slideUp();
      $('#q10up').hide();
      $('#q10').fadeIn();
    });

    $('#xs1').click(function(){
      $('.q1-hide').slideDown().fadeIn();
    });

    $('#xs1up').click(function(){
      $('.q1-hide').slideUp();
    });

    $('#xs2').click(function(){
      $('.q2-hide').slideDown().fadeIn();
    });

    $('#xs2up').click(function(){
      $('.q2-hide').slideUp();
    });

    $('#xs3').click(function(){
      $('.q3-hide').slideDown().fadeIn();
    });

    $('#xs3up').click(function(){
      $('.q3-hide').slideUp();
    });

    $('#xs4').click(function(){
      $('.q4-hide').slideDown().fadeIn();
    });

    $('#xs4up').click(function(){
      $('.q4-hide').slideUp();
    });

    $('#xs5').click(function(){
      $('.q5-hide').slideDown().fadeIn();
    });

    $('#xs5up').click(function(){
      $('.q5-hide').slideUp();
    });

    $('#xs6').click(function(){
      $('.q6-hide').slideDown().fadeIn();
    });

    $('#xs6up').click(function(){
      $('.q6-hide').slideUp();
    });

    $('#xs7').click(function(){
      $('.q7-hide').slideDown().fadeIn();
    });

    $('#xs7up').click(function(){
      $('.q7-hide').slideUp();
    });

    $('#xs8').click(function(){
      $('.q8-hide').slideDown().fadeIn();
    });

    $('#xs8up').click(function(){
      $('.q8-hide').slideUp();
    });

    $('#xs9').click(function(){
      $('.q9-hide').slideDown().fadeIn();
    });

    $('#xs9up').click(function(){
      $('.q9-hide').slideUp();
    });

    $('#xs10').click(function(){
      $('.q10-hide').slideDown().fadeIn();
    });

    $('#xs10up').click(function(){
      $('.q10-hide').slideUp();
    });
  }

  mobileNavMenu();
  faqExplicit();
})();