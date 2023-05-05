const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinksFade = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    //toggle Nav
    nav.classList.toggle('nav-active');
    //animation
    navLinksFade.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    // burger animation
    burger.classList.toggle('toggle');
  });
};

navSlide();

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  freeMode: true,
});

var swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

let swiper2 = new Swiper('.lower-content.swiper', {
  slidesPerView: 6,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 500,
  },
  reverseDirection: true,
  changeDirection: false,
});

let swiper3 = new Swiper('.tab.top-content.swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 500,
  },
});

let swiper4 = new Swiper('.tab.lower-content.swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 500,
  },
  reverseDirection: true,
  changeDirection: false,
});

// reseller section settings

var reseller__close = document.querySelector('.reseller__close');
var reseller = document.querySelector('#reseller');
var reseller__section = document.querySelector('.reseller__section');

reseller.addEventListener('click', () => {
  reseller__section.classList.add('reseller__section--active');
});

reseller__close.addEventListener('click', () => {
  reseller__section.classList.remove('reseller__section--active');
});


var download__close = document.querySelector('.download__close');
var download = document.querySelector('#download');
var download__section = document.querySelector('.download__section');


download.addEventListener('click', () => {
  download__section.classList.add('download__section--active');
});

download__close.addEventListener('click', () => {
  download__section.classList.remove('download__section--active');
});
