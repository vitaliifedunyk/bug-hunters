import { getFeedbacks } from '../../api/feedbacks-api.js';
import { showError } from '../../services/notifications.js';
import { refs } from '../../utils/refs.js';
import starRatingSpriteMarkup from '../../../images/icons/star-rating.icons.svg?raw';

let reviewsSwiperInstance;

function ensureStarRatingSprite() {
  if (refs.starRatingSprite || !refs.starRatingSpriteHost) {
    return;
  }

  refs.starRatingSpriteHost.insertAdjacentHTML(
    'beforeend',
    `<div data-star-rating-sprite aria-hidden="true">${starRatingSpriteMarkup}</div>`
  );
}

function normalizeRating(rating) {
  const numericRating = Number(rating) || 0;

  if (numericRating >= 3.3 && numericRating <= 3.7) return 3.5;
  if (numericRating >= 3.8 && numericRating <= 4.2) return 4;

  return Math.max(0, Math.min(5, Math.round(numericRating * 2) / 2));
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function createStarsMarkup() {
  return Array.from(
    { length: 5 },
    () => `
      <div class="star">
        <svg class="star-empty" aria-hidden="true">
          <use href="#star-empty"></use>
        </svg>
        <svg class="star-half" aria-hidden="true">
          <use href="#star-half"></use>
        </svg>
        <svg class="star-filled" aria-hidden="true">
          <use href="#star-filled"></use>
        </svg>
      </div>
    `
  ).join('');
}

function createRatingMarkup(rating) {
  const normalized = normalizeRating(rating);
  const wholePart = Math.floor(normalized);
  const ratingClasses = [
    'rating',
    'medium',
    'star-svg',
    'label-hidden',
    'direction-ltr',
    `value-${wholePart}`,
  ];

  if (normalized % 1 !== 0) {
    ratingClasses.push('half');
  }

  return `
    <div class="${ratingClasses.join(' ')}" aria-label="Рейтинг ${normalized} з 5">
      <div class="label-value">${normalized}</div>
      <div class="star-container">
        ${createStarsMarkup()}
      </div>
    </div>
  `;
}

function createCard({ author, text, rating }) {
  return `
    <li class="feedback-item swiper-slide">
      <div class="feedback-card">
        ${createRatingMarkup(rating)}
        <p class="feedback-text">"${escapeHtml(text)}"</p>
        <p class="feedback-author">${escapeHtml(author)}</p>
      </div>
    </li>
  `;
}

export async function initReviews() {
  const {
    section,
    list: container,
    slider,
    pagination,
    prevButton,
    nextButton,
  } = refs.reviews;

  if (!section || !container || !slider || !pagination || !prevButton || !nextButton) {
    return;
  }

  try {
    const [
      { default: Swiper },
      { Navigation, Pagination },
    ] = await Promise.all([
      import('swiper'),
      import('swiper/modules'),
      import('css-star-rating/css/star-rating.css'),
      import('swiper/css'),
      import('swiper/css/navigation'),
      import('swiper/css/pagination'),
    ]);

    ensureStarRatingSprite();

    const { reviews } = await getFeedbacks();

    if (!Array.isArray(reviews) || reviews.length === 0) {
      container.innerHTML = `
        <li class="feedback-item feedback-item--status">
          <p class="feedback-status">Наразі немає відгуків.</p>
        </li>
      `;
      prevButton.disabled = true;
      nextButton.disabled = true;
      pagination.innerHTML = '';
      return;
    }

    container.innerHTML = reviews.slice(0, 10).map(createCard).join('');
    prevButton.disabled = false;
    nextButton.disabled = false;

    if (reviewsSwiperInstance) {
      reviewsSwiperInstance.destroy(true, true);
    }

    reviewsSwiperInstance = new Swiper(slider, {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 16,
      watchOverflow: true,

      navigation: {
        nextEl: nextButton,
        prevEl: prevButton,
        disabledClass: 'is-disabled',
      },

      pagination: {
        el: pagination,
        clickable: true,
        bulletClass: 'feedback-pagination-bullet',
        bulletActiveClass: 'is-active',
      },

      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
    });
  } catch (error) {
    container.innerHTML = `
      <li class="feedback-item feedback-item--status">
        <p class="feedback-status">Не вдалося завантажити відгуки.</p>
      </li>
    `;
    prevButton.disabled = true;
    nextButton.disabled = true;
    pagination.innerHTML = '';
    showError(error.response?.data?.message || 'Не вдалося завантажити відгуки.');
  }
}
