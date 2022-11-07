$(function(){
//-------------------------------

new fullpage('#fullpage', {
    anchors: ['main', 'project01', 'project02', 'project03', 'project04', 'project05','practice_site','practice_skill','contact'],
    keyboardScrolling: true,
    //responsiveWidth:769,

    afterLoad: function(origin, destination, direction){
      let txt = $('.section').eq(destination.index).find('strong').text();
      $('.pg').text(txt);
      $('.section').eq(destination.index).addClass('on').siblings().removeClass('on');
      $('.gnb a').eq(destination.index).addClass('on').siblings().removeClass('on');
  },

  });

  $('.gnb a').on('click', function(){
    $(this).addClass('on').siblings().removeClass('on');
  });

  $('.menu_icon').on('click', function(){
    $(this).toggleClass('on');
    $('.cover').slideToggle();
  });

  $('.cover a').on('click', function(){
    $('.cover').slideUp();
    $('.menu_icon').removeClass('on');
  });

  $(window).on('resize', function(){
    if($(window).width()>768)
        $('.menu').removeAttr("style");
        $('.section').eq(destination.index).addClass('on').siblings().removeClass('on');
    
  });
  
  $(".js_slider").slick({
        arrows:false,
        dots: false,
    
  });
  $('.jsArrow i:nth-child(1)').on('click', function () {
      $('.js_slider').slick('slickPrev')
  });
  $('.jsArrow i:nth-child(2)').on('click', function () {
      $('.js_slider').slick('slickNext')
  });


//-------------------------------
})