import { createOrder } from '../../api/orders-api.js';

export async function submitOrderForm(payload) {
  // Тут тільки відправка форми на бекенд
  // Валідація має бути окремо у form-validation.js
  return createOrder(payload);
}
