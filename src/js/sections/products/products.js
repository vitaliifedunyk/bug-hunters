import iconsSprite from '../../../images/icons/icons.svg';

import { getCategories } from '../../api/categories-api.js';
import { getFurnitures } from '../../api/furniture-api.js';
import { hideLoader, showLoader } from '../../services/loader.js';
import { showError } from '../../services/notifications.js';
import { refs } from '../../utils/refs.js';
import { initProductModal, openProductModal } from '../modals/product-modal.js';
import {
  ALL_PRODUCTS_CATEGORY_ID,
  ALL_PRODUCTS_CATEGORY_NAME,
  getDefaultCategories,
  initCategoryFilters,
  normalizeCategories,
} from './filter-products.js';
import { LoadMoreBtn } from './load-more.js';
import {
  appendProducts,
  clearProducts,
  renderProducts,
} from './render-products.js';

const MOBILE_MEDIA_QUERY = '(max-width: 767.98px)';

const loadMoreBtn = new LoadMoreBtn({
  button: refs.products.loadMoreButton,
  container: refs.products.loadMoreContainer,
  isHidden: true,
});

const state = {
  activeCategoryId: ALL_PRODUCTS_CATEGORY_ID,
  activeCategoryName: ALL_PRODUCTS_CATEGORY_NAME,
  currentPage: 1,
  limit: 8,
  totalItems: 0,
  totalPages: 0,
  selectedProductId: '',
  selectedColor: '',
};

const mobileMediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY);

let isInitialized = false;

function isMobileViewport() {
  return mobileMediaQuery.matches;
}

function getCategoryParam() {
  return state.activeCategoryId === ALL_PRODUCTS_CATEGORY_ID
    ? ''
    : state.activeCategoryId;
}

function setLoadingState(isLoading) {
  if (isLoading) {
    showLoader();
    loadMoreBtn.disable();
    return;
  }

  hideLoader();
  loadMoreBtn.enable();
}

function renderEmptyState(message) {
  if (!refs.products.list) {
    return;
  }

  refs.products.list.innerHTML = `
    <li class="products-list__empty">
      <p>${message}</p>
    </li>
  `;
}

function renderPagination() {
  if (!refs.products.pagination) {
    return;
  }

  if (isMobileViewport() || state.totalPages <= 1 || state.totalItems === 0) {
    refs.products.pagination.innerHTML = '';
    refs.products.pagination.classList.add('is-hidden');
    return;
  }

  const pageButtonsMarkup = Array.from({ length: state.totalPages }, (_, index) => {
    const page = index + 1;
    const isActive = page === state.currentPage;

    return `
      <button
        class="products-pagination__button ${isActive ? 'is-active' : ''}"
        type="button"
        data-products-page="${page}"
        aria-label="Сторінка ${page}"
        aria-current="${isActive ? 'page' : 'false'}"
      >
        ${page}
      </button>
    `;
  }).join('');

  refs.products.pagination.innerHTML = `
    <button
      class="products-pagination__button products-pagination__button--arrow btn-prev"
      type="button"
      data-products-page="${Math.max(1, state.currentPage - 1)}"
      aria-label="Попередня сторінка"
      ${state.currentPage === 1 ? 'disabled' : ''}
    >
      <svg class="btn-icon" width="20" height="20" aria-hidden="true">
        <use href="${iconsSprite}#icon-left-arrow-alt"></use>
      </svg>
    </button>
    ${pageButtonsMarkup}
    <button
      class="products-pagination__button products-pagination__button--arrow btn-next"
      type="button"
      data-products-page="${Math.min(state.totalPages, state.currentPage + 1)}"
      aria-label="Наступна сторінка"
      ${state.currentPage === state.totalPages ? 'disabled' : ''}
    >
      <svg class="btn-icon" width="20" height="20" aria-hidden="true">
        <use href="${iconsSprite}#icon-right-arrow-alt"></use>
      </svg>
    </button>
  `;

  refs.products.pagination.classList.remove('is-hidden');
}

function updateLoadMoreState() {
  if (!isMobileViewport() || state.totalItems === 0) {
    loadMoreBtn.hide();
    return;
  }

  loadMoreBtn.checkHasMore(state.currentPage, state.totalPages);
}

function updateControls() {
  renderPagination();
  updateLoadMoreState();
}

function updatePaginationState(data) {
  state.currentPage = Number(data.page) || 1;
  state.totalItems = Number(data.totalItems) || 0;
  state.totalPages = Math.max(1, Math.ceil(state.totalItems / state.limit));
}

async function fetchProducts({ page = 1, append = false } = {}) {
  setLoadingState(true);

  try {
    const data = await getFurnitures({
      page,
      limit: state.limit,
      category: getCategoryParam(),
    });

    updatePaginationState(data);

    if (!data.furnitures.length) {
      clearProducts(refs.products.list);
      renderEmptyState('За цією категорією товарів поки немає.');
      updateControls();
      return;
    }

    if (append) {
      appendProducts(data.furnitures, refs.products.list);
    } else {
      renderProducts(data.furnitures, refs.products.list);
    }

    updateControls();
  } catch (error) {
    clearProducts(refs.products.list);
    renderEmptyState('Не вдалося завантажити товари. Спробуйте ще раз.');

    showError(error.response?.data?.message || 'Не вдалося завантажити список меблів.');

    state.totalItems = 0;
    state.totalPages = 0;
    updateControls();
  } finally {
    setLoadingState(false);
  }
}

async function bootstrapCategories() {
  showLoader();

  try {
    const categories = normalizeCategories(await getCategories());

    initCategoryFilters(refs.categories.list, categories, async category => {
      state.activeCategoryId = category.id;
      state.activeCategoryName = category.name;
      state.currentPage = 1;

      clearProducts(refs.products.list);
      await fetchProducts({ page: 1, append: false });
    });
  } catch (error) {
    initCategoryFilters(refs.categories.list, getDefaultCategories(), async category => {
      state.activeCategoryId = category.id;
      state.activeCategoryName = category.name;
      state.currentPage = 1;
      clearProducts(refs.products.list);
      await fetchProducts({ page: 1, append: false });
    });

    showError(error.response?.data?.message || 'Не вдалося завантажити категорії. Показуємо всі товари.');
  } finally {
    hideLoader();
  }
}

async function handleLoadMoreClick() {
  if (!isMobileViewport() || state.currentPage >= state.totalPages) {
    return;
  }

  const nextPage = state.currentPage + 1;
  await fetchProducts({ page: nextPage, append: true });
}

async function handlePaginationClick(event) {
  const pageButton = refs.products.getPaginationButton(event.target);

  if (!pageButton || pageButton.disabled || isMobileViewport()) {
    return;
  }

  const targetPage = Number(pageButton.dataset.productsPage);

  if (!targetPage || targetPage === state.currentPage) {
    return;
  }

  await fetchProducts({ page: targetPage, append: false });
}

async function handleProductsClick(event) {
  const detailsButton = refs.products.getDetailsButton(event.target);

  if (!detailsButton) {
    return;
  }

  const productId = detailsButton.dataset.productId;

  if (!productId) {
    return;
  }

  state.selectedProductId = productId;
  await openProductModal(productId);
}

async function handleViewportChange() {
  state.currentPage = 1;
  clearProducts(refs.products.list);
  await fetchProducts({ page: 1, append: false });
}

export async function initProducts() {
  if (
    isInitialized ||
    !refs.categories.list ||
    !refs.products.list ||
    !refs.products.pagination
  ) {
    return;
  }

  isInitialized = true;

  initProductModal();

  refs.products.list.addEventListener('click', handleProductsClick);
  refs.products.pagination.addEventListener('click', handlePaginationClick);
  loadMoreBtn.button?.addEventListener('click', handleLoadMoreClick);
  mobileMediaQuery.addEventListener('change', handleViewportChange);

  await bootstrapCategories();
  await fetchProducts({ page: 1, append: false });
}
