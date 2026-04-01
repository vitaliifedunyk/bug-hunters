import { refs } from '../../utils/refs.js';
import { openModal } from '../../components/modal/open-modal.js';
import { closeModal } from '../../components/modal/close-modal.js';
import {
  getCurrentFurniture,
  getSelectedColor,
} from '../../components/modal/modal-state.js';
import { validateOrderForm } from '../../components/form/form-validation.js';
import { submitOrderForm } from '../../components/form/form-submit.js';
import { showLoader, hideLoader } from '../../services/loader.js';
import {
  showErrorMessage,
  showSuccessMessage,
} from '../../services/notifications.js';

function collectOrderFormData(formElement) {
  const formData = new FormData(formElement);

  return {
    name: formData.get('name')?.trim() || '',
    phone: formData.get('phone')?.trim() || '',
    comment: formData.get('comment')?.trim() || '',
  };
}

async function handleOrderSubmit(event) {
  event.preventDefault();

  const formElement = event.currentTarget;
  const baseData = collectOrderFormData(formElement);
  const furniture = getCurrentFurniture();
  const selectedColor = getSelectedColor();

  const validationResult = validateOrderForm(baseData);

  if (!validationResult.isValid) {
    showErrorMessage('Please fill in all required fields correctly.');
    return;
  }

  const payload = {
    ...baseData,
    furnitureId: furniture?.id,
    color: selectedColor,
  };

  try {
    showLoader();
    await submitOrderForm(payload);
    showSuccessMessage('Your order has been sent successfully.');
    formElement.reset();
    closeModal(refs.orderModal);
  } catch {
    showErrorMessage('Failed to send order. Please try again.');
  } finally {
    hideLoader();
  }
}

export function openOrderModal() {
  openModal(refs.orderModal);
}

export function initOrderModal() {
  if (!refs.orderModal) return;

  refs.orderModalCloseBtns.forEach(button => {
    button.addEventListener('click', () => closeModal(refs.orderModal));
  });

  if (refs.orderForm) {
    refs.orderForm.addEventListener('submit', handleOrderSubmit);
  }
}
