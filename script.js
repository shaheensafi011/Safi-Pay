// SafiPay Script.js
// Basic animations and interactions

// Smooth scroll for navigation links
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
  link.addEventListener('click', e => {
    if (link.hash) {
      e.preventDefault();
      const target = document.querySelector(link.hash);
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fade-in effect for sections
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.3 });

sections.forEach(sec => {
  sec.style.opacity = '0';
  sec.style.transform = 'translateY(40px)';
  sec.style.transition = '1s ease';
  observer.observe(sec);
});