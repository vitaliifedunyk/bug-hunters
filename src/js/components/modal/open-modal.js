export function openModal(modalElement) {
  if (!modalElement) return;

  modalElement.classList.remove('is-hidden');
  modalElement.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
}
