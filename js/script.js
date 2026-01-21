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
