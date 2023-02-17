$(document).ready(function(){		

		var swiper_mv = new Swiper('.mv .swiper-container',{/*var 뒤에 변수명 자리는 임의로 바꿔도 무방, swiper- container 자리는 부모를 한번 더 기입 함으로써 조금 더 직접적인 요소 선택이 되게 함*/
			pagination: {
				el: '.swiper-pagination',
			},
		});
		
		var swiper_store = new Swiper('.store .store_list_wrap.swiper-container',{
			slidesPerView: 1.3,//한화면에 보이는 슬라이드 개수 
			spaceBetween: 20,// margin-right: 20px 
			breakpoints: {
			  480: {
				slidesPerView: 2,
				spaceBetween: 20,
			  },
			  768: {
				slidesPerView: 3,
				spaceBetween: 40,
			  }, 
			  960: {
				slidesPerView: 4,
				spaceBetween: 40,
			  }, 
          },
		  loop: true,
				autoplay: {
				delay: 2000,
				disableOnInteraction: false,
				}
		});

});