
$(document).ready(function(){
    $('#inicio').click(function(){
		$('body, html').animate({
			scrollTop:0
		},900);
        $('.menu').css("background-color",'rgba(0, 0, 0, 0.0)');
//        $('.redes2 a').animate({
//           'fontSize':'0px',
//            'padding':'0px'
//        },300);
        
	});
    $('.menu h1').click(function(){
		$('body, html').animate({
			scrollTop:0
		},500);
        $('.menu').css("background-color",'rgba(0, 0, 0, 0.0)');
//        $('.redes2 a').animate({
//           'fontSize':'0px',
//            'padding':'0px'
//        },900);
        
	});
    $('#nosotros').click(function(){
		$('body, html').animate({
			scrollTop:$('#nosotros2').offset().top
		},900);
        $('.menu').css("background-color",'rgba(0, 0, 0, 0.5)');
//        $('.redes2 a').animate({
//           'fontSize':'15px',
//            'padding':'10px'
//        },300);
	});
    $('#galeria').click(function(){
		$('body, html').animate({
			scrollTop:$('#galeria2').offset().top
		},900);
        $('.menu').css("background-color",'rgba(0, 0, 0, 0.5)');
//        $('.redes2 a').animate({
//           'fontSize':'15px',
//            'padding':'10px'
//        },300);
        
//        $("#prueba").css({'top':'10px','left':'110px',
//                          'transition':'.9s',
//                         'fontSize':'50px'});
	});
    $('#videos').click(function(){
		$('body, html').animate({
			scrollTop:$('#videos2').offset().top
		},900);
        $('.menu').css("background-color",'rgba(0, 0, 0, 0.5)');
//        $('.redes2 a').animate({
//           'fontSize':'15px',
//            'padding':'10px'
//        },300);
        
//        $("#prueba").css({'top':'10px','left':'110px',
//                          'transition':'.9s',
//                         'fontSize':'50px'});
	});
    $('#contactanos').click(function(){
		$('body, html').animate({
			scrollTop:$('#contactanos2').offset().top
		},900);
        $('.menu').css("background-color",'rgba(0, 0, 0, 0.5)');
//        $('.redes2 a span').animate({
//           'fontSize':'15px',
//            'padding':'10px'
//        },300);
//        $("#prueba").css({'top':'10px','left':'110px',
//                          'transition':'.9s',
//                         'fontSize':'50px'});
	});
    
    $(document).on("scroll", function(){
        $('.menu').css("background-color",'rgba(0, 0, 0, 0.7)');
//        if(window.scroll){
//             $("#prueba").css({'top':'10px','left':'110px',
//                               'transition':'.9s'});
//        }
         if($(document).scrollTop()==0){
            $('.menu').css("background-color",'rgba(0, 0, 0, 0.0)');
            $("#prueba").css({'top':'300px','left':'180px',
                             'transition':'.9s',
                              'fontSize':'100px'}); 
            $('.redes2 a ').css({'fontSize':'0px'});
             $('.redes2 a span').css({
                'padding':'0px'
            });
        };
        if($(document).scrollTop()>0){
             $("#prueba").css({'top':'10px','left':'110px',
                          'transition':'.9s',
                         'fontSize':'50px'});
            $('.redes2 a').css({
                'fontSize':'22px'
            });
            $('.redes2 a span').css({
                'padding':'3px'
            });
        }
       
    });
        
    

    
    /*ANIMANDO MAPA Y CONTACTANOS*/
    $('#contactanos2 .titulos #ubic').click(function(){
		$('#contactanos2 .form').fadeOut(1000);
        $('#contactanos2 .mapa').animate({'marginLeft':'0'},2000);
	});
    $('#contactanos2 .titulos #escrib').click(function(){
		$('#contactanos2 .form').fadeIn(2000);
        $('#contactanos2 .mapa').animate({'marginLeft':'-100%'},1000);
	});
    

});
