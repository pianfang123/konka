"use strict";

var mySwiper = new Swiper('#myswiper', {
  // direction: 'vertical', // 垂直切换选项
  // direction: 'horizontal', // 水平切换选项，默认
  loop: true,
  // 循环模式选项
  // autoplay: true,//自动播放
  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: false
  },
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  } // 如果需要滚动条
  // scrollbar: {
  //     el: '.swiper-scrollbar',
  // },

});