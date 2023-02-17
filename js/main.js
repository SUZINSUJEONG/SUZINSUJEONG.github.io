$(document).ready(function(){

  $(function () {
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
      if ($(this).scrollTop() > $("#intro").height()) {
        $('header').addClass('on');
      } else {
        $('header').removeClass('on');
      }
    });

  });

  //팝업 클릭 
  $(".popup_close").on("click",function(){
    $(this).hide();
  });

  // 모바일 버튼 클릭
  $(".btn_menu_btn").click(function() { 

    $(".menu").toggleClass("on");
    $(this).toggleClass("on");
  });

  $('.menu').click(function(e) { 
  
    $(this).removeClass("on"); 
    $(".btn_menu_btn").removeClass("on"); 
  });

  //프리뷰 스와이퍼 -섹션0
  var swiper = new Swiper(".preview.mySwiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0,
    loop: true,
    // freeMode: true,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      480: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
  });

  //섹션 2

   //section_2 pc
   $(".tab_all").click(function (e) {
    e.preventDefault();
    let modalid = $(this).attr("href");
    $(".tab_all").removeClass('on');
    $(this).addClass('on');
   // $(this).parent().siblings().children().removeClass('on');
    $(modalid).fadeIn(300);
    $(modalid).siblings().hide();
 });

 //section_2 m
 $(".tab_all_m").click(function (e) {
    e.preventDefault();
    let modalid = $(this).attr("href");
    $(".tab_all_m").removeClass('on');
    $(this).addClass('on');
   // $(this).parent().siblings().children().removeClass('on');
    $(modalid).fadeIn(300);
    $(modalid).siblings().hide();
 });
 $(".modal_content_m").click(function(e){
    e.preventDefault();
    $(this).fadeOut(300);
    //$(".modal_close,.close-back").fadeOut(0)
   // $(".main-character").show()
    $("html,body").removeClass("not_scroll");
   // poseY = $(window).scrollTop(poseY);
  });

 // 모달컨텐츠(롤케이크모달)//
 let poseY;
  $(".modal_all").click(function (e) {
    e.preventDefault();
    let modalid = $(this).attr("href");
   $(modalid).fadeIn(300);
   $(".modal-close,.close-back").fadeIn(300);
    poseY = $(window).scrollTop();
    $("html,body").addClass("not_scroll")
    $(".body_wrap").css({top: -poseY})
 });
  $(".modal_close,.modal_content").click(function(e){
    e.preventDefault();
    $(".modal_content").fadeOut(300);
    //$(".modal_close,.close-back").fadeOut(0)
   // $(".main-character").show()
    $("html,body").removeClass("not_scroll");
    poseY = $(window).scrollTop(poseY);
  });

  //파인아트스와이퍼 섹션 4
  var swiper = new Swiper(".fineArt_Swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });

  //섹션 5
  $(".section5_box").eq(0).show();
  $(".section5_top_btn a").click(function(e){
  e.preventDefault();
    $(".section5_top_btn a").removeClass("on2");
    $(this).addClass("on2");
    $(".section5_box").hide();
    let tapid=$(this).attr("href");
    $(tapid).show();
  });

  $(".section5_top_btn .cng").click(function(){
        $(".cinema1").show();
        $(".cinema2").hide();
  });
  $(".section5_top_btn .ddc").click(function(){
        $(".cinema2").show();
        $(".cinema1").hide();
  });

});

