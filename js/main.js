$(document).ready(function(){
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

  //Параллакс
  $('.newsletter').parallax({imageSrc: '../img/newsletter-bg.jpg'});

  //Мобильное меню
  var menuButton = $(".menu-button");
  menuButton.on('click', function(){
    $(".navbar-bottom").toggleClass("navbar-bottom--visible")
  });

  //Оттправка форм
  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal(){
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }
  function closeModal(event){
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }
  $(document).on('keydown', function(esk) {
    if (esk.which == 27){
      var modalOverlay = $('.modal__overlay');
      var modalDialog = $('.modal__dialog');
      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
    };
  });

  //Обработка форм
  $(".form").each(function(){
    $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Please, specify your name",
        minlength: "Name must be at least 2 letters long",
      },
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com",
      },
      phone: {
        required: "Your phone is required",
      },
    },
  });
  });
});