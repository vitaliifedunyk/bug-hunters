import { refs } from '../../utils/refs.js';

function openMobileMenu() {
  if (!refs.mobileMenu) return;

  refs.mobileMenu.classList.remove('is-hidden');
  refs.mobileMenu.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
}

function closeMobileMenu() {
  if (!refs.mobileMenu) return;

  refs.mobileMenu.classList.add('is-hidden');
  refs.mobileMenu.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
}

function handleEscape(event) {
  if (event.key === 'Escape') {
    closeMobileMenu();
  }
}

function handleBackdropClick(event) {
  if (event.target === refs.mobileMenu) {
    closeMobileMenu();
  }
}

export function initMobileMenu() {
  if (!refs.mobileMenuOpenBtn || !refs.mobileMenu || !refs.mobileMenuCloseBtn) {
    return;
  }

  refs.mobileMenuOpenBtn.addEventListener('click', openMobileMenu);
  refs.mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);
  refs.mobileMenu.addEventListener('click', handleBackdropClick);
  document.addEventListener('keydown', handleEscape);
}
