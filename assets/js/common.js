
//top download 
function closeTopDownload() {
  var $close_btn = $('.close_btn');
  var $downloadme = $('#downloadme');
  $downloadme.slideUp(400);
  $close_btn.hide();
}



//menu Open
function menuToggleOpen() {
  if ($('.menuPanel').hasClass('active')) {
    $(".menuPanel, .menuPanel-hamburguer").removeClass('active');
    $('.nestedList__item').removeClass('js-navAnimation');
    closeAlert();
  }else{
    showBlackOverlay();
    $('.menuPanel, .menuPanel-hamburguer').addClass('active');
    $('.nestedList__item').addClass('js-navAnimation');
  }
}

// //menu Close
// function menuClose(){
//   $('.nestedList__item').removeClass('js-navAnimation');
// }

//showMobileSearch
function showMobileSearch() {
    $(".mobile-search").toggleClass("active");
    $(".maskDark").fadeIn('fast');

}
function MaskHide(){
  $(".maskDark").fadeOut('fast');
  $(".mobile-search").removeClass("active");

}


// popup_DowloadApp
function open_popup_DowloadApp(){
    document.getElementById('popup').style.display='block';
    document.getElementById('popup--light').style.display='block';
    $("#popup--fade").addClass('active');

}
function close_popup_DowloadApp(){
    document.getElementById('popup').style.display='none';
    document.getElementById('popup--light').style.display='none';
    $("#popup--fade").removeClass('active');
}


// filter_slideToggle
function filter_slideToggle(){
  $(".filter .panel").slideToggle("fast");
}


// showBlackOverlay
function showBlackOverlay(){
  $(".black-overlay").addClass('active');
}


// closeAlert
function closeAlert(){
  $(".alert , .black-overlay, .menuPanel-hamburguer").removeClass('active');
}


 // gotop
function gotop () {
    jQuery("html,body").animate({
        scrollTop: 0
    }, 1000);
}




//vue
export{closeTopDownload}
export{menuToggleOpen}
export{showMobileSearch}
export{MaskHide}
export{open_popup_DowloadApp}
export{close_popup_DowloadApp}
export{filter_slideToggle}
export{showBlackOverlay}
export{closeAlert}
export{gotop}







  // //top download 
  // var $close_btn = $('.close_btn');
  // var $downloadme = $('#downloadme');
  // $close_btn.on('click', function () {
  //     $downloadme.slideUp(400);
  //     $close_btn.hide();
  // });

  // if (typeof isiOS === 'undefined') {
  //   isiOS = false;
  // }

  // if (typeof isAndroid === 'undefined') {
  //   isAndroid = false;
  // }

  // if(isiOS == true || isAndroid == true){
  //   $(".oppenButton__label").click(function() {
  //     var appWindow = window.open(scheme_link,"_blank");

  //     setTimeout( function () {
  //       if (appWindow) {
  //         appWindow.location = download_link;
  //       }
  //     },500);
  //   })
  // }








  // //anchorScroll
  // $(".anchorScroll").on("click",function(event){
  //     event.preventDefault();
  //     $("html,body").animate({
  //         scrollTop: $($(this).attr("href")).offset().top
  //     },600)  
  // });


  // // navbar : Scroll
  // var lastScrollTop = 0;
  // var navbarHeight = $('.headerNav').outerHeight();
  // var delta = navbarHeight;
  

  // $(window).scroll(function(event) {
  //   hasScrolled();
  // });
  // function hasScrolled() {
  //       var st = $(this).scrollTop();
  //       var headerNav = $(".headerNav");

  //       // Make sure they scroll more than delta
  //       if (Math.abs(lastScrollTop - st) <= delta)
  //         return;

  //       // If they scrolled down and are past the navbar, add class .nav-up.
  //       // This is necessary so you never see what is "behind" the navbar.
  //       if (st > lastScrollTop && st > navbarHeight) {
  //             // Scroll Down
  //             headerNav
  //             .removeClass('nav-down fixed')
  //             .addClass('nav-hide')


  //       } else if (st + $(window).height() < $(document).height()) {
  //           headerNav
  //             .removeClass('nav-hide')
  //             .addClass('nav-down fixed')
  //             //index.php : scrollmagic-- not on the way up
  //             $(".biteScreenshot").css("display","none");
  //             $(".scrollmagic-pin-spacer").addClass('nopadding');
  //       }

  //       if ($(document).scrollTop() < 130) {
  //         headerNav.addClass('nav-normal').removeClass('nav-down fixed');
          
  //       } else {
  //         headerNav.removeClass('nav-normal')
  //       }

  //       lastScrollTop = st;

  // }




  // // gotop
  // $(".gotop").click(function () {
  //     jQuery("html,body").animate({
  //         scrollTop: 0
  //     }, 1000);
  // });
  // $(window).scroll(function () {
  //     if ($(this).scrollTop() > 500) {
  //         $('.btn-specialLink.pos-fix').fadeIn("fast");//置底浮動按鈕
  //     } else {
  //         $('.btn-specialLink.pos-fix').stop().fadeOut("fast");//置底浮動按鈕
  //     }
  // });


  // // floatTool
  // $(".floatTool").hide()
  // $(window).scroll(function () {
  //     if ($(this).scrollTop() > 500) {
  //         $('.floatTool').fadeIn("fast");//右側浮動分享鈕
  //     } else {
  //         $('.floatTool').stop().fadeOut("fast");//右側浮動分享鈕
  //     }
  // });


  // // floatBanner-download
  // if($(window).width() < 768){
  //     $(window).scroll(function () {
  //         if ( $(this).scrollTop() > $(document).height()/6 ) {
  //             $('.floatBanner-download').addClass('slideInUp animated-fast');
  //         } else {
  //             $('.floatBanner-download').removeClass('slideInUp animated-fast');
  //         }

  //         var last=$("body").height()-$(window).height()-200;  // 如果高度已經達到底部
  //         if($(window).scrollTop() >= last){
  //              $('.floatBanner-download').css("opacity","0");
  //         }else{
  //              $('.floatBanner-download').css("opacity","1");
  //         }
  //     });
  // }

  //  //展開收合: trending.html 
  //  var $JQellipsis = $(".JQellipsis")
  //  var infoHeight = $(".JQellipsis").height();// 實際高度
  //  // alert(infoHeight)
  //  var defHeight = 51;//默認高度
  //  // 如果高度超出
  //  if (infoHeight > defHeight) {
  //      // 给p設置默認高度,隱藏超出部分
  //      $JQellipsis.css({'height': defHeight + 'px', "overflow": "hidden"});
  //      //加按钮
  //       $(".expand-bt").append('展開<span class="icon icon-arrow-bottom-solid"></span>');
  //      //ellipsis
  //      $JQellipsis.after("<p class='dotted'>...</p>");

  //      // 點擊按钮
  //      $(".expand-bt").click(function() {
  //          var curHeight = $JQellipsis.height();
  //          if (curHeight == defHeight) {
  //              //ellipsis
  //              $("p.dotted").remove();
  //              $JQellipsis.addClass('autoHeight');
  //              $(this).html('收合<span class="icon icon-arrow-bottom-solid rotate"></span>')
  //          } else{
  //              //ellipsis
  //              $JQellipsis.height(defHeight).after("<p class='dotted'>...</p>")
  //              $JQellipsis.removeClass('autoHeight');
  //              $(this).html('展開<span class="icon icon-arrow-bottom-solid"></span>');
  //          };
  //      });
  //  }
   

  //  // JQtextOverflow 依高度限字數
  //  var len = 46; // 超過字數以"..."取代
  //  var $JQtextOverflow = $(".JQtextOverflow")
  //  $(".JQtextOverflow").each(function(i){
  //      if($(this).text().length>len){
  //          // $(this).attr("title",$(this).text());
  //          var text=$(this).text().substring(0,len-1)+"...";
  //          $(this).text(text);
  //      }
  //  });

