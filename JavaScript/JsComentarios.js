$(document).ready(function(){
    $('#uno').on('click',function(){
        $('.cajaG').animate({'marginLeft':'00%'});
        $('a').css({'background':'none','color':'white'});
        $(this).css({'background':'white','color':'#000000'});
    });
     $('#dos').on('click',function(){
        $('.cajaG').animate({'marginLeft':'-100%'});
         $('a').css({'background':'none','color':'white'});
        $(this).css({'background':'white','color':'#000000'});
    })
      $('#tres').on('click',function(){
        $('.cajaG').animate({'marginLeft':'-200%'});
        $('a').css({'background':'none','color':'white'});
        $(this).css({'background':'white','color':'#000000'});
    })
})