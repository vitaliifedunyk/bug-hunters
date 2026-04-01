export function createProductCardMarkup(product) {
  return `
    <li class="products__item">
      <article class="product-card" data-product-id="${product.id}">
        <img
          class="product-card__image"
          src="${product.image || ''}"
          alt="${product.name || 'Furniture item'}"
        />
        <div class="product-card__content">
          <h3 class="product-card__title">${product.name || 'Furniture item'}</h3>
          <p class="product-card__price">${product.price || ''}</p>
          <button
            class="product-card__btn"
            type="button"
            data-open-product-modal
            data-product-id="${product.id}"
          >
            Детальніше
          </button>
        </div>
      </article>
    </li>
  `;
}

export function renderProductsList(container, products = []) {
  if (!container) return;

  container.innerHTML = products.map(createProductCardMarkup).join('');
}

export function appendProductsList(container, products = []) {
  if (!container) return;

  container.insertAdjacentHTML(
    'beforeend',
    products.map(createProductCardMarkup).join('')
  );
}

export function clearProductsList(container) {
  if (!container) return;

  container.innerHTML = '';
}
