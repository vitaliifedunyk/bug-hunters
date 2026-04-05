export function closeModal(modalElement) {
  if (!modalElement) {
    return;
  }

  modalElement.classList.add('is-hidden');
  modalElement.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
}
