const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
});

$(document).keydown(function(e){
if (e.which == 37) {
     $('.slider-button--prev')[0].click();
    };  
if (e.which == 39) { 
     $('.slider-button--next')[0].click();
    };      
 })