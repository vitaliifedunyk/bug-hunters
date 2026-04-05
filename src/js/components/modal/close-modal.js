import { unlockScroll } from '../../utils/scroll-lock.js';

export function closeModal(modalElement) {
  if (!modalElement) {
    return;
  }

  modalElement.classList.add('is-hidden');
  modalElement.setAttribute('aria-hidden', 'true');
  unlockScroll();
}
