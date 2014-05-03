$(document).ready(function(){
  console.log('pop up loaded');

  $('.modalDialog').hide().fadeIn(600);
  $('.btn-primary-centered').click(function(e){
  $('.modalDialog').fadeOut(600).hide();
  });



});

// $(document).ready(function () {
//     if (localStorage.getItem('wasVisited') !== undefined) {
//         $(".modalDialog").hide();
//     } else {
//         localStorage.setItem('wasVisited', 1);
//         $("#loading_bg").delay(5000).fadeOut(500);
//     }
// });