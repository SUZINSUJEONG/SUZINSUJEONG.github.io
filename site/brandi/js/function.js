$(document).ready(function(){
	
	
			//누르면 넘어가는 카테고리 
			$( function() {
				var tabTitle = $("#tabs_wrap .icon_link ul li a");
				var tabContent = $("#tabs_wrap .tabs_contents > ul");
				
				tabContent.hide();
				tabContent.eq(0).show();
				
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
			
			
			////////////////////////베스트 리스트/////////////////////////////
			$(".ranking").click(function(event) {
                if ($(this).hasClass("active")) {
                    $(this).add(".all_ranking").removeClass("active");                    
                } else {
                    $(this).add(".all_ranking").addClass("active");                    
                }
                event.preventDefault();
                event.stopPropagation();
                // return false;
            });
            $(".ranking").mouseleave(function() {
                $(".all_ranking").removeClass("active");
            });
			
			
/////////////////////////////////여기까지 베스트 리스트

/////////////////////////검색바 //////////////////////////
            $("#title > a").click(function(event) {
                if ($(this).hasClass("on")) {
                    $(this).add("#list").removeClass("on");                    
                } else {
                    $(this).add("#list").addClass("on");                    
                }
                event.preventDefault();
                event.stopPropagation();
                // return false;
            });
            $("html").click(function() {
                $("#title > a").add("#list").removeClass("on");
            });

            $("#title1 h3 a, #title2 h3 a").click(function(event) {
                if ($(this).hasClass("on")) {
                    $(this).add("#list1,#list2").removeClass("on");                    
                } else {
                    $(this).add("#list1,#list2").addClass("on");                    
                }
                event.preventDefault();
                event.stopPropagation();
				
				//$(this).siblings().find(".sub_menu").hide();
                // return false;
            });
            $("html").click(function() {
                $("#title1 a, #title2 a").add("#list1,#list2").removeClass("on");
				
            });
			//컨텐츠1 more_bt 누를시
			$(function(){
				$(".c_img ul li").slice(0,10).show(); //select the first ten
				$(".more_bt").click(function(e){
				
				e.preventDefault();
				$(".c_img ul li:hidden").slice(0,5).show(); // select next 10 hidden divs and show them
				if($(".c_img ul li:hidden").length == 0){// check if any hidden divs still exist
				alert("마지막 페이지 입니다.");
				$(".more_bt").fadeOut();//alert if any hidden divs still exist
					}
				});
			});		
	//서브페이지 디폴트 바
            $(".dropdown_select").click(function(event) {
                if ($(this).hasClass("on")) {
                    $(this).add(".dropdown_menu").removeClass("on");                    
                } else {
                    $(this).add(".dropdown_menu").addClass("on");                    
                }
                event.preventDefault();
                event.stopPropagation();
                // return false;
            });
            $("html").click(function() {
                $(".dropdown_select").add(".dropdown_menu").removeClass("on");
            });
			
			//서브페이지 호버할때, 올라오는 내용에 셀렉트 박스 
			$(".info > .box h5").click(function(event) {
				console.log()
				
				$(this).siblings(".choice").toggleClass("on");
                /*if ($(this).hasClass("on")) {
                    $(this).add(".choice,.choice li").removeClass("on");                    
                } else {
                    $(this).add(".choice, .choice li").addClass("on");                    
                }*/
                event.preventDefault();
                event.stopPropagation();
                // return false;
            });
			
			$(".choice li").on("click",function() {
				var string = $(this).text();
				$(this).parent().siblings("h5").find("a").text(string);
				$(".choice").removeClass("on");
               // $(this).siblings().hide();
				//$(this).show();
				
			}).on("mouseleave", function(){
				
				$(this).removeClass("on");
				//$(this).add(".choice").removeClass("on");
			});
			

            //$("html").click(function() {
                //$(".info > a").add(".choice").removeClass("on");
            //});
			
/*
		   $('select').css('color','gray');
		   $('select').change(function() {
			  var current = $('select').val();
			  if (current != 'null') {
				  $('select').css('background','black');
		  } else {
				  $('select').css('color','gray');
		  }
		  }); 
*/			
		
		$(".more_btn").click(function(e){
			
			$(".hide_img").css("height","100%");
			$(".more_btn").fadeOut();
		});
		console.log(".more_btn");
		
		function fnCalCount(type, ths){
		var $input = $(ths).parents(".quantity1 td").find("input[name='pop_out']");
		var tCount = Number($input.val());
		var tEqCount = Number($(ths).parents(".quantity1").find("td.bseq_ea").html());
		
		if(type=='p'){
			if(tCount < tEqCount) $input.val(Number(tCount)+1);
			
		}else{
			if(tCount >0) $input.val(Number(tCount)-1);    
			}
		}
		
		//시크바
		dragElement(document.getElementById("circle"));

		function dragElement(elmnt) {
		  let clientX_gab = 0, clientX = 0;
		  elmnt.onmousedown = dragMouseDown;
		  elmnt.addEventListener('touchstart',dragMouseDown)
		  function dragMouseDown(e) {
			e = e || window.event;
			e.preventDefault();
			elmnt.classList.add('s_on');
			if (e.changedTouches) {
			  e.clientX = e.changedTouches[0].clientX
			}
			clientX = e.clientX;
			document.onmouseup = closeDragElement;
			document.addEventListener('touchend',closeDragElement);
			document.onmousemove = elementDrag;
			document.addEventListener('touchmove',elementDrag);
		  }

		  function elementDrag(e) {
			e = e || window.event;
			e.preventDefault(); 
			if (e.changedTouches) {
			  e.clientX = e.changedTouches[0].clientX
			}
			clientX_gab = e.clientX - clientX;
			clientX = e.clientX;
			let leftVal = 0;
			// elmnt.clientLeft를 oldLeftVal로 바꾸세요.
			const oldLeftVal = Number(elmnt.style.transform.replace('translate(calc(-50% + ', '').replace('px), -50%)', ''));
			let parentElmnt = elmnt.parentNode;
			if (
			  (oldLeftVal + clientX_gab) < 0 ||
			  clientX < parentElmnt.offsetLeft) 
			  {
			  leftVal = 0;
			} else if(
			  (oldLeftVal + clientX_gab) > parentElmnt.clientWidth ||
			  clientX > (parentElmnt.offsetLeft+parentElmnt.clientWidth))
			  {
			  leftVal = parentElmnt.clientWidth;
			} else {
			  leftVal = (oldLeftVal + clientX_gab);
			}
			elmnt.querySelector('span').innerText = Math.round((leftVal /parentElmnt.clientWidth)*100000);
			
			
			// elmnt.style.left = leftVal + "px";
			elmnt.style.transform = 'translate(calc(-50% + ' + leftVal + 'px),-50%)';
		  }

		  function closeDragElement() {
			elmnt.classList.remove('s_on');
			document.onmouseup = null;
			document.removeEventListener('touchend', closeDragElement);
			document.onmousemove = null;
			document.removeEventListener('touchmove', elementDrag);
		  }
		}

});