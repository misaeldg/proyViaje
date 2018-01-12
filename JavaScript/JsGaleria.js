var imgs=["Imagenes/peruMachuPichu.jpg",
          "Imagenes/perutrujillo.jpg",
          "Imagenes/peruChullpas.JPG",
          "Imagenes/peruAmazonas.jpg",
          "Imagenes/peruHuascaran.jpg",
          "Imagenes/peruMancora.jpg",
          "Imagenes/brasil3.jpg",
          "Imagenes/brasil1.jpg",
          "Imagenes/brasil2.jpg",
          "Imagenes/brasil3.jpg",
          "Imagenes/brasil4.jpg",
          "Imagenes/brasil4.jpg",
          "Imagenes/paris1.jpg", 
          "Imagenes/paris2.jpg",
          "Imagenes/paris3.jpg",
          "Imagenes/paris4.jpg",
          "Imagenes/paris5.jpg",
          "Imagenes/paris4.jpg",
          "Imagenes/dubai1.jpg",
          "Imagenes/dubai3.jpg",
          "Imagenes/dubai2.jpeg",
          "Imagenes/dubai4.jpg",
          "Imagenes/dubai2.jpeg",
          "Imagenes/dubai5.jpg"];

$(document).ready(function(){
    var i=0;
    $('.galeria img').on('click',function(){
        $('.lightBox').slideDown(1000);
//        alert(""+$(this).data('num'));
        i=parseInt($(this).data('num'));
        $('.lightBox .cajaImagen img').attr('src',imgs[i]);
        
    });
    $('#cerrarLB').on('click',function(){
        $('.lightBox').slideUp(1000);
    })
    $('.lightBox .cajaImagen #next').on('click',function(){
        i++;
        $('.lightBox .cajaImagen img').fadeOut(300,function(){
            $('.lightBox .cajaImagen img').fadeIn(300).attr('src',imgs[i]);
        });
        if(i>=0 && i<6){
            $('.cajaImagenes img').css('border','none');
            $('.cajaImagenes img:nth-child(1)').css('border','4px solid white');
        }
        if(i>=6 && i<13){
            $('.cajaImagenes img').css('border','none');
            $('.cajaImagenes img:nth-child(2)').css('border','4px solid white');
        }
        if(i>=12 && i<19) {
            $('.cajaImagenes img').css('border','none');
            $('.cajaImagenes img:nth-child(3)').css('border','4px solid white');
        }
        if(i>=18){
            $('.cajaImagenes img').css('border','none');
            $('.cajaImagenes img:nth-child(4)').css('border','4px solid white');
        }
    })
    
    
     $('.lightBox .cajaImagen #back').on('click',function(){
        i--;
        $('.lightBox .cajaImagen img').fadeOut(300,function(){
            $('.lightBox .cajaImagen img').fadeIn(300).attr('src',imgs[i]);
        });
        if(i>=0 && i<6){
            $('.cajaImagenes img').css('border','none');
            $('.cajaImagenes img:nth-child(1)').css('border','4px solid white');
        }
        if(i>=6 && i<13){
            $('.cajaImagenes img').css('border','none');
            $('.cajaImagenes img:nth-child(2)').css('border','4px solid white');
        }
        if(i>=12 && i<19) {
            $('.cajaImagenes img').css('border','none');
            $('.cajaImagenes img:nth-child(3)').css('border','4px solid white');
        }
        if(i>=18){
            $('.cajaImagenes img').css('border','none');
            $('.cajaImagenes img:nth-child(4)').css('border','4px solid white');
        }
    })
    
   
    /*ACCION DE MASINFIOR*/{
        $('.cajaImagen #masinfor').on('click',function(){
           $('#'+i).css({'left':'30%'});
            $(this).css('visibility','hidden');
        });
        $('.infor .icon-cross').on('click',function(){
            $('.infor').css({'left':'150%'});
            $('#masinfor').css('visibility','visible');
        })
    }
    
    
});