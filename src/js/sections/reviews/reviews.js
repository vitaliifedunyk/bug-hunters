import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { getFeedbacks } from './feedbacks-api.js';

// ==========================
// 🔥 ОКРУГЛЕННЯ ПО ТЗ
// ==========================
function normalizeRating(value) {
  if (value >= 3.3 && value <= 3.7) return 3.5;
  if (value >= 3.8 && value <= 4.2) return 4;

  return Math.round(value * 2) / 2;
}

// ==========================
// 🔥 РЕНДЕР КАРТОК
// ==========================
function createCard({ author, text, rating }) {
  const normalized = normalizeRating(rating);

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
// ⭐ RATY INIT
// ==========================
function initRating() {
  const elements = document.querySelectorAll('.rating');

  elements.forEach(el => {
    const score = Number(el.dataset.score);

    window.raty(el, {
      readOnly: true,
      score: score,
      half: true,
      starType: 'svg',
      hints: ['', '', '', '', ''],
    });
  });
}

// ==========================
// 🔥 SWIPER
// ==========================
let swiper;

function initSwiper() {
  swiper = new Swiper('.feedback-slider', {
    slidesPerView: 1,
    spaceBetween: 16,

    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },

    pagination: {
      el: '.feedback-pagination',
      clickable: true,
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'active',
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 3,
      },
    },

    on: {
      init(swiper) {
        updateButtons(swiper);
      },
      slideChange(swiper) {
        updateButtons(swiper);
      },
    },
  });
}

// ==========================
// 🔥 DISABLED КНОПКИ
// ==========================
function updateButtons(swiper) {
  const prevBtn = document.querySelector('.btn-prev');
  const nextBtn = document.querySelector('.btn-next');

  prevBtn.disabled = swiper.isBeginning;
  nextBtn.disabled = swiper.isEnd;
}

// ==========================
// 🚀 INIT
// ==========================
export async function initReviews() {
  const list = document.querySelector('.feedback-list');

  try {
    const data = await getFeedbacks();

    if (!data || data.length === 0) {
      list.innerHTML = '<p>Немає відгуків</p>';
      return;
    }

    const markup = data.map(createCard).join('');
    list.innerHTML = markup;

    // swiper класи
    list.classList.add('swiper-wrapper');

    document
      .querySelectorAll('.feedback-item')
      .forEach(el => el.classList.add('swiper-slide'));

    // ініціалізація
    initSwiper();
    initRating();

  } catch (error) {
    console.error(error);

    list.innerHTML = `
      <p class="error">
        Не вдалося завантажити відгуки 😢
      </p>
    `;
  }
}

