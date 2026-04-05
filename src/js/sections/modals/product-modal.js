import 'css-star-rating/css/star-rating.css';

import { getFurnitureById } from '../../api/furniture-api.js';
import { closeModal } from '../../components/modal/close-modal.js';
import { openModal } from '../../components/modal/open-modal.js';
import { hideLoader, showLoader } from '../../services/loader.js';
import { showError } from '../../services/notifications.js';
import { refs } from '../../utils/refs.js';
import { openOrderModal } from './order-modal.js';
import starRatingSpriteMarkup from '../../../images/icons/star-rating.icons.svg?raw';

const state = {
  product: null,
  selectedColor: '',
  mainImage: '',
};

let isInitialized = false;

function ensureStarRatingSprite() {
  if (refs.starRatingSprite || !refs.starRatingSpriteHost) {
    return;
  }

  refs.starRatingSpriteHost.insertAdjacentHTML(
    'beforeend',
    `<div data-star-rating-sprite aria-hidden="true">${starRatingSpriteMarkup}</div>`
  );
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
  if (!refs.productModal.thumbnails) {
    return;
  }

  refs.productModal.thumbnails.innerHTML = images
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
  if (!refs.productModal.colors) {
    return;
  }

  refs.productModal.colors.innerHTML = colors
    .map(color => {
      const isSelected = color === state.selectedColor;

      return `
        <button
          class="product-modal__color-btn ${isSelected ? 'is-selected' : ''}"
          type="button"
          data-product-color="${color}"
          aria-label="Обрати колір ${color}"
          aria-pressed="${isSelected}"
        >
          <span class="product-modal__color-swatch" style="background-color: ${color};" aria-hidden="true"></span>
        </button>
      `;
    })
    .join('');
}

function setMainImage(image) {
  if (!refs.productModal.mainImage) {
    return;
  }

  state.mainImage = image;

  if (image) {
    refs.productModal.mainImage.src = image;
  } else {
    refs.productModal.mainImage.removeAttribute('src');
  }

  refs.productModal.mainImage.alt = state.product?.name || 'Товар';

  refs.productModal.getThumbnailButtons().forEach(button => {
    button.classList.toggle('is-active', button.dataset.productThumbnail === image);
  });
}

function renderProduct(product) {
  const images = Array.isArray(product.images) ? product.images.filter(Boolean) : [];
  const visibleColors = getVisibleColors(product.color);

  state.product = product;
  state.selectedColor = visibleColors[0] || '';
  state.mainImage = images[0] || '';

  refs.productModal.title.textContent = product.name || 'Без назви';
  refs.productModal.category.textContent = product.category?.name || product.type || 'Меблі';
  refs.productModal.price.textContent = formatPrice(product.price);
  refs.productModal.rating.innerHTML = createRatingMarkup(product.rate);
  refs.productModal.description.textContent = product.description || 'Опис тимчасово відсутній.';
  refs.productModal.sizes.textContent = product.sizes || 'Не вказано';

  setMainImage(state.mainImage);
  renderThumbnails(images, state.mainImage);
  renderColors(visibleColors);
}

function handleOverlayClick(event) {
  if (event.target === refs.productModal.root) {
    closeProductModal();
  }
}

function handleInteractiveClick(event) {
  const thumbnailButton = refs.productModal.getThumbnailButton(event.target);
  if (thumbnailButton) {
    setMainImage(thumbnailButton.dataset.productThumbnail || '');
    return;
  }

  const colorButton = refs.productModal.getColorButton(event.target);
  if (colorButton) {
    state.selectedColor = colorButton.dataset.productColor || '';
    renderColors(getVisibleColors(state.product?.color));
    return;
  }

  const orderButton = refs.productModal.getOrderButton(event.target);
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
  if (event.key === 'Escape' && refs.productModal.root && !refs.productModal.root.classList.contains('is-hidden')) {
    closeProductModal();
  }
}

export function initProductModal() {
  if (isInitialized || !refs.productModal.root) {
    return;
  }

  isInitialized = true;
  ensureStarRatingSprite();

  refs.productModal.closeButton?.addEventListener('click', closeProductModal);
  refs.productModal.root.addEventListener('click', handleOverlayClick);
  refs.productModal.root.addEventListener('click', handleInteractiveClick);
  document.addEventListener('keydown', handleEscapeKey);
}

export async function openProductModal(productId) {
  if (!productId || !refs.productModal.root) {
    return;
  }

  showLoader();

  try {
    const product = await getFurnitureById(productId);
    renderProduct(product);
    openModal(refs.productModal.root);
  } catch (error) {
    showError(error.response?.data?.message || 'Не вдалося завантажити деталі товару.');
  } finally {
    hideLoader();
  }
}

export function closeProductModal() {
  if (!refs.productModal.root) {
    return;
  }

  closeModal(refs.productModal.root);
}
