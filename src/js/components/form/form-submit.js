import { createOrder } from '../../api/orders-api.js';

export async function submitOrderForm(orderPayload) {
  return createOrder(orderPayload);
}
