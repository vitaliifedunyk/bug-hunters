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
    errors.name = "Ім'я має містити 2-64 символи";
  }

  if (!clearPhone) {
    errors.phone = 'Введіть номер телефону';
  } else if (clearPhone.length !== 12) {
    errors.phone = 'Телефон має містити рівно 12 цифр';
  }

  if (clearComment && (clearComment.length < 5 || clearComment.length > 256)) {
    errors.comment = 'Коментар має містити від 5 до 256 символів';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
