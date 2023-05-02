$(document).ready(function() {
			$('#fullpage').fullpage();
			
			//검색바
			$("#title > a").on("click",function() {
				$(this).toggleClass("on").mouseleave(function(){
					$(this).removeClass("on");
				});
			});
			
			//햄버거 버튼
			$(".mobile_menu_btn").on("click",function() {
				$(this).toggleClass("on");
				});
			//메뉴안에 가이드라인 메뉴
			$(".all_guide").on("click mouseenter focusin",function() {
			
				$(".guide").stop().toggle("slow");
				$(this).mouseleave(function() {
                $(".guide").hide("slow");
				});
			});
			
		}); 