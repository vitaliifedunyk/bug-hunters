import { refs } from '../../utils/refs.js';

const desktopMediaQuery = window.matchMedia('(min-width: 1440px)');

function setMenuState(isOpen) {
  if (!refs.mobileMenu) return;

  refs.mobileMenu.classList.toggle('is-hidden', !isOpen);
  refs.mobileMenu.setAttribute('aria-hidden', String(!isOpen));
  refs.mobileMenuOpenBtn?.setAttribute('aria-expanded', String(isOpen));
  document.body.classList.toggle('no-scroll', isOpen);
}

function openMobileMenu() {
  if (!refs.mobileMenu || desktopMediaQuery.matches) return;

  setMenuState(true);
}

function closeMobileMenu() {
  setMenuState(false);
}

function handleEscape(event) {
  if (event.key === 'Escape' && !refs.mobileMenu?.classList.contains('is-hidden')) {
    closeMobileMenu();
  }
}

function handleBackdropClick(event) {
  if (event.target === refs.mobileMenu) {
    closeMobileMenu();
  }
}

function handleDesktopChange(event) {
  if (event.matches) {
    closeMobileMenu();
  }
}

export function initMobileMenu() {
  if (!refs.mobileMenuOpenBtn || !refs.mobileMenu || !refs.mobileMenuCloseBtn) {
    return;
  }

  const mobileMenuLinks = refs.mobileMenu.querySelectorAll('[data-nav-link]');

  refs.mobileMenuOpenBtn.addEventListener('click', openMobileMenu);
  refs.mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);
  refs.mobileMenu.addEventListener('click', handleBackdropClick);
  document.addEventListener('keydown', handleEscape);
  desktopMediaQuery.addEventListener('change', handleDesktopChange);
  mobileMenuLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

  closeMobileMenu();
}
