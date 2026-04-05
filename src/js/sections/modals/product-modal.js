import 'css-star-rating/css/star-rating.css';

import { getFurnitureById } from '../../api/furniture-api.js';
import { closeModal } from '../../components/modal/close-modal.js';
import { openModal } from '../../components/modal/open-modal.js';
import { hideLoader, showLoader } from '../../services/loader.js';
import { showError } from '../../services/notifications.js';
import { openOrderModal } from './order-modal.js';
import starRatingSpriteMarkup from '../../../images/icons/star-rating.icons.svg?raw';

const refs = {
  overlay: document.querySelector('[data-product-modal]'),
  closeButton: document.querySelector('[data-product-modal-close]'),
  mainImage: document.querySelector('[data-product-modal-main-image]'),
  thumbnails: document.querySelector('[data-product-modal-thumbnails]'),
  title: document.querySelector('[data-product-modal-title]'),
  category: document.querySelector('[data-product-modal-category]'),
  price: document.querySelector('[data-product-modal-price]'),
  rating: document.querySelector('[data-product-modal-rating]'),
  colors: document.querySelector('[data-product-modal-colors]'),
  description: document.querySelector('[data-product-modal-description]'),
  sizes: document.querySelector('[data-product-modal-sizes]'),
  orderButton: document.querySelector('[data-product-modal-order]'),
};

const state = {
  product: null,
  selectedColor: '',
  mainImage: '',
};

let isInitialized = false;

function ensureStarRatingSprite() {
  if (document.getElementById('star-empty')) {
    return;
  }

  document.body.insertAdjacentHTML('afterbegin', starRatingSpriteMarkup);
}

function formatPrice(price) {
  return `${Number(price || 0).toLocaleString('uk-UA')} грн`;
}

function normalizeRating(rating) {
  const numericRating = Number(rating) || 0;

  if (numericRating >= 3.3 && numericRating <= 3.7) return 3.5;
  if (numericRating >= 3.8 && numericRating <= 4.2) return 4;

  return Math.max(0, Math.min(5, Math.round(numericRating * 2) / 2));
}

function createStarsMarkup() {
  return Array.from(
    { length: 5 },
    () => `
      <div class="star">
        <svg class="star-empty" aria-hidden="true">
          <use href="#star-empty"></use>
        </svg>
        <svg class="star-half" aria-hidden="true">
          <use href="#star-half"></use>
        </svg>
        <svg class="star-filled" aria-hidden="true">
          <use href="#star-filled"></use>
        </svg>
      </div>
    `
  ).join('');
}

function createRatingMarkup(rating) {
  const normalized = normalizeRating(rating);
  const wholePart = Math.floor(normalized);
  const ratingClasses = [
    'rating',
    'medium',
    'star-svg',
    'label-hidden',
    'direction-ltr',
    `value-${wholePart}`,
  ];

  if (normalized % 1 !== 0) {
    ratingClasses.push('half');
  }

  return `
    <div class="${ratingClasses.join(' ')}" aria-label="Рейтинг ${normalized} з 5">
      <div class="label-value">${normalized}</div>
      <div class="star-container">
        ${createStarsMarkup()}
      </div>
    </div>
  `;
}

function getVisibleColors(colors) {
  if (!Array.isArray(colors)) {
    return [];
  }

  return [...new Set(colors)].slice(0, 3);
}

function renderThumbnails(images, activeImage) {
  if (!refs.thumbnails) {
    return;
  }

  refs.thumbnails.innerHTML = images
    .map(image => {
      const isActive = image === activeImage;

      return `
        <button
          class="product-modal__thumbnail ${isActive ? 'is-active' : ''}"
          type="button"
          data-product-thumbnail="${image}"
          aria-label="Переглянути інше фото товару"
        >
          <img src="${image}" alt="${state.product?.name || 'Товар'}" loading="lazy" />
        </button>
      `;
    })
    .join('');
}

function renderColors(colors) {
  if (!refs.colors) {
    return;
  }

  refs.colors.innerHTML = colors
    .map(color => {
      const isSelected = color === state.selectedColor;

      return `
        <button
          class="product-modal__color-btn ${isSelected ? 'is-selected' : ''}"
          type="button"
          data-product-color="${color}"
          style="--swatch-color: ${color};"
          aria-label="Обрати колір ${color}"
          aria-pressed="${isSelected}"
        ></button>
      `;
    })
    .join('');
}

function setMainImage(image) {
  if (!refs.mainImage) {
    return;
  }

  state.mainImage = image;

  if (image) {
    refs.mainImage.src = image;
  } else {
    refs.mainImage.removeAttribute('src');
  }

  refs.mainImage.alt = state.product?.name || 'Товар';

  refs.thumbnails?.querySelectorAll('[data-product-thumbnail]').forEach(button => {
    button.classList.toggle('is-active', button.dataset.productThumbnail === image);
  });
}

function renderProduct(product) {
  const images = Array.isArray(product.images) ? product.images.filter(Boolean) : [];
  const visibleColors = getVisibleColors(product.color);

  state.product = product;
  state.selectedColor = visibleColors[0] || '';
  state.mainImage = images[0] || '';

  refs.title.textContent = product.name || 'Без назви';
  refs.category.textContent = product.category?.name || product.type || 'Меблі';
  refs.price.textContent = formatPrice(product.price);
  refs.rating.innerHTML = createRatingMarkup(product.rate);
  refs.description.textContent = product.description || 'Опис тимчасово відсутній.';
  refs.sizes.textContent = product.sizes || 'Не вказано';

  setMainImage(state.mainImage);
  renderThumbnails(images, state.mainImage);
  renderColors(visibleColors);
}

function handleOverlayClick(event) {
  if (event.target === refs.overlay) {
    closeProductModal();
  }
}

function handleInteractiveClick(event) {
  const thumbnailButton = event.target.closest('[data-product-thumbnail]');
  if (thumbnailButton) {
    setMainImage(thumbnailButton.dataset.productThumbnail || '');
    return;
  }

  const colorButton = event.target.closest('[data-product-color]');
  if (colorButton) {
    state.selectedColor = colorButton.dataset.productColor || '';
    renderColors(getVisibleColors(state.product?.color));
    return;
  }

  const orderButton = event.target.closest('[data-product-modal-order]');
  if (orderButton && state.product?._id && state.selectedColor) {
    closeProductModal();
    openOrderModal({
      modelId: state.product._id,
      color: state.selectedColor,
      name: state.product.name,
    });
  }
}

function handleEscapeKey(event) {
  if (event.key === 'Escape' && refs.overlay && !refs.overlay.classList.contains('is-hidden')) {
    closeProductModal();
  }
}

export function initProductModal() {
  if (isInitialized || !refs.overlay) {
    return;
  }

  isInitialized = true;
  ensureStarRatingSprite();

  refs.closeButton?.addEventListener('click', closeProductModal);
  refs.overlay.addEventListener('click', handleOverlayClick);
  refs.overlay.addEventListener('click', handleInteractiveClick);
  document.addEventListener('keydown', handleEscapeKey);
}

export async function openProductModal(productId) {
  if (!productId || !refs.overlay) {
    return;
  }

  showLoader();

  try {
    const product = await getFurnitureById(productId);
    renderProduct(product);
    openModal(refs.overlay);
  } catch (error) {
    showError(error.response?.data?.message || 'Не вдалося завантажити деталі товару.');
  } finally {
    hideLoader();
  }
}

export function closeProductModal() {
  if (!refs.overlay) {
    return;
  }

  closeModal(refs.overlay);
}
