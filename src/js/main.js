import { initHeader } from './sections/header/header.js';

initHeader();

import './components/modal/modal-state.js'; 
import './components/modal/open-modal.js';
import './components/modal/close-modal.js';
import 'izitoast/dist/css/iziToast.min.css';

import { initHeader } from './sections/header/header.js';
import { initReviews } from './sections/reviews/reviews.js';
import { initOrderModal } from './sections/modals/order-modal.js';
import { initProducts } from './sections/products/products.js';

initHeader();
initReviews();
initOrderModal();
initProducts();
