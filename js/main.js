$(document).ready(function(){
  //팝업 클릭 
  $(".popup_close").on("click",function(){
    $(this).hide();
  });
  // #top_btn 
  $(function () {
    $("#top_btn").on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, '500');
      return false;
    });
    
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#top_btn').fadeIn('slow');
      } else {
        $('#top_btn').fadeOut('slow');
      }
    });

    // header 
    function resizeFunction() {
      if ($(window).width() < 1300) {
        $('header').removeClass('on');
      }
    }
    
    $(window).on('resize', resizeFunction);
    
    $(window).scroll(function () {
      if ($(this).scrollTop() > $("#intro").height() - '-60') {
        $('header').addClass('on');
      } else {
        $('header').removeClass('on');
      }
    });
  
  });

  // 모바일 버튼 클릭
  function toggleMenu() {
    $(".menu").toggleClass("on");
    $(".menu_close").stop().fadeToggle();
    $(".btn_menu_btn").toggleClass("on");
  }
  
  $(".btn_menu_btn").click(function() { 
    toggleMenu();
  });
  
  $(window).resize(function() {
    if ($(window).width() >= 768) {
      $(".menu").removeClass("on");
      $(".menu_close").fadeOut();
      $(".btn_menu_btn").removeClass("on");
    }
  });
  
  $('.menu').click(function(e) { 
    $(this).removeClass("on");
    $(".menu_close").fadeOut();
    $(".btn_menu_btn").removeClass("on");

  });
 
   

  // function resizeFunction() {
  //   if($(window).width() < 768) {

  //     $(".btn_menu_btn").click(function() { 
  //       $(".menu").toggleClass("on");
  //      $(".menu_close").stop().fadeToggle();
  //       $(this).toggleClass("on");
  //     });
  //   }else {
  //     //$(".btn_menu_btn").off("click");
  //    $(".btn_menu_btn").removeClass("on");
  //     $(".menu_close").fadeOut();
  //     $(".menu ").removeClass("on");
  
  //   }  
  // }
  
  // $(window).on('resize', resizeFunction);


  // $(window).resize(function() {
   
   
  // });



  //프리뷰 스와이퍼 -섹션0
  var swiper = new Swiper(".preview.mySwiper", {
    slidesPerView: 1,
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
      disableOnInteraction: true,
    },
    breakpoints: {
      480: {
        slidesPerView: 3,
        spaceBetween: 0,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 0,
        centeredSlides: true,
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

 // 모달컨텐츠(롤케이크모달)//
 let poseY;
  $(".modal_all").click(function (e) {
    e.preventDefault();
    let modalid = $(this).attr("href");
   $(modalid).fadeIn(300);
   $(".modal_close").fadeIn(300);
    poseY = $(window).scrollTop();
    $("html,body").addClass("not_scroll");
    $(".body_wrap").css({top: -poseY});
 });
  $(".modal_close").click(function(e){
    e.preventDefault();
    $(".modal_content").fadeOut(300);
    $(".modal_close").fadeOut(0);
   // $(".main-character").show()
    $("html,body").removeClass("not_scroll");
    poseY = $(window).scrollTop(poseY);
  });

 //section_2 모바일
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
  

  //파인아트스와이퍼 섹션 4
  var swiper = new Swiper(".fineArt_Swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
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

 // 타이핑 스크립트
 class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

