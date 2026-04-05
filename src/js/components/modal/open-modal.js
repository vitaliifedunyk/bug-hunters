const DEFAULT_OPTIONS = {
  hiddenClass: 'is-hidden',
  bodyLockClass: 'no-scroll',
  lockScroll: true,
};

export function openModal(modalElement, options = {}) {
  if (!modalElement) {
    return;
  }

  const { hiddenClass, bodyLockClass, lockScroll } = {
    ...DEFAULT_OPTIONS,
    ...options,
  };

  modalElement.classList.remove(hiddenClass);
  modalElement.setAttribute('aria-hidden', 'false');

  if (lockScroll) {
    document.body.classList.add(bodyLockClass);
  }
}
