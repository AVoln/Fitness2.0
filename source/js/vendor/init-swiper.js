const trainersSwiper = document.querySelector('.swiper');
const commentsSwiper = document.querySelector('.swiper--comments');

const initSwiper = () => {
  if (trainersSwiper) {
    const swiper = new Swiper(trainersSwiper, {

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
  }
}

const initSwiperComments = () => {
  if (commentsSwiper) {
    const swiper = new Swiper(commentsSwiper, {

      loop: false,
      spaceBetween: 40,

      navigation: {
        nextEl: '.swiper-arrow--right',
        prevEl: '.swiper-arrow--left',
      },
    });
  }
}

export {initSwiper, initSwiperComments}