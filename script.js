// Elements
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.nav-link');
const mobileLinks = document.querySelectorAll('.mobile-link');
const sections = document.querySelectorAll('section');
const reveals = document.querySelectorAll('.reveal-on-scroll');
const roleEl = document.getElementById('rotating-roles');

// Mobile nav toggle
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
}

// Close mobile menu on link click
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (mobileMenu && mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
    }
  });
});

// Rotating roles
const roles = ["Data Analyst", "Frontend Developer", "Software Support Engineer"];
let rIdx = 0;
if (roleEl) {
  roleEl.style.transition = 'opacity 0.3s ease-in-out';
  setInterval(() => {
    rIdx = (rIdx + 1) % roles.length;
    roleEl.style.opacity = 0;
    setTimeout(() => {
      roleEl.textContent = roles[rIdx];
      roleEl.style.opacity = 1;
    }, 300); // Wait for fade-out to complete
  }, 2500);
}

// Reveal on scroll using IntersectionObserver
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, { threshold: 0.1 });

reveals.forEach(r => revealObserver.observe(r));

// Scrollspy - highlight nav links
const spy = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.id;
    if (entry.isIntersecting) {
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-50% 0px -50% 0px' }); // Activates when section is in the middle of the viewport

sections.forEach(s => spy.observe(s));