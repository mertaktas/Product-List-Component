import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'
        
var swiper = new Swiper(".mySwipper", {
slidesPerView:  "auto",
centeredSlides: false,
spaceBetween: 0,
autoplay: {
    delay: 3000,
},
pagination: {
  el: ".swiper-pagination",
  type: "fraction",
},
navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
});