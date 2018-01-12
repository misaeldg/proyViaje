
$(document).ready(function(){
    $('#vuelos').on('click',function(){
        $(this).parent('.items').slideUp(400);
        $('.lugares').css('left','0%');
    });
    $('.lugares span').on('click',function(){
        $('.lugares').css('left','150%');
        $('.items').slideDown(400);
    });
     $('#estadia').on('click',function(){
        $(this).parent('.items').slideUp(400);
        $('.estadia').css('left','0%');
    });
    $('.estadia span').on('click',function(){
        $('.estadia').css('left','-150%');
        $('.items').slideDown(400);
    });

    /*SCROLLLL*/
    



})




/*
$('.arriba').click(function(){
        $('body, html').animate({
            scrollTop:'0px'
        },500);
        
    });

     $('#ct').click(function(){
        $('body, html').animate({
             scrollTop: $("#footer1").offset().top
        },900);
        
    });
    

    
*/