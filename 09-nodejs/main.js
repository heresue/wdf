// 모든 컴포넌트는 대문자로 시작
import Swiper from "swiper";
import 'swiper/swiper.css'

// const swiper = new Swiper(엘리먼트이름, 옵션(객체{key:value}))    *new : 생성자 함수
const swiper = new Swiper('.slide-main', {
    // key: 'value',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
})

