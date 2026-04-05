
const productBackdrop = document.querySelector('#product-modal .backdrop');
const closeBtn = document.querySelector('#product-modal .modal-close-btn');

closeBtn.addEventListener('click', () => {
  productBackdrop.classList.add('is-hidden');
});
