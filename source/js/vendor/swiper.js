const swiper = new Swiper('.swiper', {

  loop: true,

  navigation: {
    nextEl: '.swiper-arrow--right',
    prevEl: '.swiper-arrow--left',
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

const swiper2 = new Swiper('.swiper--2', {

  loop: false,
  initialSlide: 0,
  spaceBetween: 40,

  navigation: {
    nextEl: '.swiper-arrow--right',
    prevEl: '.swiper-arrow--left',
  },
});
