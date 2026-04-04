import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { getFeedbacks } from '../../api/feedbacks-api.js';

// ==========================
// 🔥 NORMALIZE RATING
// ==========================
function normalizeRating(rating) {
  if (rating >= 3.3 && rating <= 3.7) return 3.5;
  if (rating >= 3.8 && rating <= 4.2) return 4;
  return Math.round(rating * 2) / 2;
}

// ==========================
// 🔥 CREATE CARD
// ==========================
function createCard({ author, text, rate }) {
  const normalized = normalizeRating(rate);

  return `
    <li class="feedback-item swiper-slide">
      <div class="feedback-card">
        <div class="rating" data-score="${normalized}"></div>

        <p class="feedback-text">"${text}"</p>
        <p class="feedback-author">${author}</p>
      </div>
    </li>
  `;
}

// ==========================
// ⭐ INIT RATING
// ==========================
function initRating(container) {
  const elements = container.querySelectorAll('.rating');

  elements.forEach(el => {
    const score = Number(el.dataset.score);

    window.raty(el, {
      readOnly: true,
      score: score,
      half: true,
      starType: 'svg',
    });
  });
}

// ==========================
// 🚀 INIT REVIEWS
// ==========================
export async function initReviews() {
  const container = document.querySelector('.feedback-list');

  try {
    const { reviews } = await getFeedbacks();

    if (!Array.isArray(reviews) || reviews.length === 0) {
      container.innerHTML = '<p>Немає відгуків</p>';
      return;
    }

    const sliced = reviews.slice(0, 10);

    container.innerHTML = sliced.map(createCard).join('');

    container.classList.add('swiper-wrapper');

    initRating(container);

    new Swiper('.feedback-slider', {
      slidesPerView: 1,
      spaceBetween: 20,

      navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
      },

      pagination: {
        el: '.feedback-pagination',
        clickable: true,
      },

      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1440: {
          slidesPerView: 3,
        },
      },
    });

  } catch (error) {
    console.error('Помилка:', error);

    container.innerHTML = `
      <p>Не вдалося завантажити відгуки 😢</p>
    `;
  }
}