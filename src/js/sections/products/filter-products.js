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

export function renderCategoryFilters(categories) {
  return categories.map(cat => {
    const key = cat.name.trim();
    const images = categoryImages[key] || { img: '', img2x: '' };
    return `
      <li class="categories-list__item">
        <button class="category-btn ${key === "Всі товари" ? "is-active" : ""}" 
                type="button" 
                data-category-filter="${key}" 
                aria-pressed="${key === "Всі товари"}">
          <img src="${images.img}" srcset="${images.img} 1x, ${images.img2x} 2x" alt="${key}" class="fill-image" />
          <span>${key}</span>
        </button>
      </li>
    `;
  }).join('');
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
  container.addEventListener('click', (event) => {
    const btn = event.target.closest('.category-btn');
    if (!btn) return;
    const selectedCategory = btn.dataset.categoryFilter;
    setActiveCategoryButton(container, selectedCategory);
    if (typeof onCategorySelect === 'function') {
      onCategorySelect(selectedCategory);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('[data-categories-list]');
  const categories = [
    { name: "Всі товари" },
    { name: "М'які меблі" },
    { name: "Шафи та системи зберігання" },
    { name: "Ліжка та матраци" },
    { name: "Столи" },
    { name: "Стільці та табурети" },
    { name: "Кухні" },
    { name: "Меблі для дитячої" },
    { name: "Меблі для офісу" },
    { name: "Меблі для передпокою" },
    { name: "Меблі для ванної кімнати" },
    { name: "Садові та вуличні меблі" },
    { name: "Декор та аксесуари" }
  ];
  initCategoryFilters(container, categories);
});