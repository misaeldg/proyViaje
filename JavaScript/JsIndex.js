
var n=0;
var interval;
$(document).ready(function(){
   $('.imgpar').on('click',function(){
       $(this).find('>p').slideToggle(200);
       $(this).find('.infor').toggleClass('nover');
       $(this).find('.infor').toggleClass('ver');
   }) ;
   
    
    
   $('.videopar').hover(
        function(){
         $(this).find('p').slideDown(400);  
        },
        function(){
           $(this).find('p').slideUp(400);
        }
   )
   

   $('.imgscroll').cycle({
       fx:'scrollLeft',
        timeout:1000,
        delay:-1000

   });
    
    
//        setInterval(function(){
//          $('.redes').css('marginLeft','-10%');
//       },1000);
   
   
   
//   function carrusel(){
//    n ++; 
//   	
//       $('.imgscroll').animate({'marginLeft':'-50%'},200);
//       rotacion = setTimeOut("carrusel()",1000);
//   }
});
