import Swiper, { Navigation, Pagination } from 'swiper';

export const sliderReviews = new Swiper('.slider-reviews__swiper', {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".slider-reviews__next-btn",
    prevEl: ".slider-reviews__prev-btn",
  },
  pagination: {
    el: ".slider-reviews__dots",
    clickable: true,
  },
  grabCursor: true,
  slidesPerView: 1, //Количество слайдов для показа
  spaceBetween: 10, //Отступ между слайдами
  slidesPerGroup: 1, //Количество пролистываемых слайдов
  speed: 600, //Скорость переключения
});

export const sliderTeam = new Swiper('.slider__swiper-team', {
  modules: [Navigation],
  navigation: {
    nextEl: ".main-page__slider .slider-btn_next",
    prevEl: ".main-page__slider .slider-btn_prev",
  },
  grabCursor: true,
  slidesPerView: 1, //Количество слайдов для показа
  spaceBetween: 30, //Отступ между слайдами
  slidesPerGroup: 1, //Количество пролистываемых слайдов
  loop: true, //Бесконечный слайдер
  loopedSlides: 1, //Обязательно для бесконечности кол. должно быть такое как в slidesPerView
  speed: 600, //Скорость переключения
  breakpoints: {
    320: {
      slidesPerView: 1,
      loopedSlides: 1
    },
    426: {
      slidesPerView: 2,
      loopedSlides: 2
    },
    769: {
      slidesPerView: 3,
      loopedSlides: 3
    },
    993: {
      slidesPerView: 4,
      loopedSlides: 4
    },
  }
});


export const sliderCourses = new Swiper('.slider__swiper-courses', {
  modules: [Navigation],
  navigation: {
    nextEl: ".course-page__slider .slider-btn_next",
    prevEl: ".course-page__slider .slider-btn_prev",
  },
  grabCursor: true,
  slidesPerView: 1, //Количество слайдов для показа
  spaceBetween: 30, //Отступ между слайдами
  slidesPerGroup: 1, //Количество пролистываемых слайдов
  loop: true, //Бесконечный слайдер
  loopedSlides: 1, //Обязательно для бесконечности кол. должно быть такое как в slidesPerView
  speed: 600, //Скорость переключения
  breakpoints: {
    320: {
      slidesPerView: 1,
      loopedSlides: 1
    },
    769: {
      slidesPerView: 2,
      loopedSlides: 2
    }
  }
});

export const sliderEvents = new Swiper('.slider__swiper-events', {
  modules: [Navigation],
  navigation: {
    nextEl: ".event-page__slider .slider-btn_next",
    prevEl: ".event-page__slider .slider-btn_prev",
  },
  grabCursor: true,
  slidesPerView: 1, //Количество слайдов для показа
  spaceBetween: 30, //Отступ между слайдами
  slidesPerGroup: 1, //Количество пролистываемых слайдов
  loop: true, //Бесконечный слайдер
  loopedSlides: 1, //Обязательно для бесконечности кол. должно быть такое как в slidesPerView
  speed: 600, //Скорость переключения
  breakpoints: {
    320: {
      slidesPerView: 1,
      loopedSlides: 1
    },
    426: {
      slidesPerView: 2,
      loopedSlides: 2
    },
    993: {
      slidesPerView: 3,
      loopedSlides: 3
    },
  }
});

export const sliderBlogs = new Swiper('.slider__swiper-blog', {
  modules: [Navigation],
  navigation: {
    nextEl: ".post-page__slider .slider-btn_next",
    prevEl: ".post-page__slider .slider-btn_prev",
  },
  grabCursor: true,
  slidesPerView: 1, //Количество слайдов для показа
  spaceBetween: 30, //Отступ между слайдами
  slidesPerGroup: 1, //Количество пролистываемых слайдов
  loop: true, //Бесконечный слайдер
  loopedSlides: 1, //Обязательно для бесконечности кол. должно быть такое как в slidesPerView
  speed: 600, //Скорость переключения
  breakpoints: {
    320: {
      slidesPerView: 1,
      loopedSlides: 1
    },
    577: {
      slidesPerView: 2,
      loopedSlides: 2
    },
    993: {
      slidesPerView: 3,
      loopedSlides: 3
    },
  }
});