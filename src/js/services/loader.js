import { refs } from '../utils/refs.js';

function getLoader() {
  return refs.loader;
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
