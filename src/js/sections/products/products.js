import iziToast from 'izitoast';
import iconsSprite from '../../../images/icons/icons.svg';

import { getCategories } from '../../api/categories-api.js';
import { getFurnitures } from '../../api/furniture-api.js';
import { hideLoader, showLoader } from '../../services/loader.js';
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

const refs = {
  categoriesList: document.querySelector('[data-categories-list]'),
  productsList: document.querySelector('[data-products-list]'),
  pagination: document.querySelector('[data-products-pagination]'),
};

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-load-more]',
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
  if (!refs.productsList) {
    return;
  }

  refs.productsList.innerHTML = `
    <li class="products-list__empty">
      <p>${message}</p>
    </li>
  `;
}

function renderPagination() {
  if (!refs.pagination) {
    return;
  }

  if (isMobileViewport() || state.totalPages <= 1 || state.totalItems === 0) {
    refs.pagination.innerHTML = '';
    refs.pagination.classList.add('is-hidden');
    return;
  }

  const pageButtonsMarkup = Array.from({ length: state.totalPages }, (_, index) => {
    const page = index + 1;
    const isActive = page === state.currentPage;

    return `
      <button
        class="products-pagination__button ${isActive ? 'is-active' : ''}"
        type="button"
        data-page="${page}"
        aria-label="Сторінка ${page}"
        aria-current="${isActive ? 'page' : 'false'}"
      >
        ${page}
      </button>
    `;
  }).join('');

  refs.pagination.innerHTML = `
    <button
      class="products-pagination__button products-pagination__button--arrow btn-prev"
      type="button"
      data-page="${Math.max(1, state.currentPage - 1)}"
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
      data-page="${Math.min(state.totalPages, state.currentPage + 1)}"
      aria-label="Наступна сторінка"
      ${state.currentPage === state.totalPages ? 'disabled' : ''}
    >
      <svg class="btn-icon" width="20" height="20" aria-hidden="true">
        <use href="${iconsSprite}#icon-right-arrow-alt"></use>
      </svg>
    </button>
  `;

  refs.pagination.classList.remove('is-hidden');
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
      clearProducts(refs.productsList);
      renderEmptyState('За цією категорією товарів поки немає.');
      updateControls();
      return;
    }

    if (append) {
      appendProducts(data.furnitures, refs.productsList);
    } else {
      renderProducts(data.furnitures, refs.productsList);
    }

    updateControls();
  } catch (error) {
    clearProducts(refs.productsList);
    renderEmptyState('Не вдалося завантажити товари. Спробуйте ще раз.');

    iziToast.error({
      title: 'Помилка',
      message: error.response?.data?.message || 'Не вдалося завантажити список меблів.',
      position: 'topRight',
    });

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

    initCategoryFilters(refs.categoriesList, categories, async category => {
      state.activeCategoryId = category.id;
      state.activeCategoryName = category.name;
      state.currentPage = 1;

      clearProducts(refs.productsList);
      await fetchProducts({ page: 1, append: false });
    });
  } catch (error) {
    initCategoryFilters(refs.categoriesList, getDefaultCategories(), async category => {
      state.activeCategoryId = category.id;
      state.activeCategoryName = category.name;
      state.currentPage = 1;
      clearProducts(refs.productsList);
      await fetchProducts({ page: 1, append: false });
    });

    iziToast.error({
      title: 'Помилка',
      message: error.response?.data?.message || 'Не вдалося завантажити категорії. Показуємо всі товари.',
      position: 'topRight',
    });
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
  const pageButton = event.target.closest('[data-page]');

  if (!pageButton || pageButton.disabled || isMobileViewport()) {
    return;
  }

  const targetPage = Number(pageButton.dataset.page);

  if (!targetPage || targetPage === state.currentPage) {
    return;
  }

  await fetchProducts({ page: targetPage, append: false });
}

async function handleProductsClick(event) {
  const detailsButton = event.target.closest('[data-product-details]');

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
  clearProducts(refs.productsList);
  await fetchProducts({ page: 1, append: false });
}

export async function initProducts() {
  if (
    isInitialized ||
    !refs.categoriesList ||
    !refs.productsList ||
    !refs.pagination
  ) {
    return;
  }

  isInitialized = true;

  initProductModal();

  refs.productsList.addEventListener('click', handleProductsClick);
  refs.pagination.addEventListener('click', handlePaginationClick);
  loadMoreBtn.button?.addEventListener('click', handleLoadMoreClick);
  mobileMediaQuery.addEventListener('change', handleViewportChange);

  await bootstrapCategories();
  await fetchProducts({ page: 1, append: false });
}
