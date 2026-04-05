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
import { getCategories } from '../../api/categories-api.js';

const ALL_GOODS_CATEGORY = 'Всі товари';
const categoryClickHandlers = new WeakMap();

const categoryImages = {
  "Всі товари": { img: allGoods, img2x: allGoods2x },
  "М'які меблі": { img: softFurniture, img2x: softFurniture2x },
  "Шафи та системи зберігання": { img: wardrobe, img2x: wardrobe2x },
  "Ліжка та матраци": { img: beds, img2x: beds2x },
  "Столи": { img: tables, img2x: tables2x },
  "Стільці та табурети": { img: chairs, img2x: chairs2x },
  "Кухні": { img: kitchens, img2x: kitchens2x },
  "Меблі для дитячої": { img: forKids, img2x: forKids2x },
  "Меблі для офісу": { img: forOffice, img2x: forOffice2x },
  "Меблі для передпокою": { img: forHallway, img2x: forHallway2x },
  "Меблі для ванної кімнати": { img: forBathroom, img2x: forBathroom2x },
  "Садові та вуличні меблі": { img: forOutdoor, img2x: forOutdoor2x },
  "Декор та аксесуари": { img: accessories, img2x: accessories2x }
};

const fallbackCategories = [
  { name: ALL_GOODS_CATEGORY },
  { name: "М'які меблі" },
  { name: 'Шафи та системи зберігання' },
  { name: 'Ліжка та матраци' },
  { name: 'Столи' },
  { name: 'Стільці та табурети' },
  { name: 'Кухні' },
  { name: 'Меблі для дитячої' },
  { name: 'Меблі для офісу' },
  { name: 'Меблі для передпокою' },
  { name: 'Меблі для ванної кімнати' },
  { name: 'Садові та вуличні меблі' },
  { name: 'Декор та аксесуари' }
];

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function normalizeCategoryName(category) {
  if (typeof category === 'string') {
    return category.trim();
  }

  if (category && typeof category.name === 'string') {
    return category.name.trim();
  }

  if (category && typeof category.title === 'string') {
    return category.title.trim();
  }

  if (category && typeof category.category === 'string') {
    return category.category.trim();
  }

  return '';
}

function normalizeCategories(categories) {
  if (!Array.isArray(categories)) {
    return [];
  }

  const uniqueNames = [];
  const seenNames = new Set();

  categories.forEach(category => {
    const name = normalizeCategoryName(category);

    if (!name || seenNames.has(name)) {
      return;
    }

    seenNames.add(name);
    uniqueNames.push(name);
  });

  if (!uniqueNames.length) {
    return [];
  }

  const categoryNames = uniqueNames.filter(name => name !== ALL_GOODS_CATEGORY);
  return [{ name: ALL_GOODS_CATEGORY }, ...categoryNames.map(name => ({ name }))];
}

async function loadCategories() {
  try {
    const apiCategories = await getCategories();
    const normalizedCategories = normalizeCategories(apiCategories);

    if (normalizedCategories.length) {
      return normalizedCategories;
    }

    console.warn('Categories API returned an empty or unsupported payload. Using fallback list.');
  } catch (error) {
    console.error('Failed to load categories from API. Using fallback list.', error);
  }

  return fallbackCategories;
}

function getCategoryImages(categoryName) {
  return categoryImages[categoryName] || categoryImages[ALL_GOODS_CATEGORY];
}

export function renderCategoryFilters(categories) {
  if (!Array.isArray(categories)) {
    return '';
  }

  return categories
    .map(category => {
      const key = normalizeCategoryName(category);

      if (!key) {
        return '';
      }

      const images = getCategoryImages(key);
      const safeCategoryName = escapeHtml(key);

    return `
      <li class="categories-list__item">
        <button class="category-btn ${key === ALL_GOODS_CATEGORY ? 'is-active' : ''}" 
                type="button" 
                data-category-filter="${safeCategoryName}" 
                aria-pressed="${key === ALL_GOODS_CATEGORY}">
          <img src="${images.img}" srcset="${images.img} 1x, ${images.img2x} 2x" alt="${safeCategoryName}" class="fill-image" />
          <span>${safeCategoryName}</span>
        </button>
      </li>
    `;
    })
    .join('');
}

export function setActiveCategoryButton(container, activeCategory) {
  container.querySelectorAll('.category-btn').forEach(btn => {
    const isActive = btn.dataset.categoryFilter === activeCategory;
    btn.classList.toggle('is-active', isActive);
    btn.setAttribute('aria-pressed', isActive);
  });
}

export function initCategoryFilters(container, categories, onCategorySelect) {
  if (!container) return;

  container.innerHTML = renderCategoryFilters(categories);

  const previousHandler = categoryClickHandlers.get(container);
  if (previousHandler) {
    container.removeEventListener('click', previousHandler);
  }

  const handleCategoryClick = event => {
    const btn = event.target.closest('.category-btn');
    if (!btn) return;

    const selectedCategory = btn.dataset.categoryFilter;
    setActiveCategoryButton(container, selectedCategory);

    if (typeof onCategorySelect === 'function') {
      onCategorySelect(selectedCategory);
    }
  };

  categoryClickHandlers.set(container, handleCategoryClick);
  container.addEventListener('click', handleCategoryClick);
}

document.addEventListener('DOMContentLoaded', async () => {
  const container = document.querySelector('[data-categories-list]');
  const categories = await loadCategories();

  initCategoryFilters(container, categories);
});
