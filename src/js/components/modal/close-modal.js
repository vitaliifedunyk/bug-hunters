const DEFAULT_OPTIONS = {
  hiddenClass: 'is-hidden',
  bodyLockClass: 'no-scroll',
  lockScroll: true,
};

export function closeModal(modalElement, options = {}) {
  if (!modalElement) {
    return;
  }

  const { hiddenClass, bodyLockClass, lockScroll } = {
    ...DEFAULT_OPTIONS,
    ...options,
  };

  modalElement.classList.add(hiddenClass);
  modalElement.setAttribute('aria-hidden', 'true');

  if (lockScroll) {
    document.body.classList.remove(bodyLockClass);
  }
}
