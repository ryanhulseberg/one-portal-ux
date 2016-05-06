// Carousel Options
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    // responsiveClass:true,
    nav:false,
    responsive:{
        0:{
            items:1,
            dots:false
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });
});
