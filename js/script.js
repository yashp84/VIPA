// --------------------
// SAFE DOM READY
// --------------------
document.addEventListener('DOMContentLoaded', function () {

    // --------------------
    // MENU TOGGLE
    // --------------------
    window.toggleMenu = function () {
        document.getElementById("menu")?.classList.toggle("show");
    };

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
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index]?.classList.add('active');
    }

    window.nextSlide = function () {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    };

    window.prevSlide = function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    };

    if (slides.length) {
        showSlide(currentIndex);
        setInterval(window.nextSlide, 3000);
    }

    // --------------------
    // GO TO TOP BUTTON
    // --------------------
    const goTopBtn = document.querySelector('.float-top');

    if (goTopBtn) {
        window.addEventListener('scroll', () => {
            goTopBtn.style.display =
                window.scrollY > 300 ? 'flex' : 'none';
        });

        goTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});

// --------------------
// WHATSAPP MESSAGE
// --------------------
function sendWhatsAppMessage() {
    const name = document.getElementById("name")?.value || '';
    const email = document.getElementById("email")?.value || '';
    const phone = document.getElementById("phone")?.value || '';
    const message = document.getElementById("message")?.value || '';

    const whatsappMessage =
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;

    const whatsappURL =
        "https://wa.me/918140213274?text=" +
        encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");
}
