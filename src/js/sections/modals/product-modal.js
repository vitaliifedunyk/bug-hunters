import { fetchFurnitureById } from '../../api/furniture-api.js';
import { refs } from '../../utils/refs.js';
import { openModal } from '../../components/modal/open-modal.js';
import { closeModal } from '../../components/modal/close-modal.js';
import {
  setCurrentFurniture,
  setSelectedColor,
  clearSelectedColor,
} from '../../components/modal/modal-state.js';
import { openOrderModal } from './order-modal.js';
import { showLoader, hideLoader } from '../../services/loader.js';
import { showErrorMessage } from '../../services/notifications.js';

function renderProductModal(product) {
  // Тут команда вставляє реальний рендер:
  // title, image, category, price, description, colors, sizes etc.

  if (!refs.productModalTitle) return;

  refs.productModalTitle.textContent = product.name || 'Furniture item';
}

function handleColorSelect(event) {
  const colorButton = event.target.closest('[data-color-value]');

  if (!colorButton) return;

  const colorValue = colorButton.dataset.colorValue;
  setSelectedColor(colorValue);

  // TODO:
  // 1. прибрати active у всіх кнопок кольору
  // 2. додати active на поточну кнопку
}

async function openProductModalById(id) {
  try {
    showLoader();
    const product = await fetchFurnitureById(id);

    setCurrentFurniture(product);
    clearSelectedColor();
    renderProductModal(product);
    openModal(refs.productModal);
  } catch {
    showErrorMessage('Failed to load product details.');
  } finally {
    hideLoader();
  }
}

function handleProductCardClick(event) {
  const trigger = event.target.closest('[data-open-product-modal]');

  if (!trigger) return;

  const { productId } = trigger.dataset;

  if (!productId) return;

  openProductModalById(productId);
}

function handleOpenOrderModal() {
  closeModal(refs.productModal);
  openOrderModal();
}

export function initProductModal() {
  if (refs.productsList) {
    refs.productsList.addEventListener('click', handleProductCardClick);
  }

  if (refs.productModalColors) {
    refs.productModalColors.addEventListener('click', handleColorSelect);
  }

  if (refs.openOrderModalBtn) {
    refs.openOrderModalBtn.addEventListener('click', handleOpenOrderModal);
  }

  refs.productModalCloseBtns.forEach(button => {
    button.addEventListener('click', () => closeModal(refs.productModal));
  });
}
