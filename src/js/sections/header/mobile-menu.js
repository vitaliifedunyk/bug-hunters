import { DESKTOP_MEDIA_QUERY } from '../../utils/constants.js';
import { lockScroll, unlockScroll } from '../../utils/scroll-lock.js';
import { refs } from '../../utils/refs.js';

export function initMobileMenu() {
  const {
    root: mobileMenu,
    openButton: openMenuBtn,
    closeButton: closeMenuBtn,
    backdrop: menuBackdrop,
    links: menuLinks,
  } = refs.mobileMenu;

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
    lockScroll();
    closeMenuBtn.focus();
  };

  const closeMenu = (returnFocus = true) => {
    mobileMenu.classList.add('is-hidden');
    mobileMenu.setAttribute('aria-hidden', 'true');
    openMenuBtn.setAttribute('aria-expanded', 'false');
    unlockScroll();

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
