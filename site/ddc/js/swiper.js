$(document).ready(function(){
  //intro 1
  var swiper = new Swiper(".mySwiper.intro1", {
    slidesPerView: 1,
    spaceBetween: 20,
   centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      // disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      960: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //intro2
  var swiper = new Swiper(".mySwiper.intro2", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
   centeredSlides: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      960: {
        slidesPerView: 8,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

 
        

