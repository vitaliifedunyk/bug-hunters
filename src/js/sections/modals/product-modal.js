import { getFurnitureById } from '../../api/furniture-api.js';

console.log('[ProductModal] Module loaded');

let currentProduct = null;
let selectedColor = null;
let modalOverlay = null;

export function initProductModal() {
  console.log('[ProductModal] initProductModal() called');
  createModalMarkup();
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupListeners);
  } else {
    setupListeners();
  }
}

function setupListeners() {
  console.log('[ProductModal] Setting up listeners');
  attachEventListeners();
  attachProductCardListeners();
}

function createModalMarkup() {
  if (document.getElementById('productModalOverlay')) {
    console.log('[ProductModal] Modal already exists');
    return;
  }

  const modalHTML = `
    <div class="product-modal-overlay" id="productModalOverlay">
      <div class="product-modal">
        <button class="product-modal__close" id="productModalClose" aria-label="Закрити">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        
        <div class="product-modal__content">
          <div class="product-modal__gallery">
            <div class="product-modal__main-image">
              <img src="" alt="" id="productModalMainImage">
            </div>
            <div class="product-modal__thumbnails" id="productModalThumbnails"></div>
          </div>
          
          <div class="product-modal__info">
            <h2 class="product-modal__title" id="productModalTitle"></h2>
            <p class="product-modal__category" id="productModalCategory"></p>
            <p class="product-modal__price" id="productModalPrice"></p>
            <div class="product-modal__rating">
              <span class="stars">★★★★☆</span>
            </div>
            <div class="product-modal__colors">
              <p class="product-modal__label">Колір</p>
              <div class="product-modal__color-options" id="productModalColors"></div>
            </div>
            <div class="product-modal__description">
              <p id="productModalDescription"></p>
            </div>
            <div class="product-modal__dimensions">
              <p>Розміри: <span id="productModalDimensions">280x180x85</span></p>
            </div>
            <button class="product-modal__order-btn" id="productModalOrderBtn">
              Перейти до замовлення
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHTML);
  modalOverlay = document.getElementById('productModalOverlay');
  console.log('[ProductModal] Modal created:', !!modalOverlay);
}

function attachEventListeners() {
  const closeBtn = document.getElementById('productModalClose');
  const orderBtn = document.getElementById('productModalOrderBtn');
  
  closeBtn?.addEventListener('click', closeProductModal);
  
  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeProductModal();
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay?.classList.contains('is-open')) {
      closeProductModal();
    }
  });
  
  orderBtn?.addEventListener('click', handleOrderTransition);
}

function attachProductCardListeners() {
  console.log('[ProductModal] Attaching to buttons...');
  
  const buttons = document.querySelectorAll('.product-card__btn');
  console.log('[ProductModal] Found buttons:', buttons.length);
  
  buttons.forEach((btn) => {
    
    if (!btn.dataset.action) {
      btn.dataset.action = 'product-details';
    }
    if (!btn.dataset.productId) {
      const card = btn.closest('.product-card');
      const cardId = card?.dataset.productId;
      if (cardId) {
        btn.dataset.productId = cardId;
      }
    }
    
    
    const card = btn.closest('.product-card');
    const cardTitle = card?.querySelector('.product-card__title')?.textContent?.trim();
    const cardPriceText = card?.querySelector('.product-card__price')?.textContent?.trim();
    const cardPrice = cardPriceText ? parseInt(cardPriceText.replace(/\s/g, '').replace('грн', '')) : null;
    
    console.log(`[ProductModal] Button:`, btn.dataset.productId, '| Title:', cardTitle, '| Price:', cardPrice);
    
    
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
    
    
    newBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const productId = newBtn.dataset.productId;
      console.log('[ProductModal] Button clicked! ID:', productId);
      
      if (productId) {
        openProductModal(productId, cardTitle, cardPrice);
      } else {
        console.error('[ProductModal] No product ID found!');
      }
    });
  });
}

export async function openProductModal(productId, customName = null, customPrice = null) {
  console.log('[ProductModal] Opening modal for ID:', productId, '| Custom name:', customName, '| Custom price:', customPrice);
  
  try {
    const product = await getFurnitureById(productId);
    console.log('[ProductModal] API response:', product);
    
    if (!product) {
      console.error('[ProductModal] Product not found');
      return;
    }
    
    currentProduct = product;
    selectedColor = product.color?.[0] || null;
    
    
    const displayName = customName || product.name;
    const displayPrice = customPrice || product.price;
    
    document.getElementById('productModalTitle').textContent = displayName;
    document.getElementById('productModalCategory').textContent = extractCategory(product.name);
    document.getElementById('productModalPrice').textContent = formatPrice(displayPrice);
    document.getElementById('productModalDescription').textContent = 
      product.description || generateDescription(product.name);
    
    
    const mainImg = document.getElementById('productModalMainImage');
    const thumbsContainer = document.getElementById('productModalThumbnails');
    
    if (product.images?.length > 0) {
      mainImg.src = product.images[0];
      mainImg.alt = displayName;
      
      const thumbs = product.images.slice(1, 3);
      thumbsContainer.innerHTML = thumbs.map((img, i) => `
        <div class="product-modal__thumbnail ${i === 0 ? 'is-active' : ''}" data-src="${img}">
          <img src="${img}" alt="${displayName}">
        </div>
      `).join('');
      
      thumbsContainer.querySelectorAll('.product-modal__thumbnail').forEach(thumb => {
        thumb.addEventListener('click', function() {
          const newSrc = this.dataset.src;
          const oldSrc = mainImg.src;
          mainImg.src = newSrc;
          this.querySelector('img').src = oldSrc;
          this.dataset.src = oldSrc;
          
          thumbsContainer.querySelectorAll('.product-modal__thumbnail').forEach(t => t.classList.remove('is-active'));
          this.classList.add('is-active');
        });
      });
    }
    
    
    const colorsContainer = document.getElementById('productModalColors');
    const colors = product.color?.slice(0, 3) || [];
    
    colorsContainer.innerHTML = colors.map((color, i) => `
      <button class="product-modal__color-btn ${i === 0 ? 'is-selected' : ''}"
              data-color="${color}"
              style="background-color: ${color};">
      </button>
    `).join('');
    
    colorsContainer.querySelectorAll('.product-modal__color-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        selectedColor = this.dataset.color;
        colorsContainer.querySelectorAll('.product-modal__color-btn').forEach(b => b.classList.remove('is-selected'));
        this.classList.add('is-selected');
      });
    });
    
    
    modalOverlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    console.log('[ProductModal] Modal opened!');
    
  } catch (error) {
    console.error('[ProductModal] Error:', error);
  }
}

export function closeProductModal() {
  modalOverlay?.classList.remove('is-open');
  document.body.style.overflow = '';
  currentProduct = null;
}

function handleOrderTransition() {
  if (!currentProduct) return;
  
  const orderData = {
    product: currentProduct,
    selectedColor: selectedColor,
    quantity: 1
  };
  
  localStorage.setItem('pendingOrder', JSON.stringify(orderData));
  closeProductModal();
  
  document.dispatchEvent(new CustomEvent('openOrderModal', {
    detail: orderData
  }));
}

function extractCategory(name) {
  if (!name) return 'Меблі';
  const lower = name.toLowerCase();
  if (lower.includes('диван') || lower.includes('софа')) return 'Дивани';
  if (lower.includes('крісло')) return 'Крісла';
  if (lower.includes('пуф')) return 'Пуфи';
  if (lower.includes('шафа')) return 'Шафи';
  if (lower.includes('комод')) return 'Комоди';
  if (lower.includes('стелаж')) return 'Стелажі';
  return 'Меблі';
}

function formatPrice(price) {
  if (!price && price !== 0) return '';
  return `${price.toLocaleString('uk-UA')} грн`;
}

function generateDescription(name) {
  return `Класичний ${name?.toLowerCase() || 'виріб'} з м'якими подушками та високою спинкою, ідеальний для сімейного відпочинку. Оббивка з якісної зносостійкої тканини.`;
}