import iziToast from 'izitoast';

import { submitOrderForm } from '../../components/form/form-submit.js';
import { validateOrderFormData } from '../../components/form/form-validation.js';
import { closeModal } from '../../components/modal/close-modal.js';
import { openModal } from '../../components/modal/open-modal.js';
import {
  getOrderModalState,
  resetOrderModalState,
  setOrderModalState,
} from '../../components/modal/modal-state.js';
import { hideLoader, showLoader } from '../../services/loader.js';
import { refs } from '../../utils/refs.js';

let isInitialized = false;

function clearErrors(form) {
  if (!form) {
    return;
  }

  const fields = form.querySelectorAll('.form-input, .form-textarea');
  const errorElements = form.querySelectorAll('.form-error');

  fields.forEach(field => field.classList.remove('is-error'));
  errorElements.forEach(errorElement => {
    errorElement.textContent = errorElement.dataset.defaultMessage || '';
    errorElement.style.opacity = '0';
  });
}

function showFieldError(form, fieldName, message) {
  if (!message || !form) {
    return;
  }

  const field = form.elements.namedItem(fieldName);

  if (!(field instanceof HTMLElement)) {
    return;
  }

  field.classList.add('is-error');

  const formField = field.closest('.form-field');
  const errorText = formField?.querySelector('.form-error');

  if (errorText) {
    errorText.textContent = message;
    errorText.style.opacity = '1';
  }
}

function showErrors(form, errors) {
  showFieldError(form, 'name', errors.name);
  showFieldError(form, 'phone', errors.phone);
  showFieldError(form, 'comment', errors.comment);
}

function setSubmitState(button, isSubmitting) {
  if (!button) {
    return;
  }

  button.disabled = isSubmitting;
  button.textContent = isSubmitting ? 'Надсилаємо...' : 'Надіслати заявку';
}

function getFormData(form) {
  const formData = new FormData(form);

  return {
    name: String(formData.get('name') || '').trim(),
    phone: String(formData.get('phone') || '').replace(/\D/g, ''),
    comment: String(formData.get('comment') || '').trim(),
  };
}

function resolveOrderModalState(triggerButton) {
  return {
    modelId: triggerButton.dataset.modelId || '',
    color: triggerButton.dataset.color || '',
    name: triggerButton.dataset.productName || '',
  };
}

function handleDocumentClick(event) {
  const triggerButton = event.target.closest('[data-order-modal-open]');

  if (!triggerButton) {
    return;
  }

  event.preventDefault();
  openOrderModal(resolveOrderModalState(triggerButton));
}

function handleEscapeKey(event) {
  if (event.key === 'Escape' && refs.orderModal && !refs.orderModal.classList.contains('is-hidden')) {
    closeOrderModal();
  }
}

export function openOrderModal(modalState = {}) {
  if (!refs.orderModal) {
    return;
  }

  setOrderModalState({
    modelId: modalState.modelId || '',
    color: modalState.color || '',
    name: modalState.name || '',
  });

  openModal(refs.orderModal);
}

export function closeOrderModal({ resetForm = true } = {}) {
  if (!refs.orderModal) {
    return;
  }

  if (resetForm) {
    refs.orderForm?.reset();
  }

  clearErrors(refs.orderForm);
  resetOrderModalState();
  closeModal(refs.orderModal);
}

export function initOrderModal() {
  if (isInitialized) {
    return;
  }

  const { orderModal, closeOrderModalBtn, orderForm } = refs;

  if (!orderModal || !orderForm) {
    return;
  }

  isInitialized = true;

  orderForm.querySelectorAll('.form-error').forEach(errorElement => {
    errorElement.dataset.defaultMessage = errorElement.textContent;
  });

  document.addEventListener('click', handleDocumentClick);
  document.addEventListener('keydown', handleEscapeKey);

  closeOrderModalBtn?.addEventListener('click', () => closeOrderModal());

  orderModal.addEventListener('click', event => {
    if (event.target === orderModal) {
      closeOrderModal();
    }
  });

  orderForm.addEventListener('submit', async event => {
    event.preventDefault();
    clearErrors(orderForm);

    const formData = getFormData(orderForm);
    const validationResult = validateOrderFormData(formData);

    if (!validationResult.isValid) {
      showErrors(orderForm, validationResult.errors);
      return;
    }

    const modalState = getOrderModalState();

    if (!modalState.modelId || !modalState.color) {
      iziToast.error({
        title: 'Помилка',
        message: 'Не вдалося визначити товар для замовлення. Відкрийте модалку товару ще раз.',
        position: 'topRight',
      });
      return;
    }

    const submitButton = event.currentTarget.querySelector('[type="submit"]');
    const payload = {
      name: formData.name,
      phone: formData.phone,
      modelId: modalState.modelId,
      color: modalState.color,
    };

    if (formData.comment) {
      payload.comment = formData.comment;
    }

    try {
      setSubmitState(submitButton, true);
      showLoader();

      await submitOrderForm(payload);

      iziToast.success({
        title: 'Успіх',
        message: 'Дякуємо! Ваше замовлення прийнято.',
        position: 'topRight',
      });

      closeOrderModal();
    } catch (error) {
      iziToast.error({
        title: 'Помилка',
        message: error.response?.data?.message || 'Не вдалося оформити замовлення. Спробуйте ще раз.',
        position: 'topRight',
      });
    } finally {
      hideLoader();
      setSubmitState(submitButton, false);
    }
  });
}
