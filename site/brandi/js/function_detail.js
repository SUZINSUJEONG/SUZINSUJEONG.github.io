$(document).ready(function(){
	
	//버튼누를시, 전체 사진 나오기
	$(function(){
			$(".more_btn").click(function(e){
				
				$(".hide_img").css("height","100%");
				$(".more_btn").fadeOut();
			});
		});
		console.log(".more_btn");
		
	//리뷰에 디폴트바 
	$(".dropdown_select2").click(function(event) {
		if ($(this).hasClass("on")) {
			$(this).add(".dropdown_menu2").removeClass("on");                    
		} else {
			$(this).add(".dropdown_menu2").addClass("on");                    
		}
		event.preventDefault();
		event.stopPropagation();
		// return false;
	});
	$("html").click(function() {
		$(".dropdown_select2").add(".dropdown_menu2").removeClass("on");
	});
	
/*/ 누를시 수량 선택 
	var currentCount = $(".count input[type='text']").val();
	
	$(".plus_btn").click(function(){
		console.log(currentCount);
		currentCount++;
		console.log(currentCount);
		$(".count input[type='text']").val(currentCount);
	});
	
	var currentCount = $(".count input[type='text']").val();
	
	$(".minus_btn").click(function(){
		console.log(currentCount);
		currentCount--;
		console.log(currentCount);
		$(".count input[type='text']").val(currentCount);
	});
*/
	
	//누를시 수량 선택
	$(function(){
		$('#decreaseQuantity').click(function(e){
			e.preventDefault();
			var stat = $('#numberUpDown').text();
			var num = parseInt(stat,10);
			num--;
			if(num<=0){
			alert('최소 수량을 선택하세요.');
			num =1;
			}
			$('#numberUpDown').text(num);
		});
		$('#increaseQuantity').click(function(e){
			e.preventDefault();
			var stat = $('#numberUpDown').text();
			var num = parseInt(stat,10);
			num++;

			if(num>10){
				alert('최대 수량입니다.');
				num=10;
			}
			$('#numberUpDown').text(num);
		});
	});
	
	//768됐을때 나오는 구매하기 버튼 
	
	if ($(this).width() < 768) {
			$(window).scroll(function() {
				if ($(this).scrollTop() > $(".main_content").height()) {
					$("#quick").addClass("on");
				} else {
					$("#quick").removeClass("on");
				}
			});
	}
	
	$(window).resize(function() {
		
		if ($(this).width() < 768) {
			$(window).scroll(function() {
				if ($(this).scrollTop() > $(".main_content").height()) {
					$("#quick").addClass("on");
				} else {
					$("#quick").removeClass("on");
				}
			});
	}
	  
    });
	
	
		$(".delivery > a").click(function(){
			//$(this).siblings(".delivery_info").stop.slideToggle();
			$(this).toggleClass("on");
			if($(this).hasClass("on")){
				
				$(".delivery_info").slideDown();
			}else{
				$(".delivery_info").slideUp();
			}
		});
	

	/*/누르면 넘어가는 카테고리 
			$( function() {
				var tabTitle = $(" ul.choice  li");
				var tabContent = $(" .all_product_box");
				
				tabContent.hide();
				//tabContent.eq(0).show();
				
				tabTitle.click(function(e){
					e.preventDefault;
					tabTitle.parent().removeClass("on");
					$(this).parent().addClass("on");
					
					var currentIdx = $(this).parent().index();
					console.log(currentIdx);
					
					tabContent.hide();
					tabContent.eq(currentIdx).show();
				});
			});
			
			console.log(tabTitle);
*/
	


});