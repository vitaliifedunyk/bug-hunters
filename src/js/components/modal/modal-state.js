const modalState = {
  currentFurniture: null,
  selectedColor: null,
};

export function setCurrentFurniture(furniture) {
  modalState.currentFurniture = furniture;
}

export function getCurrentFurniture() {
  return modalState.currentFurniture;
}

export function clearCurrentFurniture() {
  modalState.currentFurniture = null;
}

export function setSelectedColor(color) {
  modalState.selectedColor = color;
}

export function getSelectedColor() {
  return modalState.selectedColor;
}

export function clearSelectedColor() {
  modalState.selectedColor = null;
}
