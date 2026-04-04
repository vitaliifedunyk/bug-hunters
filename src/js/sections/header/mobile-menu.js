const DESKTOP_MEDIA_QUERY = '(min-width: 1440px)';

export function initMobileMenu() {
  const menu = document.querySelector('[data-mobile-menu]');
  const openButton = document.querySelector('[data-menu-open]');

  if (!menu || !openButton) {
    return;
  }

  const closeButton = menu.querySelector('[data-menu-close]');
  const backdrop = menu.querySelector('[data-menu-backdrop]');
  const navLinks = menu.querySelectorAll('[data-nav-link]');
  const desktopMediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);

  if (!closeButton || !backdrop) {
    return;
  }

  let isMenuOpen = false;
  let returnFocusElement = openButton;

  const syncMenuState = expanded => {
    menu.classList.toggle('is-hidden', !expanded);
    menu.setAttribute('aria-hidden', String(!expanded));
    openButton.setAttribute('aria-expanded', String(expanded));
    document.body.classList.toggle('no-scroll', expanded);
    isMenuOpen = expanded;
  };

  const handleDocumentKeydown = event => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  };

  const openMenu = () => {
    if (isMenuOpen || desktopMediaQuery.matches) {
      return;
    }

    returnFocusElement = document.activeElement instanceof HTMLElement ? document.activeElement : openButton;
    syncMenuState(true);
    document.addEventListener('keydown', handleDocumentKeydown);
    closeButton.focus();
  };

  function closeMenu({ shouldReturnFocus = true } = {}) {
    if (!isMenuOpen) {
      return;
    }

    syncMenuState(false);
    document.removeEventListener('keydown', handleDocumentKeydown);

    if (shouldReturnFocus && returnFocusElement instanceof HTMLElement) {
      returnFocusElement.focus();
    }
  }

  const handleDesktopBreakpointChange = event => {
    if (event.matches) {
      closeMenu({ shouldReturnFocus: false });
    }
  };

  openButton.addEventListener('click', openMenu);
  closeButton.addEventListener('click', () => closeMenu());
  backdrop.addEventListener('click', () => closeMenu());

  navLinks.forEach(link => {
    link.addEventListener('click', () => closeMenu({ shouldReturnFocus: false }));
  });

  desktopMediaQuery.addEventListener('change', handleDesktopBreakpointChange);
  syncMenuState(false);
}
