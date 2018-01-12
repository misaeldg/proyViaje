$(document).ready(function(){
	$('#location').click(function(){
        $('body, html').animate({
            scrollTop: $(".locaciones").offset().top
        },500);
        
    });

    $('#servicioo').click(function(){
        	$('body, html').animate({
            	scrollTop: $(".hospedaje").offset().top
        	},500);
    });

    $('#opinion').click(function(){
        	$('body, html').animate({
            	scrollTop: $(".comentarios").offset().top
        	},500);
    });

})