$(document).ready(function(){
  console.log('popup has loaded');
    if($.cookie('msg') == null)
        {
            $('#myModal').modal('show');
            $.cookie('msg', 'str');
        }else{
            $("div#myModal.modal").css('display','none');
        }

  // $('#myModal').modal('show');


});

