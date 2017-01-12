$(document).ready(function(){
   $('.bxslider1').bxSlider({
     auto: true,
     autoControls: true,
     nextSelector: '#slider-next',
     prevSelector: '#slider-prev',
     nextText: "",
     prevText: "",
     speed: 2000,
     pause: 6000
   });
   $('.bxslider2').bxSlider({
     auto: true,
     autoControls: true,
     nextSelector: '#next',
     prevSelector: '#prev',
     nextText: "",
     prevText: "",
     speed: 2000,
     pause: 10000
   });

   $('.PageTop').click(function(){
     $('html, body').animate({scrollTop : 0},900);
     return false;
   });
 });
