import allGoods from '../../../images/categories/all-goods.webp';
import allGoods2x from '../../../images/categories/all-goods@2x.webp';
import softFurniture from '../../../images/categories/soft-furniture.webp';
import softFurniture2x from '../../../images/categories/soft-furniture@2x.webp';
import wardrobe from '../../../images/categories/wardrobe.webp';
import wardrobe2x from '../../../images/categories/wardrobe@2x.webp';
import beds from '../../../images/categories/beds.webp';
import beds2x from '../../../images/categories/beds@2x.webp';
import tables from '../../../images/categories/tables.webp';
import tables2x from '../../../images/categories/tables@2x.webp';
import chairs from '../../../images/categories/chairs.webp';
import chairs2x from '../../../images/categories/chairs@2x.webp';
import kitchens from '../../../images/categories/kitchens.webp';
import kitchens2x from '../../../images/categories/kitchens@2x.webp';
import forKids from '../../../images/categories/for-kids.webp';
import forKids2x from '../../../images/categories/for-kids@2x.webp';
import forOffice from '../../../images/categories/for-office.webp';
import forOffice2x from '../../../images/categories/for-office@2x.webp';
import forHallway from '../../../images/categories/for-hallway.webp';
import forHallway2x from '../../../images/categories/for-hallway@2x.webp';
import forBathroom from '../../../images/categories/for-bathroom.webp';
import forBathroom2x from '../../../images/categories/for-bathroom@2x.webp';
import forOutdoor from '../../../images/categories/for-outdoor.webp';
import forOutdoor2x from '../../../images/categories/for-outdoor@2x.webp';
import accessories from '../../../images/categories/accessories.webp';
import accessories2x from '../../../images/categories/accessories@2x.webp';
import { refs } from '../../utils/refs.js';

export const ALL_PRODUCTS_CATEGORY_ID = 'all';
export const ALL_PRODUCTS_CATEGORY_NAME = 'Всі товари';

const categoryClickHandlers = new WeakMap();

const categoryImages = {
  'Всі товари': { img: allGoods, img2x: allGoods2x },
  "М'які меблі": { img: softFurniture, img2x: softFurniture2x },
  'Шафи та системи зберігання': { img: wardrobe, img2x: wardrobe2x },
  'Ліжка та матраци': { img: beds, img2x: beds2x },
  'Столи': { img: tables, img2x: tables2x },
  'Стільці та табурети': { img: chairs, img2x: chairs2x },
  'Кухні': { img: kitchens, img2x: kitchens2x },
  'Меблі для дитячої': { img: forKids, img2x: forKids2x },
  'Меблі для офісу': { img: forOffice, img2x: forOffice2x },
  'Меблі для передпокою': { img: forHallway, img2x: forHallway2x },
  'Меблі для ванної кімнати': { img: forBathroom, img2x: forBathroom2x },
  'Садові та вуличні меблі': { img: forOutdoor, img2x: forOutdoor2x },
  'Декор та аксесуари': { img: accessories, img2x: accessories2x },
};

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export function getDefaultCategories() {
  return [
    {
      id: ALL_PRODUCTS_CATEGORY_ID,
      name: ALL_PRODUCTS_CATEGORY_NAME,
    },
  ];
}

export function normalizeCategories(categories) {
  if (!Array.isArray(categories)) {
    return getDefaultCategories();
  }

  const normalizedCategories = getDefaultCategories();
  const seenIds = new Set([ALL_PRODUCTS_CATEGORY_ID]);

  categories.forEach(category => {
    const id = String(category?._id ?? category?.id ?? '').trim();
    const name = String(category?.name ?? '').trim();

    if (!id || !name || seenIds.has(id)) {
      return;
    }

    seenIds.add(id);
    normalizedCategories.push({ id, name });
  });

  return normalizedCategories;
}

function getCategoryImages(categoryName) {
  return categoryImages[categoryName] || categoryImages[ALL_PRODUCTS_CATEGORY_NAME];
}

export function renderCategoryFilters(categories) {
  if (!Array.isArray(categories)) {
    return '';
  }

  return categories
    .map(category => {
      const id = String(category?.id ?? '').trim();
      const name = String(category?.name ?? '').trim();

      if (!id || !name) {
        return '';
      }

      const images = getCategoryImages(name);
      const safeCategoryId = escapeHtml(id);
      const safeCategoryName = escapeHtml(name);

      return `
        <li class="categories-list__item">
          <button
            class="category-btn ${id === ALL_PRODUCTS_CATEGORY_ID ? 'is-active' : ''}"
            type="button"
            data-category-button
            data-category-id="${safeCategoryId}"
            data-category-name="${safeCategoryName}"
            aria-pressed="${id === ALL_PRODUCTS_CATEGORY_ID}"
          >
            <img src="${images.img}" srcset="${images.img} 1x, ${images.img2x} 2x" alt="${safeCategoryName}" class="fill-image" />
            <span>${safeCategoryName}</span>
          </button>
        </li>
      `;
    })
    .join('');
}

export function setActiveCategoryButton(container, activeCategoryId) {
  if (!container) {
    return;
  }

  refs.categories.getButtons(container).forEach(button => {
    const isActive = button.dataset.categoryId === activeCategoryId;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

export function initCategoryFilters(container, categories, onCategorySelect) {
  if (!container) {
    return;
  }

  container.innerHTML = renderCategoryFilters(categories);

  const previousHandler = categoryClickHandlers.get(container);
  if (previousHandler) {
    container.removeEventListener('click', previousHandler);
  }

  const handleCategoryClick = event => {
    const button = refs.categories.getButton(event.target);
    if (!button) {
      return;
    }

    const selectedCategory = {
      id: button.dataset.categoryId || ALL_PRODUCTS_CATEGORY_ID,
      name: button.dataset.categoryName || ALL_PRODUCTS_CATEGORY_NAME,
    };

    setActiveCategoryButton(container, selectedCategory.id);

    if (typeof onCategorySelect === 'function') {
      onCategorySelect(selectedCategory);
    }
  };

  categoryClickHandlers.set(container, handleCategoryClick);
  container.addEventListener('click', handleCategoryClick);
}
