export function getOrderValidationErrors(formData) {
  const errors = {};

  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Name must contain at least 2 characters.';
  }

  if (!formData.phone || formData.phone.trim().length < 8) {
    errors.phone = 'Phone number is invalid.';
  }

  return errors;
}

export function validateOrderForm(formData) {
  const errors = getOrderValidationErrors(formData);

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
