$(document).ready(function(){
	
			//누르면 넘어가는 카테고리 
			/*$( function() {
				var tabTitle = $("#coupon_tabs_wrap .coupon_link  li > a");
				var tabContent = $("#coupon_tabs_wrap .coupon_box > ul");
				
				tabContent.hide();
				tabContent.eq(0).show();
				
				tabTitle.click(function(e){
					e.preventDefault;
					tabTitle.removeClass("on");
					$(this).add(".coupon_link").addClass("on");
					
					var currentIdx = $(this).parent().index();
					console.log(currentIdx);
					
					tabContent.hide();
					tabContent.eq(currentIdx).show();
				});
			}); */
			
		//누르면 넘어가는 카테고리 	
			 var myTabs = tabs({
			el: '#tabs',
			tabNavigationLinks: '.c-tabs-nav__link',
			tabContentContainers: '.c-tab'
		  });

		  myTabs.init();
});