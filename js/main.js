// メインビジュアルの画像切り替え
$(function () {
  var setImg = '#photo';
  var fadeSpeed = 1600;
  var switchDelay = 5000;

  $(setImg).children('img').css({ opacity: '0' });
  $(setImg + ' img:first').stop().animate({ opacity: '1', zIndex: '20' }, fadeSpeed);
  setInterval(function () {
    $(setImg + ' :first-child').animate({ opacity: '0' }, fadeSpeed).next('img').animate({ opacity: '1' }, fadeSpeed).end().appendTo(setImg);
  }, switchDelay);
});

// スムーススクロール
$(document).ready(function () {
  var backToTop = $('.backToTop');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      backToTop.fadeIn();
    } else {
      backToTop.fadeOut();
    }
  });
  backToTop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
});

// ハンバーガーメニュードロップダウン
$(function () {
  $("#menu").css("display", "none");
  $("#menu-bt").on("click", function () {
    $("#menu").slideToggle(300);
    $(this).toggleClass("active");
  });
});
