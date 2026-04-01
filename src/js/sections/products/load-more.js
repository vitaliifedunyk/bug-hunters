export function shouldShowLoadMoreButton({ totalItems = 0, loadedItems = 0 }) {
  return loadedItems < totalItems;
}

export function updateLoadMoreButtonState(button, state = {}) {
  if (!button) return;

  const { totalItems = 0, loadedItems = 0 } = state;
  const isVisible = shouldShowLoadMoreButton({ totalItems, loadedItems });

  button.classList.toggle('is-hidden', !isVisible);
}
