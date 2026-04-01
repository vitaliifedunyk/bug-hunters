import { refs } from '../utils/refs.js';

export function showLoader() {
  refs.loader?.classList.remove('is-hidden');
}

export function hideLoader() {
  refs.loader?.classList.add('is-hidden');
}
