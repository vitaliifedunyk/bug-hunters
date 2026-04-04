import { DESKTOP_MEDIA_QUERY } from '../../utils/constants.js';
import { refs } from '../../utils/refs.js';

export function initMobileMenu() {
  const { mobileMenu, openMenuBtn, closeMenuBtn, menuBackdrop, menuLinks, body } = refs;

  if (!mobileMenu || !openMenuBtn || !closeMenuBtn || !menuBackdrop) {
    return;
  }

  const desktopMediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);
  let lastFocusedElement = openMenuBtn;

  const openMenu = () => {
    if (desktopMediaQuery.matches) return;

    lastFocusedElement = document.activeElement;
    mobileMenu.classList.remove('is-hidden');
    mobileMenu.setAttribute('aria-hidden', 'false');
    openMenuBtn.setAttribute('aria-expanded', 'true');
    body.classList.add('no-scroll');
    closeMenuBtn.focus();
  };

  const closeMenu = (returnFocus = true) => {
    mobileMenu.classList.add('is-hidden');
    mobileMenu.setAttribute('aria-hidden', 'true');
    openMenuBtn.setAttribute('aria-expanded', 'false');
    body.classList.remove('no-scroll');

    if (returnFocus && lastFocusedElement instanceof HTMLElement) {
      lastFocusedElement.focus();
    }
  };

  const handleEscape = event => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  };

  const closeMenuOnDesktop = event => {
    if (event.matches) {
      closeMenu(false);
    }
  };

  openMenuBtn.addEventListener('click', openMenu);
  closeMenuBtn.addEventListener('click', () => closeMenu());
  menuBackdrop.addEventListener('click', () => closeMenu());
  menuLinks.forEach(link => link.addEventListener('click', () => closeMenu(false)));

  document.addEventListener('keydown', handleEscape);
  desktopMediaQuery.addEventListener('change', closeMenuOnDesktop);
}
