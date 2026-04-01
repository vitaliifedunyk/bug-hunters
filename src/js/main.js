import { initHeader } from './sections/header/header.js';
import { initMobileMenu } from './sections/header/mobile-menu.js';
import { initProductsSection } from './sections/products/products.js';
import { initFaq } from './sections/faq/faq.js';
import { initReviews } from './sections/reviews/reviews.js';
import { initProductModal } from './sections/modals/product-modal.js';
import { initOrderModal } from './sections/modals/order-modal.js';

function initApp() {
  initHeader();
  initMobileMenu();
  initProductsSection();
  initFaq();
  initReviews();
  initProductModal();
  initOrderModal();
}

document.addEventListener('DOMContentLoaded', initApp);
