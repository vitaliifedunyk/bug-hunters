import { fetchCategories } from '../../api/categories-api.js';
import { fetchFurniture } from '../../api/furniture-api.js';
import { refs } from '../../utils/refs.js';
import { PRODUCTS_PER_PAGE } from '../../utils/constants.js';
import { showLoader, hideLoader } from '../../services/loader.js';
import { showErrorMessage } from '../../services/notifications.js';
import {
  renderProductsList,
  appendProductsList,
  clearProductsList,
} from './render-products.js';
import {
  renderCategoryFilters,
  getSelectedCategory,
  setActiveCategoryButton,
} from './filter-products.js';
import { updateLoadMoreButtonState } from './load-more.js';

const productsState = {
  page: 1,
  limit: PRODUCTS_PER_PAGE,
  selectedCategory: '',
  totalItems: 0,
  loadedItems: 0,
};

async function loadCategories() {
  const categories = await fetchCategories();

  if (!refs.categoriesList) return;

  refs.categoriesList.innerHTML = renderCategoryFilters(categories);
}

async function loadProducts({ reset = false } = {}) {
  const data = await fetchFurniture({
    page: productsState.page,
    limit: productsState.limit,
    category: productsState.selectedCategory,
  });

  // Підлаштуєш під реальну відповідь бекенда
  const items = data.items || data.data || [];
  const total = data.total || items.length;

  if (reset) {
    clearProductsList(refs.productsList);
    renderProductsList(refs.productsList, items);
  } else {
    appendProductsList(refs.productsList, items);
  }

  productsState.totalItems = total;
  productsState.loadedItems += items.length;

  updateLoadMoreButtonState(refs.loadMoreBtn, {
    totalItems: productsState.totalItems,
    loadedItems: productsState.loadedItems,
  });
}

async function handleCategoryClick(event) {
  const selectedCategory = getSelectedCategory(event);

  if (!selectedCategory) return;

  productsState.selectedCategory = selectedCategory;
  productsState.page = 1;
  productsState.loadedItems = 0;

  setActiveCategoryButton(refs.categoriesList, selectedCategory);

  try {
    showLoader();
    await loadProducts({ reset: true });
  } catch {
    showErrorMessage('Failed to filter products.');
  } finally {
    hideLoader();
  }
}

async function handleLoadMoreClick() {
  productsState.page += 1;

  try {
    showLoader();
    await loadProducts();
  } catch {
    showErrorMessage('Failed to load more products.');
  } finally {
    hideLoader();
  }
}

export async function initProductsSection() {
  if (!refs.productsList) return;

  try {
    showLoader();

    await loadCategories();
    await loadProducts({ reset: true });

    refs.categoriesList?.addEventListener('click', handleCategoryClick);
    refs.loadMoreBtn?.addEventListener('click', handleLoadMoreClick);
  } catch {
    showErrorMessage('Failed to initialize products section.');
  } finally {
    hideLoader();
  }
}
