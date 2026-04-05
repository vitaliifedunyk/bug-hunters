const mobileMenu = document.querySelector('[data-mobile-menu]');

export const refs = {
  mobileMenu,
  openMenuBtn: document.querySelector('[data-menu-open]'),
  closeMenuBtn: mobileMenu?.querySelector('[data-menu-close]'),
  menuBackdrop: mobileMenu?.querySelector('[data-menu-backdrop]'),
  menuLinks: mobileMenu?.querySelectorAll('[data-nav-link]') ?? [],
  body: document.body,

  // Логіка модалки
  orderModal: document.querySelector('[data-order-modal]'),
  openOrderModalBtns: document.querySelectorAll('[data-order-modal-open]'),
  closeOrderModalBtn: document.querySelector('[data-order-modal-close]'),
  orderForm: document.querySelector('[data-order-form]'),
};