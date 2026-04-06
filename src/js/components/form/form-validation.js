export function validateOrderFormData({
  name = '',
  phone = '',
  comment = '',
} = {}) {
  const errors = {};
  const clearName = name.trim();
  const clearPhone = phone.replace(/\D/g, '');
  const clearComment = comment.trim();

  if (!clearName) {
    errors.name = "Введіть ім'я";
  } else if (clearName.length < 2 || clearName.length > 64) {
    errors.name = '2-64 символи';
  }

  // Accept international phone numbers without forcing a specific country code.
  if (!clearPhone) {
    errors.phone = 'Введіть телефон';
  } else if (clearPhone.length < 10 || clearPhone.length > 15) {
    errors.phone = '10-15 цифр';
  }

  if (clearComment && (clearComment.length < 5 || clearComment.length > 256)) {
    errors.comment = '5-256 символів';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
