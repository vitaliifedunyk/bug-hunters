import{i as e,n as t,r as n,t as r}from"./assets/vendor-D7UzBdRL.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var i={CATEGORIES:`/categories`,FURNITURES:`/furnitures`,FURNITURE_BY_ID:e=>`/furnitures/${e}`,ORDERS:`/orders`,FEEDBACKS:`/feedbacks`},a=`(min-width: 1440px)`,o=document.querySelector(`[data-mobile-menu]`),s={mobileMenu:o,openMenuBtn:document.querySelector(`[data-menu-open]`),closeMenuBtn:o?.querySelector(`[data-menu-close]`),menuBackdrop:o?.querySelector(`[data-menu-backdrop]`),menuLinks:o?.querySelectorAll(`[data-nav-link]`)??[],body:document.body,orderModal:document.querySelector(`[data-order-modal]`),openOrderModalBtns:document.querySelectorAll(`[data-order-modal-open]`),closeOrderModalBtn:document.querySelector(`[data-order-modal-close]`),orderForm:document.querySelector(`[data-order-form]`)};function c(){let{mobileMenu:e,openMenuBtn:t,closeMenuBtn:n,menuBackdrop:r,menuLinks:i,body:o}=s;if(!e||!t||!n||!r)return;let c=window.matchMedia(a),l=t,u=()=>{c.matches||(l=document.activeElement,e.classList.remove(`is-hidden`),e.setAttribute(`aria-hidden`,`false`),t.setAttribute(`aria-expanded`,`true`),o.classList.add(`no-scroll`),n.focus())},d=(n=!0)=>{e.classList.add(`is-hidden`),e.setAttribute(`aria-hidden`,`true`),t.setAttribute(`aria-expanded`,`false`),o.classList.remove(`no-scroll`),n&&l instanceof HTMLElement&&l.focus()};t.addEventListener(`click`,u),n.addEventListener(`click`,()=>d()),r.addEventListener(`click`,()=>d()),i.forEach(e=>e.addEventListener(`click`,()=>d(!1))),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&d()}),c.addEventListener(`change`,e=>{e.matches&&d(!1)})}function l(){c()}r.defaults.baseURL=`https://furniture-store-v2.b.goit.study/api`;function u(e){let t=Number(e)||0;return t>=3.3&&t<=3.7?3.5:t>=3.8&&t<=4.2?4:Math.max(0,Math.min(5,Math.round(t*2)/2))}function d(e={}){return{author:String(e.author??e.name??`Анонімний користувач`),text:String(e.text??e.descr??e.comment??``),rating:u(e.rating??e.rate)}}async function f(e=10){try{let{data:t}=await r.get(i.FEEDBACKS,{params:{limit:e}});if(!t||!Array.isArray(t.feedbacks))throw Error(`Invalid feedbacks format`);return{reviews:t.feedbacks.map(d),total:t.total,page:Number(t.page),limit:Number(t.limit)}}catch(e){throw e}}var p=`<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>

        <symbol id="star-empty" viewBox="0 0 34 32">
            <title>star-empty</title>
            <path class="path-star-empty"
                  d="M33.412 12.395l-11.842-1.021-4.628-10.904-4.628 10.92-11.842 1.005 8.993 7.791-2.701 11.579 10.179-6.144 10.179 6.144-2.685-11.579 8.976-7.791zM16.941 22.541l-6.193 3.739 1.647-7.049-5.468-4.744 7.214-0.626 2.8-6.638 2.816 6.654 7.214 0.626-5.468 4.744 1.647 7.049-6.209-3.755z"/>
        </symbol>

        <symbol id="star-half" viewBox="0 0 34 32">
            <title>star-half</title>
            <path class="path-star-half"
                  d="M 33.412,12.395 21.57,11.374 16.942,0.47 12.314,11.39 0.472,12.395 9.465,20.186 6.764,31.765 16.943,25.621 27.122,31.765 24.437,20.186 33.413,12.395 Z M 16.941,22.541 c 0,0 -0.297971,-14.6455833 0,-15.318 l 2.816,6.654 7.214,0.626 -5.468,4.744 1.647,7.049 z"/>
            </symbol>

        <symbol id="star-filled" viewBox="0 0 34 32">
            <title>star-filled</title>
            <path class="path-star-filled"
                  d="M16.941 25.621l10.179 6.144-2.701-11.579 8.993-7.791-11.842-1.005-4.628-10.92-4.628 10.92-11.842 1.005 8.993 7.791-2.701 11.579z"/>
        </symbol>

    </defs>
</svg>`,m;function h(){document.getElementById(`star-empty`)||document.body.insertAdjacentHTML(`afterbegin`,p)}function g(e){let t=Number(e)||0;return t>=3.3&&t<=3.7?3.5:t>=3.8&&t<=4.2?4:Math.max(0,Math.min(5,Math.round(t*2)/2))}function _(e=``){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#39;`)}function v(){return Array.from({length:5},()=>`
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
    `).join(``)}function y(e){let t=g(e),n=[`rating`,`medium`,`star-svg`,`label-hidden`,`direction-ltr`,`value-${Math.floor(t)}`];return t%1!=0&&n.push(`half`),`
    <div class="${n.join(` `)}" aria-label="Рейтинг ${t} з 5">
      <div class="label-value">${t}</div>
      <div class="star-container">
        ${v()}
      </div>
    </div>
  `}function b({author:e,text:t,rating:n}){return`
    <li class="feedback-item swiper-slide">
      <div class="feedback-card">
        ${y(n)}
        <p class="feedback-text">"${_(t)}"</p>
        <p class="feedback-author">${_(e)}</p>
      </div>
    </li>
  `}async function x(){let r=document.querySelector(`.feedback`),i=r?.querySelector(`.feedback-list`),a=r?.querySelector(`.feedback-slider`),o=r?.querySelector(`.feedback-pagination`),s=r?.querySelector(`.btn-prev`),c=r?.querySelector(`.btn-next`);if(!(!r||!i||!a||!o||!s||!c))try{h();let{reviews:r}=await f();if(!Array.isArray(r)||r.length===0){i.innerHTML=`
        <li class="feedback-item feedback-item--status">
          <p class="feedback-status">Наразі немає відгуків.</p>
        </li>
      `,s.disabled=!0,c.disabled=!0,o.innerHTML=``;return}i.innerHTML=r.slice(0,10).map(b).join(``),s.disabled=!1,c.disabled=!1,m&&m.destroy(!0,!0),m=new e(a,{modules:[n,t],slidesPerView:1,spaceBetween:16,watchOverflow:!0,navigation:{nextEl:c,prevEl:s,disabledClass:`is-disabled`},pagination:{el:o,clickable:!0,bulletClass:`feedback-pagination-bullet`,bulletActiveClass:`is-active`},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}})}catch(e){console.error(`Не вдалося завантажити відгуки:`,e),i.innerHTML=`
      <li class="feedback-item feedback-item--status">
        <p class="feedback-status">Не вдалося завантажити відгуки.</p>
      </li>
    `,s.disabled=!0,c.disabled=!0,o.innerHTML=``}}r.defaults.baseURL=`https://furniture-store-v2.b.goit.study/api`;async function S(e){try{if(!e)throw Error(`Order data is required`);let{data:t}=await r.post(i.ORDERS,e);return t}catch(e){throw e}}async function C(e){return S(e)}function w({name:e=``,phone:t=``}={}){let n={},r=e.trim(),i=t.replace(/\D/g,``);return r?(r.length<2||r.length>30)&&(n.name=`Ім'я має містити 2-30 літер`):n.name=`Введіть ім'я`,i?(i.length<10||i.length>12)&&(n.phone=`Телефон має містити 10-12 цифр`):n.phone=`Введіть номер телефону`,{isValid:Object.keys(n).length===0,errors:n}}var T={modelId:``,color:``,name:``},E={...T};function D(e={}){E={...E,...e}}function O(){return{...E}}function k(){E={...T}}function A(){let{orderModal:e,closeOrderModalBtn:t,orderForm:n}=s,r=document.querySelectorAll(`[data-order-modal-open], .order-btn`);!e||!n||(r&&r.length>0&&r.forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),j(N(e))})}),t?.addEventListener(`click`,M),e.addEventListener(`click`,t=>{t.target===e&&M()}),n.addEventListener(`submit`,async e=>{e.preventDefault(),L(n);let t=P(n),r=w(t);if(!r.isValid){F(n,r.errors);return}let i=O();if(!i.modelId||!i.color){alert(`Не вдалося визначити товар для замовлення. Відкрийте модалку товару ще раз.`);return}let a=e.currentTarget.querySelector(`[type="submit"]`);try{R(a,!0),await C({...t,modelId:i.modelId,color:i.color}),n.reset(),L(n),M(),alert(`Дякуємо! Ваше замовлення прийнято.`)}catch(e){let t=e.response?.data?.message||`Не вдалося оформити замовлення. Спробуйте ще раз.`;alert(t)}finally{R(a,!1)}}))}function j(e={}){D(e),s.orderModal.classList.remove(`is-hidden`),document.body.classList.add(`no-scroll`)}function M(){s.orderForm?.reset(),L(s.orderForm),k(),s.orderModal.classList.add(`is-hidden`),document.body.classList.remove(`no-scroll`)}function N(e){let t={modelId:e.dataset.modelId||``,color:e.dataset.color||``,name:e.dataset.productName||``},n=document.querySelector(`#product-modal input[name="color"]:checked`);return!t.color&&n&&(t.color=n.nextElementSibling?.style.backgroundColor||n.value||``),t}function P(e){let t=new FormData(e);return{name:String(t.get(`name`)||``).trim(),phone:String(t.get(`phone`)||``).replace(/\D/g,``),comment:String(t.get(`comment`)||``).trim()}}function F(e,t){I(e,`name`,t.name),I(e,`phone`,t.phone)}function I(e,t,n){if(!n)return;let r=e.elements.namedItem(t);if(!(r instanceof HTMLElement))return;r.classList.add(`is-error`);let i=r.closest(`.form-field`)?.querySelector(`.form-error`);i&&(i.textContent=n,i.style.opacity=`1`)}function L(e){if(!e)return;let t=e.querySelectorAll(`.form-input, .form-textarea`),n=e.querySelectorAll(`.form-error`);t.forEach(e=>e.classList.remove(`is-error`)),n.forEach(e=>{e.style.opacity=`0`})}function R(e,t){e&&(e.disabled=t,e.textContent=t?`Надсилаємо...`:`Надіслати заявку`)}l(),x(),A();
//# sourceMappingURL=index.js.map