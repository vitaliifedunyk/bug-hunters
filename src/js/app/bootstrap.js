import { initFaq } from '../sections/faq/faq.js';
import { initHeader } from '../sections/header/header.js';
import { initOrderModal } from '../sections/modals/order-modal.js';
import { initProducts } from '../sections/products/products.js';
import { initReviews } from '../sections/reviews/reviews.js';

const syncInitializers = [
  initHeader,
  initFaq,
  initOrderModal,
];

const asyncInitializers = [
  initProducts,
  initReviews,
];

export function bootstrapApp() {
  syncInitializers.forEach(initializer => {
    initializer();
  });

  asyncInitializers.forEach(initializer => {
    void initializer();
  });
}
