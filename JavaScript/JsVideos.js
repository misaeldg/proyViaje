$(document).ready(function(){
    $('.cajaVideos .videos .titulo').on('click',function(){

//      if($(this).hasClass('activo')){
//        $(this).removeClass('activo');
//        $(this).css({'background':'#214d68'});
//        $(this).parent('.cajaVideos .videos').find('.videoYoutube').slideUp(300);
//
//      }else{
//           $('.cajaVideos .videos .titulo').css({'background':'#214d68'});
//        $('.cajaVideos').find('.videoYoutube').slideUp(300);
//        $(this).parent('.cajaVideos .videos').find('.videoYoutube').slideToggle(300);
//        $(this).addClass('activo');
//        $(this).css({'background':'#00534b'});
//
//      }
//        $(this).parent('.videos').find('.videoYoutube').slideToggle(300);
          if($(this).hasClass('activo')){
               $(this).parent('.videos').find('.videoYoutube').slideUp(300);
               $(this).removeClass('activo');
                $(this).css({'background':'#214d68'});
                $(this).parent('.videos').find('.icon-triangle-down').css('transform','rotate(360deg)');
          }else{
               $(this).parent('.videos').find('.videoYoutube').slideDown(300);
                $(this).addClass('activo');
                $(this).css({'background':'#00534b'});
                $(this).parent('.videos').find('.icon-triangle-down').css('transform','rotate(180deg)');

          }
    })

})
