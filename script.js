
$(function(){
  //ハンバーガーメニュー
  $('.burger-btn').on('click',function(){
    $('.burger-btn').toggleClass('close');
    $('.nav-list').toggleClass('slide-in');
    $('body').toggleClass('noscroll');

    if( $(window).width() < 600 ){//デバイスの幅が768以下のとき
      $('.nav-item>a').on('click',function(){//.nav-item>aをクリックすると
      $('.nav-list').removeClass('slide-in');//.nav-wrapperが0.5秒でフェードアウト(メニューのフェードアウト)
      $('.burger-btn').removeClass('close');//.btn_triggerのcloseクラスを削除
      $('body').removeClass('noscroll');
    });
    //aaaaa
    //bbbbb
  };
  });
});
