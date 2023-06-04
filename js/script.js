const navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  navbar.classList.remove('active');
};

document
  .querySelectorAll('.contact .row .faq .box h3')
  .forEach((el) =>
    el.addEventListener('click', () =>
      el.parentElement.classList.toggle('active')
    )
  );

var swiper = new Swiper('.home-slider', {
  loop: true,
  effect: 'coverflow',
  grabCursor: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadow: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper('.gallery-slider', {
  loop: true,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var swiper = new Swiper('.reviews-slider', {
  slidesPerView: 1,
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    1200: {
      slidesPerView: 2,
    },
  },
});

// var swiper = new Swiper('.reviews-slider', {
//   loop: true,
//   slidesPerView: 'auto',
//   grabCursor: true,
//   spaceBetween: 100,
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   breakpoints: {
//     768: {
//       slidesPerView: 1,
//     },
//     1200: {
//       slidesPerView: 2,
//     },
//   },
// });
