 $(document).ready(function(){
	// $(function(){
  //     $("#includedContent").load("compressed/footer.html"); 
  //     $("#includedContent2").load("compressed/header.html");
  //   });

	includeHTML();
    $(function() {
			$("#top_btn").on("click", function() {
					$("html, body").animate({scrollTop:0}, '500');
					return false;
			});
			// #top_btn
			$(window).scroll(function () {
					if ($(this).scrollTop() > 100) {
							$('#top_btn').fadeIn('slow');
					} else {
							$('#top_btn').fadeOut('slow');
					}
			});

	});

	
	
 });