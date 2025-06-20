document.addEventListener('DOMContentLoaded', () => {
  // Toggle buttons (optional)
  document.querySelector('#search-btn')?.addEventListener('click', () => {
    document.querySelector('.search-form')?.classList.toggle('active');
  });

  document.querySelector('#cart-btn')?.addEventListener('click', () => {
    document.querySelector('.shopping-cart')?.classList.toggle('active');
  });

  document.querySelector('#user-btn')?.addEventListener('click', () => {
    document.querySelector('.login-form')?.classList.toggle('active');
  });

  // Swiper init
  var swiper = new Swiper('.product-slider', {
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });
});
var swiper = new Swiper('.review-slider', {
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });