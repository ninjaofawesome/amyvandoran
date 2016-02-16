(function(){
  console.log('popup loaded')
  var btn = document.getElementsByClassName("mobile-info");
  var mMenu = document.getElementsByClassName("mobile-menu");


  $(mMenu).hide();

  $(btn).click(function(){
    $(mMenu).slideToggle(750);
  });

})();

