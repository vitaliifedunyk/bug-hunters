import { scrollToTarget } from '../../utils/smooth-scroll.js';

export function initHeader() {
  const navLinks = document.querySelectorAll('[data-nav-link]');

  if (!navLinks.length) return;

  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      const targetId = link.getAttribute('href');

      if (!targetId || !targetId.startsWith('#')) return;

      event.preventDefault();
      scrollToTarget(targetId);
    });
  });
}
