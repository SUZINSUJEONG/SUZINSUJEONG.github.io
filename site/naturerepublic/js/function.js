$(document).ready(function(){
	
	$( function() {
		var tabTitle = $("#tabs_wrap .beauty li a");
		var tabContent = $("#tabs_wrap .tabs_contents > div");
		
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
});