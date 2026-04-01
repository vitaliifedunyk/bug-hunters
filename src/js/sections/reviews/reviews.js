import { fetchFeedbacks } from '../../api/feedbacks-api.js';
import { refs } from '../../utils/refs.js';
import { showLoader, hideLoader } from '../../services/loader.js';
import { showErrorMessage } from '../../services/notifications.js';

function createReviewMarkup(review) {
  return `
    <li class="reviews__slide swiper-slide">
      <article class="review-card">
        <p class="review-card__text">${review.descr || review.review || ''}</p>
        <p class="review-card__author">${review.name || 'Anonymous'}</p>
        <div class="review-card__rating" data-rating="${review.rate || 0}"></div>
      </article>
    </li>
  `;
}

function renderReviews(reviews = []) {
  if (!refs.reviewsList) return;

  refs.reviewsList.innerHTML = reviews.map(createReviewMarkup).join('');
}

function initReviewsSlider() {
  // TODO:
  // Тут команда підключає Swiper
  // new Swiper(...)
}

function renderRatings() {
  // TODO:
  // Тут команда рендерить зірочки через raty-js
}

export async function initReviews() {
  if (!refs.reviewsList) return;

  try {
    showLoader();

    const data = await fetchFeedbacks();
    const reviews = data.items || data.data || data || [];

    renderReviews(reviews);
    initReviewsSlider();
    renderRatings();
  } catch {
    showErrorMessage('Failed to load reviews.');
  } finally {
    hideLoader();
  }
}
