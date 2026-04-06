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
import { showError, showSuccess } from '../../services/notifications.js';
import { refs } from '../../utils/refs.js';

let isInitialized = false;

function clearErrors() {
  Object.values(refs.orderModal.fields).forEach(field => {
    field?.classList.remove('is-error');
  });

  Object.values(refs.orderModal.errors).forEach(errorElement => {
    if (!errorElement) {
      return;
    }

    errorElement.textContent = errorElement.dataset.defaultMessage || '';
    errorElement.style.opacity = '0';
  });
}

function showFieldError(fieldName, message) {
  if (!message) {
    return;
  }

  const field = refs.orderModal.fields[fieldName];
  const errorText = refs.orderModal.errors[fieldName];

  if (!(field instanceof HTMLElement)) {
    return;
  }

  field.classList.add('is-error');

  if (errorText) {
    errorText.textContent = message;
    errorText.style.opacity = '1';
  }
}

function showErrors(errors) {
  showFieldError('name', errors.name);
  showFieldError('phone', errors.phone);
  showFieldError('comment', errors.comment);
}

function setSubmitState(button, isSubmitting) {
  if (!button) {
    return;
  }

  button.disabled = isSubmitting;
  button.textContent = isSubmitting ? 'Надсилаємо...' : 'Надіслати заявку';
}

function getFormData(form = refs.orderModal.form) {
  if (!form) {
    return {
      name: '',
      phone: '',
      comment: '',
    };
  }

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
  const triggerButton = refs.orderModal.getTrigger(event.target);

  if (!triggerButton) {
    return;
  }

  event.preventDefault();
  openOrderModal(resolveOrderModalState(triggerButton));
}

function handleEscapeKey(event) {
  if (event.key === 'Escape' && refs.orderModal.root && !refs.orderModal.root.classList.contains('is-hidden')) {
    closeOrderModal();
  }
}

export function openOrderModal(modalState = {}) {
  if (!refs.orderModal.root) {
    return;
  }

  setOrderModalState({
    modelId: modalState.modelId || '',
    color: modalState.color || '',
    name: modalState.name || '',
  });

  openModal(refs.orderModal.root);
}

export function closeOrderModal({ resetForm = true } = {}) {
  if (!refs.orderModal.root) {
    return;
  }

  if (resetForm) {
    refs.orderModal.form?.reset();
  }

  clearErrors();
  resetOrderModalState();
  closeModal(refs.orderModal.root);
}

export function initOrderModal() {
  if (isInitialized) {
    return;
  }

  const {
    root: orderModal,
    closeButton: closeOrderModalBtn,
    form: orderForm,
    submitButton,
  } = refs.orderModal;

  if (!orderModal || !orderForm) {
    return;
  }

  isInitialized = true;

  Object.values(refs.orderModal.errors).forEach(errorElement => {
    if (!errorElement) {
      return;
    }

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
    clearErrors();

    const formData = getFormData(orderForm);
    const validationResult = validateOrderFormData(formData);

    if (!validationResult.isValid) {
      showErrors(validationResult.errors);
      return;
    }

    const modalState = getOrderModalState();

    if (!modalState.modelId || !modalState.color) {
      showError('Не вдалося визначити товар для замовлення. Відкрийте модалку товару ще раз.');
      return;
    }

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

      showSuccess('Дякуємо! Ваше замовлення прийнято.');

      closeOrderModal();
    } catch (error) {
      showError(error.response?.data?.message || 'Не вдалося оформити замовлення. Спробуйте ще раз.');
    } finally {
      hideLoader();
      setSubmitState(submitButton, false);
    }
  });
}
