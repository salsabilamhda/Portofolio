document.addEventListener('DOMContentLoaded', (event) => {

    // 1. Navbar 'scrolled' effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if(targetElement) {
                const headerOffset = 70; // Height of the header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Fade-in Animation on Scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
            // Optional: remove 'else' if you don't want re-animation
            // else {
            //     entry.target.classList.remove('show');
            // }
        });
    }, {
        threshold: 0.1 // Triggers when 10% of the element is visible
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

});


/* --- CODE FOR PARTICLES.JS --- */
// (This code should remain)
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 60, 
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#6A9C89" 
        },
        "shape": {
            "type": "circle",
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#6A9C89", 
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2, 
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse" 
            },
            "onclick": {
                "enable": true,
                "mode": "push" 
            },
            "resize": true
        },
        "modes": {
            "repulse": {
                "distance": 100,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
        }
    },
    "retina_detect": true
});

/* --- WHATSAPP FORM SUBMISSION CODE HAS BEEN REMOVED --- */
// (Make sure the code that started with 'const contactForm = ...' is deleted)