const swiper = new Swiper('.swiper', {

  loop: true,

  navigation: {
    nextEl: '.trainers__arrow--left',
    prevEl: '.trainers__arrow--right',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      initialSlide: 2,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      initialSlide: 2,
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    }
  },
});
