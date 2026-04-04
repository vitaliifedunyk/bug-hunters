let loader = null;

function getLoader() {
  if (!loader) {
    loader = document.querySelector('.loader');
  }
  return loader;
}

export function showLoader() {
  const el = getLoader();
  if (!el) return;

  el.classList.add('is-visible');
}

export function hideLoader() {
  const el = getLoader();
  if (!el) return;

  el.classList.remove('is-visible');
}
