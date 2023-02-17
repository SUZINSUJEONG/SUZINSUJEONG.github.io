
var swiper_store = new Swiper('.store .swiper-container',{
	slidesPerView: 1,//한화면에 보이는 슬라이드 개수 
	spaceBetween: 0,
	// margin-right: 20px 
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
		  el: ".swiper-pagination",
		  clickable: true,
		},
	breakpoints: {
	  480: {
		slidesPerView: 1,
		spaceBetween: 0,
	  },
	  769: {
		slidesPerView: 1,
		spaceBetween: 00,
	  }, 	  
  },
  navigation: {
		  nextEl: ".swiper-button-next",
		  prevEl: ".swiper-button-prev",
		},
});
