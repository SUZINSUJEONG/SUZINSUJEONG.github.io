
$(document).ready(function() {

	$(".mobile_menu_btn").click(function() {       
		$("nav").toggleClass("on").toggleSlide(250, "linear");
	});
	
	$("#m_menu a.m").click(function() {               
	   $(this).next().addBack().toggleClass("on").end().find(".m, ul").removeClass("on").end().parent().siblings().find(".m, ul").removeClass("on");              
		return false;
	});
	
	$(".sub_menu").mouseleave(function() {
		$(this).add(".sub_menu").removeClass("on");
	});
});
