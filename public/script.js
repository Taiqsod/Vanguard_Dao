// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const menuOverlay = document.getElementById('menuOverlay');
const menuItems = document.querySelectorAll('.menu-item.active');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menuOverlay.classList.toggle('active');
  document.body.style.overflow = menuOverlay.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking active menu items
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    hamburger.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Add fade-in class to sections and observe them
document.querySelectorAll('.about-container, .team-card, .stat').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Parallax effect for hero decorations
window.addEventListener('mousemove', (e) => {
  const decorations = document.querySelectorAll('.hero-decoration');
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  
  decorations.forEach(dec => {
    dec.style.transform = `translate(${x}px, ${y}px) ${dec.classList.contains('left') ? 'rotate(-12deg)' : 'rotate(12deg)'}`;
  });
});

// Console easter egg
console.log('%c Vanguard Dao ', 'background: linear-gradient(135deg, #D946EF, #EC4899, #06B6D4); color: white; font-size: 24px; font-weight: bold; padding: 10px 20px; border-radius: 5px;');
console.log('%c Where we share ideas and mint the future ', 'color: #9ca3af; font-size: 14px;');
