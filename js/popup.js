$(document).ready(function(){
  console.log('popup has loaded');

  // function popupwindow(url, title, w, h) {
  //   var left = (screen.width/2)-(w/2);
  //   var top = (screen.height/2)-(h/2);
  //   return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
  // }


  $('.modalDialog').hide().fadeIn(600);
  $('.btn-primary-centered').click(function(e){
  $('.modalDialog').fadeOut(600);

  var hideAgain = function(){
    $('.modalDialog').addClass('hidden');
  }

     $.cookie('addCookie', 'hideAgain', {expires: 1});
     $.cookie(('addCookie') );

  });


});

