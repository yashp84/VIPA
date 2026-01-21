// =========================
// MOBILE MENU TOGGLE
// =========================
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
}


// =========================
// HERO SLIDER
// =========================
let slides = document.querySelectorAll(".slide");
let currentIndex = 0;

// show slide based on index
function showSlide(index) {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slides[index].classList.add("active");
}

// move to next slide
function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);

document.addEventListener('DOMContentLoaded', () => {

  let slides = document.querySelectorAll('.slide');
  let current = 0;
  let slideInterval = null;
  let sliderContainer = document.querySelector('.slider-container');

  if (slides.length === 0 || !sliderContainer) return; // safety check

  // show slide
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) slide.classList.add('active');
    });
    current = index;
  }

  // next & prev
  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }

  function prevSlide() {
    showSlide((current - 1 + slides.length) % slides.length);
  }

  // auto-slide every 3 seconds
  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 3000);
  }

  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  // arrows click
  const prevArrow = document.querySelector('.slider-arrow.prev');
  const nextArrow = document.querySelector('.slider-arrow.next');

  if (prevArrow && nextArrow) {
    prevArrow.addEventListener('click', () => {
      prevSlide();
      stopAutoSlide();
      startAutoSlide();
    });

    nextArrow.addEventListener('click', () => {
      nextSlide();
      stopAutoSlide();
      startAutoSlide();
    });
  }

  // swipe support
  let startX = 0;
  sliderContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  sliderContainer.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    let diff = startX - endX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
      stopAutoSlide();
      startAutoSlide();
    }
  });

  // start slider
  startAutoSlide();
});
