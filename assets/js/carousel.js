$(document).ready(function(){
  $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      autoplaySpeed: 500,
      arrows: false,
      dots: false,
      pauseOnHover: true,
      
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 4
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 3,

          }
      }]
  });
});