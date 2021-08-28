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