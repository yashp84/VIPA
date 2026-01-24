// --------------------
// MENU TOGGLE
// --------------------
function toggleMenu() {
    document.getElementById("menu")?.classList.toggle("show");
}

// Dropdown toggle
document.querySelectorAll('.dropdown > a').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        this.parentElement.classList.toggle('active');
    });
});

// Close dropdown if clicked outside
window.addEventListener('click', function (e) {
    document.querySelectorAll('.dropdown').forEach(drop => {
        if (!drop.contains(e.target)) {
            drop.classList.remove('active');
        }
    });
});

// --------------------
// HERO SLIDER
// --------------------
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    if (!slides.length) return;

    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;

    showSlide(currentIndex);
    setInterval(nextSlide, 3000);
});

// --------------------
// GO TOP BUTTON
// --------------------
const goTopBtn = document.getElementById("goTop");

if (goTopBtn) {
    window.addEventListener("scroll", () => {
        goTopBtn.style.display =
            window.scrollY > 200 ? "block" : "none";
    });

    goTopBtn.addEventListener("click", e => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// --------------------
// WHATSAPP MESSAGE
// --------------------
function sendWhatsAppMessage() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const whatsappMessage =
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;

    const whatsappURL =
        "https://wa.me/918140213274?text=" + encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");
}
