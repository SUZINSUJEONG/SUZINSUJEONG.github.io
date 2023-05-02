$(document).ready(function() {   
	//모바일과 피씨 공통

	const checkPoint = 960;
	var navWidth; //메뉴 너비 
	//해상도를 기준으로 pc와 모바일을 나눔 
	
	function menuControl(){
		if($(window).width() > checkPoint ){ //pc용
			initDesktop();
			displayDesktop();
		}else{ //mobile용
			initMobile();
			displayMobile();
		}
	}
	menuControl();
	
	$(window).resize(function(){
		menuControl();
	});
	
	//Desktop용 메뉴
	function displayDesktop(){
		$("nav .mobile_menu_btn,.behind_sub_menu,.sub_menu").off();
		
		$("nav .mobile_menu_btn").on("click",function() { 
			$(".m").eq(0).find(".sub_menu, .behind_sub_menu").show();
			//$(".gnb .behind_main_menu").toggle();
			$(".drop_menu").toggleClass("on");
			$(".container").css("left",0);
			
			});
		
		$(".m").on("mouseenter focusin", function(){
			$(this).find(".sub_menu,.behind_sub_menu").stop().fadeIn(200);
				
				
			}).on("mouseleave", function(){
			$(".sub_menu, .behind_sub_menu").stop().fadeOut(200);
			
		});
			
	}
	
	//모바일용 메뉴
	function displayMobile(){
		
		$(".m").off("mouseenter focusin");
		$(".sub_menu > li").off("mouseenter focusin");
			
		$(".m > a").off().on("click", function(e){
			e.preventDefault();
			$(this).parent().siblings().find(".sub_menu").hide();
			$(this).siblings(".sub_menu").stop().slideToggle("slow");  //.toggle("slow");
			$(this).toggleClass("on").siblings().removeClass("on"); 
		});
			
		$(".sub_menu > li > a").off().on("click", function(){
			$(this).toggleClass("on").parent().siblings().find(".behind_sub_menu").hide();
			$(this).siblings(".behind_sub_menu").stop().slideToggle("slow"); //.toggle("slow");
			$(this).siblings().removeClass("on"); 
			return false;
		});
		$(".mobile_menu_btn").off().on("click", function(e){
			e.preventDefault();
			//$(".gnb nav").show();
			$(".drop_menu").off().toggleClass("on");
			$(".sub_menu, .behind_sub_menu").hide();
			$(this).toggleClass("on"); //햄버거 닫기 버튼 왓다갓다 

			if($(this).hasClass("on")){ //햄버거 메뉴 클릭시 
				$(".container").css("left",navWidth);
				$("body,html").css({"overflow-y":"hidden","height":"100vh"});
				$("header").css("position","fixed");
				
				
			}else{
				$(".container").css("left",0);
				$("body,html").css("overflow-y","auto");
				$(" .sub_menu").hide();
				$("header").css("position","fixed");
			}
			return false;
		});
		
	}
		
		$(".menu_bg").on("click", function(){
			initMobile();
		});
	
	//Desktop 용 초기화 함수
	function initDesktop(){
		$(".m, .behind_sub_menu, .sub_menu").off();
		$(".menu_bg, .sub_menu").css("height",662);
		$(".container").css("left",0);
		$("body,html").css({"overflow-y":"auto","height":"auto"});
	}
	
	//mobile용 초기화 함수
	function initMobile(){
		$(".m, .behind_sub_menu, .sub_menu").off();
		$(".menu_bg, .sub_menu").css("height","100%");
		$(".drop_menu").removeClass("on");
		$(".container").css("left",0);
		$("body, html").css({"overflow":"hidden auto","height": "auto"});
		$(".mobile_menu_btn").removeClass("on");
		//480과 브라우저의 너비 중에 작은 수를 선택하여 nav의 width에 적용 
		navWidth = Math.min(480, $(window).width()); 
		
	}
	
	$(".button").on("click",function() { 
			
		$(".popup_ad").hide();
		console.log(" .button");
	});
	
	$(".floating_bn .button").on("click",function() { 
			
		$(".floating_bn1, .floating_bn2").hide();
		console.log(" .button");
	});
	
});