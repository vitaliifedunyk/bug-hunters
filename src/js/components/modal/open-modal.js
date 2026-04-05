import { lockScroll } from '../../utils/scroll-lock.js';

export function openModal(modalElement) {
  if (!modalElement) {
    return;
  }

  modalElement.classList.remove('is-hidden');
  modalElement.setAttribute('aria-hidden', 'false');
  lockScroll();
}
