$(document).ready(function(){		 

			var swiper = new Swiper(".ranking .mySwiper", {
				direction: "vertical",
				loop: true,
				autoplay: {
				delay: 2500,
				disableOnInteraction: false,
				}
			});
		
			var swiper_content3 = new Swiper(".content_3 .swiper-container", {
				slidesPerView: 1,
				spaceBetween: 0,
				slidesPerGroup: 4,
				breakpoints: {
				  769: {
					slidesPerView: 4,
					spaceBetween: 0,
					slidesPerGroup: 4,
				  },
				  768: {
					slidesPerView: 2,
					spaceBetween: 0,
					slidesPerGroup: 4,
				  },
				  361: {
					slidesPerView: 2,
					spaceBetween: 0,
				  },
				  
				  100: {
					slidesPerView: 1,
					spaceBetween: 0,
				  },
			    },
				loop: true,
				loopFillGroupWithBlank: true,
				pagination: {
				  el: ".content_3 .swiper-pagination",
				  clickable: true,
				},
				navigation: {
				  nextEl: ".content_3 .swiper-button-next",
				  prevEl: ".content_3 .swiper-button-prev",
				},
			  });
			
			var swiper_content7 = new Swiper(".content_7 .swiper-container",{
				slidesPerView: 3,
				spaceBetween: 30, 
				loop: true,
				pagination: {
				  el: ".content_7 .swiper-pagination",
				  clickable: true,
				},
				effect: "coverflow",
				grabCursor: true,
				centeredSlides: true,
				slidesPerView: "auto",
				coverflowEffect: {
				  rotate: 50,
				  stretch: 0,
				  depth: 100,
				  modifier: 1,
				  slideShadows: true,
				},
							 
				centeredSlides: true,
				autoplay: {
				delay: 2500,
				disableOnInteraction: false,
				}
			});
			
			var swiper_mv = new Swiper(".mv .swiper-container", {
				slidesPerView: 1,
				spaceBetween: 0,
				breakpoints: {
			  769: {
				slidesPerView: 2,
				spaceBetween: 0,
			  },
			 481: {
				slidesPerView: 1.5,
				spaceBetween: 0,
			  },
			 
          },
				loop: true,
				pagination: {
				  el: ".mv .swiper-pagination",
				  clickable: true,
				},
				centeredSlides: true,
				autoplay: {
				delay: 4000,
				disableOnInteraction: false,
				},
				
				navigation: {
				  nextEl: ".mv .swiper-button-next",
				  prevEl: ".mv .swiper-button-prev",
				},
			});
			
			
			var swiper_video = new Swiper('.content_8 .swiper-container',{
			slidesPerView: 2.5,//한화면에 보이는 슬라이드 개수 
			spaceBetween: 0,
			// margin-right: 20px 
			breakpoints: {
			  1200: {
				slidesPerView: 2.5,
				spaceBetween: 20,
			  },
			 
			  480: {
				slidesPerView: 1.5,
				spaceBetween: 10,
			  },
			  360: {
				slidesPerView: 1,
				spaceBetween: 10,
			  },
			  10: {
				slidesPerView: 1,
				spaceBetween: 10,
			  },
          },
		  loop: true,
			centeredSlides: true,
				
		});
		
		
			
			var swiper_review = new Swiper('.content_9 .swiper-container',{
			slidesPerView: 4,//한화면에 보이는 슬라이드 개수 
			spaceBetween: 0,// margin-right: 20px 
			breakpoints: {
			  961: {
				slidesPerView: 4,
				spaceBetween: 0,
			  },
			  580: {
				slidesPerView: 2.5,
				spaceBetween: 0,
			  }, 
			  479: {
				slidesPerView: 1.5,
				spaceBetween: 0,
			  },
			  360: {
				slidesPerView: 1,
				spaceBetween: 0,
			  },
			  10: {
				slidesPerView: 1,
				spaceBetween: 0,
			  },
          },
		  loop: true,
				autoplay: {
				delay: 4000,
				disableOnInteraction: false,
				}
		});
});