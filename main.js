'use strict';

function initReveal() {
  const els = document.querySelectorAll('.product, .story-grid, .contact-card, .about-img-wrap');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  els.forEach((el) => {
    el.classList.add('reveal');
    const siblings = [...el.parentElement.children];
    const idx = siblings.indexOf(el);
    el.style.transitionDelay = `${idx * 60}ms`;
    io.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', initReveal);
