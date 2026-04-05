export function validateOrderFormData({ name = '', phone = '' } = {}) {
  const errors = {};
  const clearName = name.trim();
  const clearPhone = phone.replace(/\D/g, '');

  if (!clearName) {
    errors.name = "Введіть ім'я";
  } else if (clearName.length < 2 || clearName.length > 30) {
    errors.name = "Ім'я має містити 2-30 літер";
  }

  if (!clearPhone) {
    errors.phone = 'Введіть номер телефону';
  } else if (clearPhone.length < 10 || clearPhone.length > 12) {
    errors.phone = 'Телефон має містити 10-12 цифр';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
