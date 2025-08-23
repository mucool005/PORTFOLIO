// DOM elements for navigation and animation
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('#mobile-menu a, nav a');
const sections = document.querySelectorAll('.reveal-on-scroll');

// Toggle mobile menu visibility
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
});

// Intersection Observer for fade-in effect on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // We can unobserve if we want the animation to only run once
            // observer.unobserve(entry.target);
        } else {
            // Optional: remove the class if it's no longer visible
            // entry.target.classList.remove('is-visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});
