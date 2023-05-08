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
