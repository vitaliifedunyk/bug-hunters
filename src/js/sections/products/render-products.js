const productsList = document.querySelector('.products-list');

export function createProductCard(product) {
  return `
              <li class="product-card">

      <img src="${product.image}" alt="${product.title}" class="product-card__img" />

      <div class="product-card__content">
        <h3 class="product-card__title">
          ${product.title}
        </h3>

        <ul class="product-card__colors" aria-label="Доступні кольори">
          ${product.colors
            .map(
              color => `
                <li class="product-card__color" style="background-color: ${color};">
                  <span class="visually-hidden">Колір</span>
                </li>
              `
            )
            .join("")}
        </ul>

        <p class="product-card__price">
          ${product.price} грн
        </p>
      </div>

      <button class="product-card__btn" type="button">
        Детальніше
      </button>

    </li>
  `
}

export function renderProducts(products) {
  const markup = products.map(createProductCard).join("");
  productsList.innerHTML = markup;
}

export function appendProducts(products) {
  const markup = products.map(createProductCard).join("");
  productsList.insertAdjacentHTML("beforeend", markup);
}

export function clearProducts() {
  productsList.innerHTML = "";
}