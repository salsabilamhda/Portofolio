// ==== SCROLL ANIMATION (OBSERVER) ====
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    rootMargin: '0px 0px -100px 0px' 
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// ==== NAVBAR SCROLL BEHAVIOR & ACTIVE LINK ====
const header = document.querySelector('.header');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    // Header shadow on scroll
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Active link highlighting
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').substring(1) === current) {
            a.classList.add('active');
        }
    });
});


// ==== PARTICLES.JS CONFIGURATION ====
particlesJS('particles-js', {
    "particles": {
        "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#16423C" },
        "shape": { "type": "circle", "stroke": { "width": 0, "color": "#16423C" } },
        "opacity": { "value": 0.5, "random": false },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#495057", "opacity": 0.4, "width": 1 },
        "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "grab" },
            "onclick": { "enable": true, "mode": "push" },
            "resize": true
        },
        "modes": {
            "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
            "push": { "particles_nb": 4 }
        }
    },
    "retina_detect": true
});


// ==== MOBILE MENU TOGGLE (NEW LOGIC) ====
const menuToggle = document.querySelector('#mobile-menu');
const navLinksContainer = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

// Toggle menu saat tombol diklik
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('is-active');
        navLinksContainer.classList.toggle('active');
    });
}

// Tutup menu saat link diklik
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinksContainer.classList.contains('active')) {
            navLinksContainer.classList.remove('active');
            menuToggle.classList.remove('is-active');
        }
    });
});