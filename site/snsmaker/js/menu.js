 $(document).ready(function(){
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

	//Desktop 용 초기화 함수
	function initDesktop(){
		$(".menu_bg, .sub_menu, .dim").hide();
		$(".menu_bg, .sub_menu").css("height",266);
		$(".container").css("left",0);
		$("body,html").css({"overflow-y":"auto","height":"auto"});
	}
	//Desktop용 메뉴
	function displayDesktop(){
		$(".main_menu").on("mouseenter", function(){
			$(".menu_bg, .sub_menu").stop().slideDown(200);
			
		}).on("mouseleave", function(){
			$(".menu_bg, .sub_menu").stop().slideUp(200);
			
		});
		console.log(displayDesktop);
	}
	
	//mobile용 초기화 함수
	function initMobile(){
		$(".menu_bg, .sub_menu, .dim").hide();
		$(".sub_menu").css("height","auto");
		$(".mobile_menu_btn").removeClass("on");
		$(".container").css("left",0);
		$("body,html").css({"overflow-y":"auto","height":"auto"});
		
		//480과 브라우저의 너비 중에 작은 수를 선택하여 nav의 width에 적용 
		navWidth = Math.min(480, $(window).width()); 
	}
	//모바일용 메뉴
	function displayMobile(){
		$(".main_menu").off("mouseenter mouseleave");
		
		$(".mobile_menu_btn").off().on("click", function(e){
			e.preventDefault();
			//$(".gnb nav").show();
			
			$(this).toggleClass("on"); //햄버거 닫기 버튼 왓다갓다 
			$(".dim").stop().fadeToggle();
			
			if($(this).hasClass("on")){ //햄버거 메뉴 클릭시 
				
				$(".container").css("left",-navWidth);
				$("body,html").css({"overflow-y":"hidden","height":"100vh"});
			}else{
				$(".container").css("left",0);
				$("body,html").css("overflow-y","auto");
				$(" .sub_menu").hide();
			}
		});
		$(".dim").on("click", function(){
			//$(this).stop.fadeOut();
			initMobile();
		});
		
		$(".main_menu > li > a").off().on("click", function(){
			$(this).next(".sub_menu").stop().slideToggle();
			$(this).parent().siblings().children(".sub_menu").stop().slideUp();
		});
	}
	
 });