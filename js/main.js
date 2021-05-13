const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
});
// Switch slides with arrows
$(document).keydown(function(e){
if (e.which == 37) {
     $('.hotel-slider__button--prev')[0].click();
    };  
if (e.which == 39) { 
     $('.hotel-slider__button--next')[0].click();
    };      
 })

const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
});

//Parallax effect
$('.newsletter').parallax({imageSrc: '../img/newsletter-bg.jpg'});