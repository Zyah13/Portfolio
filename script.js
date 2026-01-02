// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        // Remove 'active' from all links and add to clicked
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
    link.addEventListener('mouseenter', function() {
        navLinks.forEach(l => l.classList.remove('hovered'));
        this.classList.add('hovered');
    });
    link.addEventListener('mouseleave', function() {
        this.classList.remove('hovered');
    });
});

// Active link highlighting on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightActiveSection() {
    const scrollY = window.pageYOffset;

    let found = false;
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        if (!found && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
            found = true;
        }
    });
    // If no section is found, remove all active states
    if (!found) {
        navLinks.forEach(link => link.classList.remove('active'));
    }
    // Remove hovered state if not hovering
    navLinks.forEach(link => {
        if (!link.matches(':hover')) {
            link.classList.remove('hovered');
        }
    });
}

window.addEventListener('scroll', highlightActiveSection);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you can add form submission logic
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Header background on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 20px rgba(99, 102, 241, 0.3), 0 0 30px rgba(99, 102, 241, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(99, 102, 241, 0.2), 0 0 20px rgba(99, 102, 241, 0.1)';
    }
});

