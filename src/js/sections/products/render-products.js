import { refs } from '../../utils/refs.js';

function getProductsList(container) {
  return container || refs.products.list;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function formatPrice(price) {
  return `${Number(price || 0).toLocaleString('uk-UA')} грн`;
}

function getVisibleColors(colors) {
  if (!Array.isArray(colors)) {
    return [];
  }

  return [...new Set(colors)].slice(0, 3);
}

function isDarkColor(color) {
  const hex = color.replace('#', '');

  if (![3, 6].includes(hex.length)) {
    return false;
  }

  const normalizedHex = hex.length === 3
    ? hex.split('').map(char => `${char}${char}`).join('')
    : hex;

  const red = parseInt(normalizedHex.slice(0, 2), 16);
  const green = parseInt(normalizedHex.slice(2, 4), 16);
  const blue = parseInt(normalizedHex.slice(4, 6), 16);
  const brightness = (red * 299 + green * 587 + blue * 114) / 1000;

  return brightness < 128;
}

export function createProductCard(product) {
  const productId = escapeHtml(product?._id ?? product?.id ?? '');
  const productName = escapeHtml(product?.name ?? 'Без назви');
  const productImage = escapeHtml(product?.images?.[0] ?? '');
  const productPrice = formatPrice(product?.price);
  const colorsMarkup = getVisibleColors(product?.color)
    .map(color => {
      const safeColor = escapeHtml(color);
      const darkClass = isDarkColor(color) ? ' product-card__color--dark' : '';

      return `
        <li class="product-card__color${darkClass}" style="background-color: ${safeColor};">
          <span class="visually-hidden">Колір ${safeColor}</span>
        </li>
      `;
    })
    .join('');

  return `
    <li class="product-card" data-product-id="${productId}">
      <div class="product-card__image-wrapper">
        <img src="${productImage}" alt="${productName}" class="product-card__img" loading="lazy" />
      </div>

      <div class="product-card__content">
        <h3 class="product-card__title">${productName}</h3>

        <ul class="product-card__colors" aria-label="Доступні кольори">
          ${colorsMarkup}
        </ul>

        <p class="product-card__price">${productPrice}</p>
      </div>

      <button
        class="btn btn--secondary btn--small btn--full product-card__btn"
        type="button"
        data-product-details
        data-product-id="${productId}"
      >
        Детальніше
      </button>
    </li>
  `;
}

export function renderProducts(products, container) {
  const productsList = getProductsList(container);

  if (!productsList) {
    return;
  }

  productsList.innerHTML = products.map(createProductCard).join('');
}

export function appendProducts(products, container) {
  const productsList = getProductsList(container);

  if (!productsList) {
    return;
  }

  productsList.insertAdjacentHTML(
    'beforeend',
    products.map(createProductCard).join('')
  );
}

export function clearProducts(container) {
  const productsList = getProductsList(container);

  if (!productsList) {
    return;
  }

  productsList.innerHTML = '';
}
