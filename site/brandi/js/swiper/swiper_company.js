$(document).ready(function(){		 

			
			var swiper_section = new Swiper("#section1.swiper-container", {
				pagination: {
				  el: "#section1 .swiper-pagination",
				  type: "progressbar",
				},
				navigation: {
				  nextEl: "#section1 .swiper-button-next",
				  prevEl: "#section1 .swiper-button-prev",
				},
			});
			
			var swiper = new Swiper(".news.swiper-container", {
			slidesPerView: 1,
			spaceBetween: 10,
			
			breakpoints: {
				  769: {
					slidesPerView: 3,
					spaceBetween: 20,
				  },
				   481: {
					slidesPerView: 2,
					spaceBetween: 10,
				  },
			},
			navigation: {
				  nextEl: ".news .swiper-button-next",
				  prevEl: ".news .swiper-button-prev",
				},
			
		  });
		
		var swiper = new Swiper(".phone_bg.swiper-container", {
		slidesPerView: 1,
        spaceBetween: 30,
		centeredSlides: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        effect: "fade",
        loop: true,
        
      });
	  
	  /*var swiper = new Swiper(".all.swiper-container", {
        direction: "vertical",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      //}); */
		
});