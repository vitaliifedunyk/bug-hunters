export function renderCategoryFilters(categories = []) {
  return categories
    .map(
      category => `
        <li class="filters__item">
          <button
            class="filters__btn"
            type="button"
            data-category-filter="${category}"
          >
            ${category}
          </button>
        </li>
      `
    )
    .join('');
}

export function getSelectedCategory(event) {
  const button = event.target.closest('[data-category-filter]');

  if (!button) return '';

  return button.dataset.categoryFilter;
}

export function setActiveCategoryButton(container, activeCategory) {
  const buttons = container.querySelectorAll('[data-category-filter]');

  buttons.forEach(button => {
    const isActive = button.dataset.categoryFilter === activeCategory;
    button.classList.toggle('is-active', isActive);
  });
}
