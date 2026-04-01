export const refs = {
  // Global
  loader: document.querySelector('[data-loader]'),

  // Header
  mobileMenu: document.querySelector('[data-mobile-menu]'),
  mobileMenuOpenBtn: document.querySelector('[data-menu-open]'),
  mobileMenuCloseBtn: document.querySelector('[data-menu-close]'),

  // Products
  categoriesList: document.querySelector('[data-categories-list]'),
  productsList: document.querySelector('[data-products-list]'),
  loadMoreBtn: document.querySelector('[data-load-more]'),

  // Reviews
  reviewsList: document.querySelector('[data-reviews-list]'),

  // Product modal
  productModal: document.querySelector('[data-product-modal]'),
  productModalTitle: document.querySelector('[data-product-title]'),
  productModalColors: document.querySelector('[data-product-colors]'),
  openOrderModalBtn: document.querySelector('[data-open-order-modal]'),
  productModalCloseBtns: document.querySelectorAll(
    '[data-product-modal-close]'
  ),

  // Order modal
  orderModal: document.querySelector('[data-order-modal]'),
  orderForm: document.querySelector('[data-order-form]'),
  orderModalCloseBtns: document.querySelectorAll('[data-order-modal-close]'),
};
