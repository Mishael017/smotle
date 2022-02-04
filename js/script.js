$(document).ready(function(){

    $('.mobile_nav .open').on('click', function(){

       if($(this).text() === 'Open Menu'){
       $('ul.mobile').show();
       $(this).text('Close Menu');
     }else{
        $('ul.mobile').hide();
        $(this).text('Open Menu');
     }
    });
    
});



$(document).ready(function () {
   //Testimonial Slider
   $('.testimonials_slider').slick({
       arrows: false,
       dots: true,
   });
   //Top Slider
   $('.homesliders').slick({
       prevArrow: '<button type="button" class="slick-prev"></button>',
       nextArrow: '<button type="button" class="slick-next"></button>'
   });
});