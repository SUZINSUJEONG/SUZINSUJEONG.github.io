$(document).ready(function(){
  
  // 서브페이지의 서브메뉴바
  $(".default_option").click(function(){
    $(this).parent().toggleClass("active");
  });

  $(".select_ul li").click(function(){
    var currentele = $(this).html();
    $(this).html(currentele);
    $(this).parents(".select_wrap").removeClass("active");
  });

  // 탑 btn
  $("#top_btn").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, '500');
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

   // header 
   $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('header').addClass('on');
    } else {
      $('header').removeClass('on');
    }
  });
   
  //모든 메뉴 펼치는 햄버거바
  $(".btn_menu_op").click(function(){
    $(this).next(".sub_menu").slideToggle(300);
  });

  $("#al_menu .btn_close").click(function(){
      $("#al_menu").hide();
  });

  $(".hd_menu_btn").click(function(){
      $("#al_menu").show();
  });

  $(function () {

    $(".btn_gnb_op").click(function(){
        $(this).toggleClass("btn_gnb_cl").next(".gnb_2dul").slideToggle(300);
        
    });

     //검색바
      $(".hd_sch_btn").on("click", function() {
        $("#hd_sch").show();
      });

      $("#hd_sch .btn_close").on("click", function() {
          $("#hd_sch").hide();
      });
  
  });

});

 
        

