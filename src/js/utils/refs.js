const selectors = {
  loader: '[data-loader]',
  starRatingSpriteHost: '[data-star-rating-sprite-host]',
  starRatingSprite: '[data-star-rating-sprite]',

  mobileMenu: '[data-mobile-menu]',
  mobileMenuOpen: '[data-menu-open]',
  mobileMenuClose: '[data-menu-close]',
  mobileMenuBackdrop: '[data-menu-backdrop]',
  navLink: '[data-nav-link]',

  categoriesSection: '[data-categories-section]',
  categoriesList: '[data-categories-list]',
  categoryButton: '[data-category-button]',

  productsSection: '[data-products-section]',
  productsList: '[data-products-list]',
  productsPagination: '[data-products-pagination]',
  productsPaginationButton: '[data-products-page]',
  productDetailsButton: '[data-product-details]',
  loadMoreContainer: '[data-load-more-container]',
  loadMoreButton: '[data-load-more]',

  faqSection: '[data-faq-section]',
  faqAccordion: '[data-faq-accordion]',

  reviewsSection: '[data-reviews-section]',
  reviewsSlider: '[data-reviews-slider]',
  reviewsList: '[data-reviews-list]',
  reviewsPagination: '[data-reviews-pagination]',
  reviewsPrev: '[data-reviews-prev]',
  reviewsNext: '[data-reviews-next]',

  orderModal: '[data-order-modal]',
  orderModalOpen: '[data-order-modal-open]',
  orderModalClose: '[data-order-modal-close]',
  orderForm: '[data-order-form]',
  orderFormSubmit: '[data-order-form-submit]',
  orderFormName: '[data-order-form-name]',
  orderFormPhone: '[data-order-form-phone]',
  orderFormComment: '[data-order-form-comment]',
  orderFormErrorName: '[data-form-error="name"]',
  orderFormErrorPhone: '[data-form-error="phone"]',
  orderFormErrorComment: '[data-form-error="comment"]',

  productModal: '[data-product-modal]',
  productModalClose: '[data-product-modal-close]',
  productModalMainImage: '[data-product-modal-main-image]',
  productModalThumbnails: '[data-product-modal-thumbnails]',
  productModalTitle: '[data-product-modal-title]',
  productModalCategory: '[data-product-modal-category]',
  productModalPrice: '[data-product-modal-price]',
  productModalRating: '[data-product-modal-rating]',
  productModalColors: '[data-product-modal-colors]',
  productModalDescription: '[data-product-modal-description]',
  productModalSizes: '[data-product-modal-sizes]',
  productModalOrder: '[data-product-modal-order]',
  productThumbnail: '[data-product-thumbnail]',
  productColor: '[data-product-color]',
};

function query(selector, container = document) {
  return container?.querySelector(selector) ?? null;
}

function queryAll(selector, container = document) {
  return Array.from(container?.querySelectorAll(selector) ?? []);
}

function closest(target, selector) {
  return target instanceof Element ? target.closest(selector) : null;
}

const mobileMenuRoot = query(selectors.mobileMenu);
const categoriesSection = query(selectors.categoriesSection);
const categoriesList = query(selectors.categoriesList, categoriesSection);
const productsSection = query(selectors.productsSection);
const productsList = query(selectors.productsList, productsSection);
const productsPagination = query(selectors.productsPagination, productsSection);
const loadMoreContainer = query(selectors.loadMoreContainer, productsSection);
const faqSection = query(selectors.faqSection);
const reviewsSection = query(selectors.reviewsSection);
const orderModalRoot = query(selectors.orderModal);
const orderForm = query(selectors.orderForm, orderModalRoot);
const productModalRoot = query(selectors.productModal);
const productModalThumbnails = query(selectors.productModalThumbnails, productModalRoot);

export const refs = {
  loader: query(selectors.loader),
  starRatingSpriteHost: query(selectors.starRatingSpriteHost),
  get starRatingSprite() {
    return query(selectors.starRatingSprite);
  },

  mobileMenu: {
    root: mobileMenuRoot,
    openButton: query(selectors.mobileMenuOpen),
    closeButton: query(selectors.mobileMenuClose, mobileMenuRoot),
    backdrop: query(selectors.mobileMenuBackdrop, mobileMenuRoot),
    links: queryAll(selectors.navLink, mobileMenuRoot),
  },

  categories: {
    list: categoriesList,
    getButtons(container = categoriesList) {
      return queryAll(selectors.categoryButton, container);
    },
    getButton(target) {
      return closest(target, selectors.categoryButton);
    },
  },

  products: {
    list: productsList,
    pagination: productsPagination,
    loadMoreContainer,
    loadMoreButton: query(selectors.loadMoreButton, productsSection),
    getPaginationButton(target) {
      return closest(target, selectors.productsPaginationButton);
    },
    getDetailsButton(target) {
      return closest(target, selectors.productDetailsButton);
    },
  },

  faq: {
    accordion: query(selectors.faqAccordion, faqSection),
  },

  reviews: {
    section: reviewsSection,
    list: query(selectors.reviewsList, reviewsSection),
    slider: query(selectors.reviewsSlider, reviewsSection),
    pagination: query(selectors.reviewsPagination, reviewsSection),
    prevButton: query(selectors.reviewsPrev, reviewsSection),
    nextButton: query(selectors.reviewsNext, reviewsSection),
  },

  orderModal: {
    root: orderModalRoot,
    closeButton: query(selectors.orderModalClose, orderModalRoot),
    form: orderForm,
    submitButton: query(selectors.orderFormSubmit, orderForm),
    fields: {
      name: query(selectors.orderFormName, orderForm),
      phone: query(selectors.orderFormPhone, orderForm),
      comment: query(selectors.orderFormComment, orderForm),
    },
    errors: {
      name: query(selectors.orderFormErrorName, orderForm),
      phone: query(selectors.orderFormErrorPhone, orderForm),
      comment: query(selectors.orderFormErrorComment, orderForm),
    },
    getTrigger(target) {
      return closest(target, selectors.orderModalOpen);
    },
  },

  productModal: {
    root: productModalRoot,
    closeButton: query(selectors.productModalClose, productModalRoot),
    mainImage: query(selectors.productModalMainImage, productModalRoot),
    thumbnails: productModalThumbnails,
    title: query(selectors.productModalTitle, productModalRoot),
    category: query(selectors.productModalCategory, productModalRoot),
    price: query(selectors.productModalPrice, productModalRoot),
    rating: query(selectors.productModalRating, productModalRoot),
    colors: query(selectors.productModalColors, productModalRoot),
    description: query(selectors.productModalDescription, productModalRoot),
    sizes: query(selectors.productModalSizes, productModalRoot),
    getThumbnailButtons() {
      return queryAll(selectors.productThumbnail, productModalThumbnails);
    },
    getThumbnailButton(target) {
      return closest(target, selectors.productThumbnail);
    },
    getColorButton(target) {
      return closest(target, selectors.productColor);
    },
    getOrderButton(target) {
      return closest(target, selectors.productModalOrder);
    },
  },
};
