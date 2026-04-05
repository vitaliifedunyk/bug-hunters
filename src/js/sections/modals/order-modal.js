import { refs } from "../../utils/refs";

export function initOrderModal() {
  const { openOrderModalBtns, orderModal, closeOrderModalBtn, orderForm } = refs;

  if (!orderModal)
    return;

  if (openOrderModalBtns && openOrderModalBtns.length > 0) {
    openOrderModalBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        orderModal.classList.remove('is-hidden');
        document.body.classList.add('no-scroll');
      });
    });
  }

  closeOrderModalBtn?.addEventListener('click', closeModal);

  orderModal.addEventListener('click', (e) => {
    if (e.target === orderModal) closeModal();
  });

  orderForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    console.log("Відправлено замовлення від:", formData.get('user-name')); 
    
    e.currentTarget.reset();
    closeModal();
    alert('Дякуємо! Ваше замовлення прийнято.');
  });
}

function closeModal() {
  refs.orderModal.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
}