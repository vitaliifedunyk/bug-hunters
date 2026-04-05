
import { modalState } from './modal-state.js';

const productBackdrop = document.querySelector('#product-modal .backdrop');
const productModalSection = document.querySelector('#product-modal');
const productList = document.querySelector('.products-list'); // контейнер з товарами

productList.addEventListener('click', (event) => {
  const btn = event.target.closest('.product-card__btn');
  if (!btn) return; 

  const card = btn.closest('.product-card');

  const title = card.querySelector('.product-card__title').textContent.trim();
  const price = card.querySelector('.product-card__price').textContent.trim();
  
  const modalTitle = document.querySelector('#product-modal .product-title');
  const modalPrice = document.querySelector('#product-modal .product-price');

  modalTitle.textContent = title;
  modalPrice.textContent = price;

  productModalSection.classList.remove('none'); 
  productBackdrop.classList.remove('is-hidden'); 

  modalState.currentFurniture = { title, price };
  modalState.selectedColor = null;

  console.log('currentFurniture:', modalState.currentFurniture);
});

const colorInputs = document.querySelectorAll('#product-modal input[name="color"]');
colorInputs.forEach(input => {
  input.addEventListener('change', (e) => {
    modalState.selectedColor = e.target.value;
    console.log('selectedColor:', modalState.selectedColor);
  });
});