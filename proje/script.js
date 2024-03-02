var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 0,
   
  });
  
  var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 9000,
      disableOnInteraction: false,
    },
  });
  
  const navMenuBtn = document.querySelector('.nav-menu-btn');
  const navCloseBtn = document.querySelector('.nav-close-btn');
  const navigation = document.querySelector('.navigation');
  
  // Navigation menu toggle
  navMenuBtn.addEventListener('click', () => {
    navigation.style.display = 'flex';
  });
  
  navCloseBtn.addEventListener('click', () => {
    navigation.style.display = 'none';
  });
  
  
  
  
  // JavaScript Kodları
  const menuButton = document.querySelector('.nav-menu-btn');
  const closeButton = document.querySelector('.nav-close-btn');
  const menuLinks = document.querySelectorAll('.nav-items a');
  
  menuButton.addEventListener('click', function() {
    document.querySelector('.navigation').classList.add('show');
  });
  
  closeButton.addEventListener('click', function() {
    document.querySelector('.navigation').classList.remove('show');
  });
  
  menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const sectionOffsetTop = document.querySelector(href).offsetTop;
      const scrollOptions = {
        top: sectionOffsetTop,
        behavior: 'smooth'
      };
  
      document.querySelector('.navigation').classList.remove('show');
  
      window.scroll(scrollOptions);
    });
  });
  
  
  
  
  ScrollReveal().reveal('.punchline', {
    origin: 'left',
    distance: '100px',
    duration: 1000,
    delay: 500
  });
  ScrollReveal().reveal('.open', {
  
    delay: 500
  });
  ScrollReveal().reveal('.box', {
    origin: 'left',
    distance: '100px',
    duration: 1000,
    delay: 500
  });
  ScrollReveal().reveal('.titles', {
    origin: 'top',
    distance: '100px',
    duration: 1000,
    delay: 1000
  });
  ScrollReveal().reveal('.new', {
    origin: 'top',
    distance: '100px',
    duration: 1000,
    delay: 500
  });
  ScrollReveal().reveal('.start', {
    delay: 100
  });
  ScrollReveal().reveal('.photo1', {
    origin: 'top',
    distance: '100px',
    duration: 1000,
    delay: 300
  });
  ScrollReveal().reveal('.photo2', {
    origin: 'top',
    distance: '100px',
    duration: 1000,
    delay: 500
  });
  ScrollReveal().reveal('.photo3', {
    origin: 'top',
    distance: '100px',
    duration: 1000,
    delay: 700
  });
  ScrollReveal().reveal('.photo4', {
    origin: 'top',
    distance: '100px',
    duration: 1000,
    delay: 900
  });
  ScrollReveal().reveal('.photo5', {
    origin: 'top',
    distance: '100px',
    duration: 1000,
    delay: 1200
  });
  ScrollReveal().reveal('.photo6', {
    origin: 'top',
    distance: '100px',
    duration: 1000,
    delay: 1400
  });
  
  
  // ScrollReveal().reveal('.open2', {
  //   origin: 'top',
  //   distance: '100px',
  //   duration: 1000,
  //   delay: 1400
  // });
  
  // ScrollReveal().reveal('.open3', {
  //   origin: 'top',
  //   distance: '100px',
  //   duration: 1000,
  //   delay: 1400
  // });
  // ScrollReveal().reveal('.open4', {
  //   origin: 'top',
  //   distance: '100px',
  //   duration: 1000,
  //   delay: 1400
  // });
  
  
  document.querySelector('.read-btn').addEventListener('click', function() {
    var contactInfo = document.querySelector('#contact-info');
    contactInfo.scrollIntoView({ behavior: 'smooth' });
  });
  
  document.querySelector('.read-btn').addEventListener('click', function() {
    var contactInfo = document.getElementById('#contact-info');
    contactInfo.scrollIntoView({ behavior: 'smooth' });
  });