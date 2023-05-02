$(document).ready(function(){			
	
	
	var swiper_sns = new Swiper(".sns .swiper-container", {
				slidesPerView: 3,
				spaceBetween: 10,
				
				breakpoints: {
				  960: {
					slidesPerView: 5,
					spaceBetween: 10,
					
				  },
				  768: {
					slidesPerView: 4,
					spaceBetween: 20,
					
				  },
				  361: {
					slidesPerView: 2,
					spaceBetween: 20,
				  },
				  
				  100: {
					slidesPerView: 1,
					spaceBetween: 20,
				  },
			    },
				loop: true,
				loopFillGroupWithBlank: true,
				pagination: {
				  el: ".sns .swiper-pagination",
				  clickable: true,
				},
				navigation: {
				  nextEl: ".sns .swiper-button-next",
				  prevEl: ".sns .swiper-button-prev",
				},
			  });
			  
			//detail 페이지 스와이퍼 
			var swiper = new Swiper(".swiper_mySwiper", {
				spaceBetween: 30,
				slidesPerView: 4,
				freeMode: true,
				watchSlidesProgress: true,
			});
			var swiper2 = new Swiper(".swiper_mySwiper2", {
				spaceBetween: 10,
				thumbs: {
				  swiper: swiper,
				},
			});
			  
});