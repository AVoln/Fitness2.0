// import { Navigation } from 'swiper';

const swiper = new Swiper('.swiper', {

  // modules: [Navigation],
  loop: true,

  navigation: {
    nextEl: '.trainers-arrow--right',
    prevEl: '.trainers-arrow--left',
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
