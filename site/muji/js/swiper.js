$(document).ready(function(){

  var swiper = new Swiper(".swiper.mdspick", {
    
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,

    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".swiper.sale", {

    slidesPerView: 1,
    spaceBetween: 16,

    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".swiper.season", {
   
    slidesPerView: 1,
    spaceBetween: 16,

    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
    },

    
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });

  var swiper = new Swiper(".swiper.hot", {
    spaceBetween: 16,
   
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var swiper = new Swiper(".swiper.notice", {
    spaceBetween: 16,

    slidesPerView: 1,
    spaceBetween: 16,

    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
    },
   
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
});