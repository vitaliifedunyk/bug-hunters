import { submitOrderForm } from "../../components/form/form-submit";
import { validateOrderFormData } from "../../components/form/form-validation";
import {
  getOrderModalState,
  resetOrderModalState,
  setOrderModalState,
} from "../../components/modal/modal-state";
import { refs } from "../../utils/refs";

export function initOrderModal() {
  const { orderModal, closeOrderModalBtn, orderForm } = refs;
  const openOrderModalBtns = document.querySelectorAll('[data-order-modal-open], .order-btn');

  if (!orderModal || !orderForm) {
    return;
  }

  if (openOrderModalBtns && openOrderModalBtns.length > 0) {
    openOrderModalBtns.forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        openModal(resolveOrderModalState(btn));
      });
    });
  }

  closeOrderModalBtn?.addEventListener('click', closeModal);

  orderModal.addEventListener('click', e => {
    if (e.target === orderModal) closeModal();
  });

  orderForm.addEventListener('submit', async e => {
    e.preventDefault();
    clearErrors(orderForm);

    const formData = getFormData(orderForm);
    const validationResult = validateOrderFormData(formData);

    if (!validationResult.isValid) {
      showErrors(orderForm, validationResult.errors);
      return;
    }

    const modalState = getOrderModalState();

    if (!modalState.modelId || !modalState.color) {
      alert('Не вдалося визначити товар для замовлення. Відкрийте модалку товару ще раз.');
      return;
    }

    const submitButton = e.currentTarget.querySelector('[type="submit"]');

    try {
      setSubmitState(submitButton, true);

      await submitOrderForm({
        ...formData,
        modelId: modalState.modelId,
        color: modalState.color,
      });

      orderForm.reset();
      clearErrors(orderForm);
      closeModal();
      alert('Дякуємо! Ваше замовлення прийнято.');
    } catch (error) {
      const message = error.response?.data?.message || 'Не вдалося оформити замовлення. Спробуйте ще раз.';
      alert(message);
    } finally {
      setSubmitState(submitButton, false);
    }
  });
}

function openModal(modalState = {}) {
  setOrderModalState(modalState);
  refs.orderModal.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');
}

function closeModal() {
  refs.orderForm?.reset();
  clearErrors(refs.orderForm);
  resetOrderModalState();
  refs.orderModal.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
}

function resolveOrderModalState(triggerButton) {
  const modalState = {
    modelId: triggerButton.dataset.modelId || '',
    color: triggerButton.dataset.color || '',
    name: triggerButton.dataset.productName || '',
  };

  const selectedColorInput = document.querySelector('#product-modal input[name="color"]:checked');

  if (!modalState.color && selectedColorInput) {
    const colorCircle = selectedColorInput.nextElementSibling;
    modalState.color = colorCircle?.style.backgroundColor || selectedColorInput.value || '';
  }

  return modalState;
}

function getFormData(form) {
  const formData = new FormData(form);

  return {
    name: String(formData.get('name') || '').trim(),
    phone: String(formData.get('phone') || '').replace(/\D/g, ''),
    comment: String(formData.get('comment') || '').trim(),
  };
}

function showErrors(form, errors) {
  showFieldError(form, 'name', errors.name);
  showFieldError(form, 'phone', errors.phone);
}

function showFieldError(form, fieldName, message) {
  if (!message) {
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

function clearErrors(form) {
  if (!form) {
    return;
  }

  const fields = form.querySelectorAll('.form-input, .form-textarea');
  const errorElements = form.querySelectorAll('.form-error');

  fields.forEach(field => field.classList.remove('is-error'));
  errorElements.forEach(errorElement => {
    errorElement.style.opacity = '0';
  });
}

function setSubmitState(button, isSubmitting) {
  if (!button) {
    return;
  }

  button.disabled = isSubmitting;
  button.textContent = isSubmitting ? 'Надсилаємо...' : 'Надіслати заявку';
}
