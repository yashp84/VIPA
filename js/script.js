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

let slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
    });
    current = index;
}

// Arrow click
document.querySelector('.slider-arrow.prev').addEventListener('click', () => {
    let nextIndex = (current - 1 + slides.length) % slides.length;
    showSlide(nextIndex);
});

document.querySelector('.slider-arrow.next').addEventListener('click', () => {
    let nextIndex = (current + 1) % slides.length;
    showSlide(nextIndex);
});

// Swipe for mobile
let startX = 0;
document.querySelector('.slider-container').addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});
document.querySelector('.slider-container').addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    let diff = startX - endX;
    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            let nextIndex = (current + 1) % slides.length;
            showSlide(nextIndex);
        } else {
            let nextIndex = (current - 1 + slides.length) % slides.length;
            showSlide(nextIndex);
        }
    }
});
