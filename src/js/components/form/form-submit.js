import { createOrder } from "../../api/orders-api";

export async function submitOrderForm(orderPayload) {
  return createOrder(orderPayload);
}
