$(document).ready(function() {   
 

    $.fn.cbFamily = function (children) {
        return this.each(function () {
            var $this = $(this);
            var els;
            if ($.isFunction(children)) {
                els = children.call($this);
            } else {
                els = $(children);
            }
            $this.bind("click.cbFamily", function () {
                els.prop('checked', this.checked).change();
            });

            function checkParent() {
                $this.prop('checked',
                    els.length == els.filter("input:checked").length);
            }

            els.bind("click.cbFamily", function () {
                if ($this.prop('checked') && !this.checked) {
                    $this.prop('checked', false).change();
                }
                if (this.checked) {
                    checkParent();
                    $this.change();
                }
            });

            // Check parents if required on initialization
            checkParent();
        });
    };


	$("h3 input:checkbox").cbFamily(function (){
			return $(this).parents("h3").next().find("input:checkbox");
		  });
		  console.log("cbFamily");
	
	
	
	//signup.html 내용보기 누를 시
	$(".check_wrap > a").on("click",function() {
				
		$(this).toggleClass("on");
		$(".dim").stop().fadeToggle();
	});
	$(".dim").on("click", function(){
			$(this).fadeOut();
			$(".check_wrap >a").removeClass("on");
	});
		
		  
	

});