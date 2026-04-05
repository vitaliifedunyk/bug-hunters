const defaultState = {
  modelId: '',
  color: '',
  name: '',
};

let orderModalState = { ...defaultState };

export function setOrderModalState(data = {}) {
  orderModalState = {
    ...orderModalState,
    ...data,
  };
}

export function getOrderModalState() {
  return { ...orderModalState };
}

export function resetOrderModalState() {
  orderModalState = { ...defaultState };
}
