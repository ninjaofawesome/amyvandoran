(function(){
  function mobileNavMenu(){
    var btn = document.getElementsByClassName("mobile-info");
    var mMenu = document.getElementsByClassName("mobile-menu");


    $(mMenu).hide();

    $(btn).click(function(){
      $(mMenu).slideToggle(750);
    });
  }


  function faq(){
    var btn = document.getElementsByClassName('click-more');
    var answer = document.getElementsByClassName('answer');

    $(answer).hide();

    $(btn).click(function(){
      var button = $(this);
      var upBtn = $(button).find('.up-faq');
      var downBtn = $(button).find('.down-faq');
      var ans = $(button).parent().find('.answer');
      if($(upBtn).hasClass('hidden')){
        $(upBtn).removeClass('hidden');
        $(downBtn).addClass('hidden');
      } else {
        $(downBtn).removeClass('hidden');
        $(upBtn).addClass('hidden');
      }
      $(ans).slideToggle(600);
    });

  }
  mobileNavMenu();
  faq();
})();