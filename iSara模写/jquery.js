$(function(){
  // アコーディオンメニューのスクリプト
  $('.faq-list-item').click(function(){
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')){
      $answer.removeClass('open');
      $answer.slideUp(250);
      $(this).find('span').replaceWith('<span class="fas fa-angle-down"></span>');
    }else{
      $answer.addClass('open');
      $answer.slideDown(250);
      $(this).find('span').replaceWith('<span class="fas fa-angle-up"></span>');
    }
  });
  
  $('.scroll').hide();
  $(window).scroll(function (){
      if ($(this).scrollTop() > 60) {
        $('.scroll').fadeIn();
      } else {
        $('.scroll').fadeOut();
      }
  });

  $('.scroll').click(function(){
    $("html,body").animate({scrollTop:0},500,"swing");
    return false;
    });

  $('.form_link').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({'scrollTop': position}, 500);
  });
});
