import{r as e}from"./assets/rolldown-runtime-Cq0jCQ29.js";import{a as t,i as n,n as r,r as i,t as a}from"./assets/vendor-BzbmwG3r.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var o={CATEGORIES:`/categories`,FURNITURES:`/furnitures`,FURNITURE_BY_ID:e=>`/furnitures/${e}`,ORDERS:`/orders`,FEEDBACKS:`/feedbacks`},s=`(min-width: 1440px)`,c=document.querySelector(`[data-mobile-menu]`),l={mobileMenu:c,openMenuBtn:document.querySelector(`[data-menu-open]`),closeMenuBtn:c?.querySelector(`[data-menu-close]`),menuBackdrop:c?.querySelector(`[data-menu-backdrop]`),menuLinks:c?.querySelectorAll(`[data-nav-link]`)??[],body:document.body,orderModal:document.querySelector(`[data-order-modal]`),openOrderModalBtns:document.querySelectorAll(`[data-order-modal-open]`),closeOrderModalBtn:document.querySelector(`[data-order-modal-close]`),orderForm:document.querySelector(`[data-order-form]`)};function u(){let{mobileMenu:e,openMenuBtn:t,closeMenuBtn:n,menuBackdrop:r,menuLinks:i,body:a}=l;if(!e||!t||!n||!r)return;let o=window.matchMedia(s),c=t,u=()=>{o.matches||(c=document.activeElement,e.classList.remove(`is-hidden`),e.setAttribute(`aria-hidden`,`false`),t.setAttribute(`aria-expanded`,`true`),a.classList.add(`no-scroll`),n.focus())},d=(n=!0)=>{e.classList.add(`is-hidden`),e.setAttribute(`aria-hidden`,`true`),t.setAttribute(`aria-expanded`,`false`),a.classList.remove(`no-scroll`),n&&c instanceof HTMLElement&&c.focus()};t.addEventListener(`click`,u),n.addEventListener(`click`,()=>d()),r.addEventListener(`click`,()=>d()),i.forEach(e=>e.addEventListener(`click`,()=>d(!1))),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&d()}),o.addEventListener(`change`,e=>{e.matches&&d(!1)})}function d(){u()}r.defaults.baseURL=`https://furniture-store-v2.b.goit.study/api`;function ee(e){let t=Number(e)||0;return t>=3.3&&t<=3.7?3.5:t>=3.8&&t<=4.2?4:Math.max(0,Math.min(5,Math.round(t*2)/2))}function te(e={}){return{author:String(e.author??e.name??`Анонімний користувач`),text:String(e.text??e.descr??e.comment??``),rating:ee(e.rating??e.rate)}}async function ne(e=10){try{let{data:t}=await r.get(o.FEEDBACKS,{params:{limit:e}});if(!t||!Array.isArray(t.feedbacks))throw Error(`Invalid feedbacks format`);return{reviews:t.feedbacks.map(te),total:t.total,page:Number(t.page),limit:Number(t.limit)}}catch(e){throw e}}var f=`<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg"
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
</svg>`,p;function re(){document.getElementById(`star-empty`)||document.body.insertAdjacentHTML(`afterbegin`,f)}function ie(e){let t=Number(e)||0;return t>=3.3&&t<=3.7?3.5:t>=3.8&&t<=4.2?4:Math.max(0,Math.min(5,Math.round(t*2)/2))}function ae(e=``){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#39;`)}function oe(){return Array.from({length:5},()=>`
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
    `).join(``)}function se(e){let t=ie(e),n=[`rating`,`medium`,`star-svg`,`label-hidden`,`direction-ltr`,`value-${Math.floor(t)}`];return t%1!=0&&n.push(`half`),`
    <div class="${n.join(` `)}" aria-label="Рейтинг ${t} з 5">
      <div class="label-value">${t}</div>
      <div class="star-container">
        ${oe()}
      </div>
    </div>
  `}function ce({author:e,text:t,rating:n}){return`
    <li class="feedback-item swiper-slide">
      <div class="feedback-card">
        ${se(n)}
        <p class="feedback-text">"${ae(t)}"</p>
        <p class="feedback-author">${ae(e)}</p>
      </div>
    </li>
  `}async function le(){let e=document.querySelector(`.feedback`),r=e?.querySelector(`.feedback-list`),a=e?.querySelector(`.feedback-slider`),o=e?.querySelector(`.feedback-pagination`),s=e?.querySelector(`.btn-prev`),c=e?.querySelector(`.btn-next`);if(!(!e||!r||!a||!o||!s||!c))try{re();let{reviews:e}=await ne();if(!Array.isArray(e)||e.length===0){r.innerHTML=`
        <li class="feedback-item feedback-item--status">
          <p class="feedback-status">Наразі немає відгуків.</p>
        </li>
      `,s.disabled=!0,c.disabled=!0,o.innerHTML=``;return}r.innerHTML=e.slice(0,10).map(ce).join(``),s.disabled=!1,c.disabled=!1,p&&p.destroy(!0,!0),p=new t(a,{modules:[n,i],slidesPerView:1,spaceBetween:16,watchOverflow:!0,navigation:{nextEl:c,prevEl:s,disabledClass:`is-disabled`},pagination:{el:o,clickable:!0,bulletClass:`feedback-pagination-bullet`,bulletActiveClass:`is-active`},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}})}catch(e){console.error(`Не вдалося завантажити відгуки:`,e),r.innerHTML=`
      <li class="feedback-item feedback-item--status">
        <p class="feedback-status">Не вдалося завантажити відгуки.</p>
      </li>
    `,s.disabled=!0,c.disabled=!0,o.innerHTML=``}}var m=e(a(),1);r.defaults.baseURL=`https://furniture-store-v2.b.goit.study/api`;async function ue(e){try{if(!e)throw Error(`Order data is required`);let{data:t}=await r.post(o.ORDERS,e);return t}catch(e){throw e}}async function de(e){return ue(e)}function fe({name:e=``,phone:t=``,comment:n=``}={}){let r={},i=e.trim(),a=t.replace(/\D/g,``),o=n.trim();return i?(i.length<2||i.length>64)&&(r.name=`Ім'я має містити 2-64 символи`):r.name=`Введіть ім'я`,a?a.length!==12&&(r.phone=`Телефон має містити рівно 12 цифр`):r.phone=`Введіть номер телефону`,o&&(o.length<5||o.length>256)&&(r.comment=`Коментар має містити від 5 до 256 символів`),{isValid:Object.keys(r).length===0,errors:r}}var pe={hiddenClass:`is-hidden`,bodyLockClass:`no-scroll`,lockScroll:!0};function h(e,t={}){if(!e)return;let{hiddenClass:n,bodyLockClass:r,lockScroll:i}={...pe,...t};e.classList.add(n),e.setAttribute(`aria-hidden`,`true`),i&&document.body.classList.remove(r)}var me={hiddenClass:`is-hidden`,bodyLockClass:`no-scroll`,lockScroll:!0};function g(e,t={}){if(!e)return;let{hiddenClass:n,bodyLockClass:r,lockScroll:i}={...me,...t};e.classList.remove(n),e.setAttribute(`aria-hidden`,`false`),i&&document.body.classList.add(r)}var _={modelId:``,color:``,name:``},v={..._};function he(e={}){v={...v,...e}}function ge(){return{...v}}function _e(){v={..._}}var ve=null;function y(){return ve||=document.querySelector(`.loader`),ve}function b(){let e=y();e&&e.classList.add(`is-visible`)}function x(){let e=y();e&&e.classList.remove(`is-visible`)}var S=!1;function C(e){if(!e)return;let t=e.querySelectorAll(`.form-input, .form-textarea`),n=e.querySelectorAll(`.form-error`);t.forEach(e=>e.classList.remove(`is-error`)),n.forEach(e=>{e.textContent=e.dataset.defaultMessage||``,e.style.opacity=`0`})}function w(e,t,n){if(!n||!e)return;let r=e.elements.namedItem(t);if(!(r instanceof HTMLElement))return;r.classList.add(`is-error`);let i=r.closest(`.form-field`)?.querySelector(`.form-error`);i&&(i.textContent=n,i.style.opacity=`1`)}function ye(e,t){w(e,`name`,t.name),w(e,`phone`,t.phone),w(e,`comment`,t.comment)}function T(e,t){e&&(e.disabled=t,e.textContent=t?`Надсилаємо...`:`Надіслати заявку`)}function be(e){let t=new FormData(e);return{name:String(t.get(`name`)||``).trim(),phone:String(t.get(`phone`)||``).replace(/\D/g,``),comment:String(t.get(`comment`)||``).trim()}}function xe(e){return{modelId:e.dataset.modelId||``,color:e.dataset.color||``,name:e.dataset.productName||``}}function Se(e){let t=e.target.closest(`[data-order-modal-open]`);t&&(e.preventDefault(),E(xe(t)))}function Ce(e){e.key===`Escape`&&l.orderModal&&!l.orderModal.classList.contains(`is-hidden`)&&D()}function E(e={}){l.orderModal&&(he({modelId:e.modelId||``,color:e.color||``,name:e.name||``}),g(l.orderModal))}function D({resetForm:e=!0}={}){l.orderModal&&(e&&l.orderForm?.reset(),C(l.orderForm),_e(),h(l.orderModal))}function we(){if(S)return;let{orderModal:e,closeOrderModalBtn:t,orderForm:n}=l;!e||!n||(S=!0,n.querySelectorAll(`.form-error`).forEach(e=>{e.dataset.defaultMessage=e.textContent}),document.addEventListener(`click`,Se),document.addEventListener(`keydown`,Ce),t?.addEventListener(`click`,()=>D()),e.addEventListener(`click`,t=>{t.target===e&&D()}),n.addEventListener(`submit`,async e=>{e.preventDefault(),C(n);let t=be(n),r=fe(t);if(!r.isValid){ye(n,r.errors);return}let i=ge();if(!i.modelId||!i.color){m.default.error({title:`Помилка`,message:`Не вдалося визначити товар для замовлення. Відкрийте модалку товару ще раз.`,position:`topRight`});return}let a=e.currentTarget.querySelector(`[type="submit"]`),o={name:t.name,phone:t.phone,modelId:i.modelId,color:i.color};t.comment&&(o.comment=t.comment);try{T(a,!0),b(),await de(o),m.default.success({title:`Успіх`,message:`Дякуємо! Ваше замовлення прийнято.`,position:`topRight`}),D()}catch(e){m.default.error({title:`Помилка`,message:e.response?.data?.message||`Не вдалося оформити замовлення. Спробуйте ще раз.`,position:`topRight`})}finally{x(),T(a,!1)}}))}var Te=`/bug-hunters/assets/icons-B05t0GHi.svg`;r.defaults.baseURL=`https://furniture-store-v2.b.goit.study/api`;async function Ee(){try{let e=await r.get(o.CATEGORIES);if(!Array.isArray(e.data))throw Error(`Invalid data format`);return e.data}catch(e){throw e}}r.defaults.baseURL=`https://furniture-store-v2.b.goit.study/api`;async function De({page:e=1,limit:t=8,category:n=``}={}){try{let i={page:e,limit:t};n&&(i.category=n);let{data:a}=await r.get(o.FURNITURES,{params:i});if(!a||!Array.isArray(a.furnitures))throw Error(`Invalid furnitures format`);return a}catch(e){throw e}}async function Oe(e){try{if(!e)throw Error(`ID is required`);let{data:t}=await r.get(o.FURNITURE_BY_ID(e));return t}catch(e){throw e}}var O={overlay:document.querySelector(`[data-product-modal]`),closeButton:document.querySelector(`[data-product-modal-close]`),mainImage:document.querySelector(`[data-product-modal-main-image]`),thumbnails:document.querySelector(`[data-product-modal-thumbnails]`),title:document.querySelector(`[data-product-modal-title]`),category:document.querySelector(`[data-product-modal-category]`),price:document.querySelector(`[data-product-modal-price]`),rating:document.querySelector(`[data-product-modal-rating]`),colors:document.querySelector(`[data-product-modal-colors]`),description:document.querySelector(`[data-product-modal-description]`),sizes:document.querySelector(`[data-product-modal-sizes]`),orderButton:document.querySelector(`[data-product-modal-order]`)},k={product:null,selectedColor:``,mainImage:``},A=!1;function ke(){document.getElementById(`star-empty`)||document.body.insertAdjacentHTML(`afterbegin`,f)}function Ae(e){return`${Number(e||0).toLocaleString(`uk-UA`)} грн`}function je(e){let t=Number(e)||0;return t>=3.3&&t<=3.7?3.5:t>=3.8&&t<=4.2?4:Math.max(0,Math.min(5,Math.round(t*2)/2))}function Me(){return Array.from({length:5},()=>`
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
    `).join(``)}function Ne(e){let t=je(e),n=[`rating`,`medium`,`star-svg`,`label-hidden`,`direction-ltr`,`value-${Math.floor(t)}`];return t%1!=0&&n.push(`half`),`
    <div class="${n.join(` `)}" aria-label="Рейтинг ${t} з 5">
      <div class="label-value">${t}</div>
      <div class="star-container">
        ${Me()}
      </div>
    </div>
  `}function j(e){return Array.isArray(e)?[...new Set(e)].slice(0,3):[]}function Pe(e,t){O.thumbnails&&(O.thumbnails.innerHTML=e.map(e=>`
        <button
          class="product-modal__thumbnail ${e===t?`is-active`:``}"
          type="button"
          data-product-thumbnail="${e}"
          aria-label="Переглянути інше фото товару"
        >
          <img src="${e}" alt="${k.product?.name||`Товар`}" loading="lazy" />
        </button>
      `).join(``))}function M(e){O.colors&&(O.colors.innerHTML=e.map(e=>{let t=e===k.selectedColor;return`
        <button
          class="product-modal__color-btn ${t?`is-selected`:``}"
          type="button"
          data-product-color="${e}"
          style="--swatch-color: ${e};"
          aria-label="Обрати колір ${e}"
          aria-pressed="${t}"
        ></button>
      `}).join(``))}function N(e){O.mainImage&&(k.mainImage=e,e?O.mainImage.src=e:O.mainImage.removeAttribute(`src`),O.mainImage.alt=k.product?.name||`Товар`,O.thumbnails?.querySelectorAll(`[data-product-thumbnail]`).forEach(t=>{t.classList.toggle(`is-active`,t.dataset.productThumbnail===e)}))}function Fe(e){let t=Array.isArray(e.images)?e.images.filter(Boolean):[],n=j(e.color);k.product=e,k.selectedColor=n[0]||``,k.mainImage=t[0]||``,O.title.textContent=e.name||`Без назви`,O.category.textContent=e.category?.name||e.type||`Меблі`,O.price.textContent=Ae(e.price),O.rating.innerHTML=Ne(e.rate),O.description.textContent=e.description||`Опис тимчасово відсутній.`,O.sizes.textContent=e.sizes||`Не вказано`,N(k.mainImage),Pe(t,k.mainImage),M(n)}function Ie(e){e.target===O.overlay&&P()}function Le(e){let t=e.target.closest(`[data-product-thumbnail]`);if(t){N(t.dataset.productThumbnail||``);return}let n=e.target.closest(`[data-product-color]`);if(n){k.selectedColor=n.dataset.productColor||``,M(j(k.product?.color));return}e.target.closest(`[data-product-modal-order]`)&&k.product?._id&&k.selectedColor&&(P(),E({modelId:k.product._id,color:k.selectedColor,name:k.product.name}))}function Re(e){e.key===`Escape`&&O.overlay&&!O.overlay.classList.contains(`is-hidden`)&&P()}function ze(){A||!O.overlay||(A=!0,ke(),O.closeButton?.addEventListener(`click`,P),O.overlay.addEventListener(`click`,Ie),O.overlay.addEventListener(`click`,Le),document.addEventListener(`keydown`,Re))}async function Be(e){if(!(!e||!O.overlay)){b();try{Fe(await Oe(e)),g(O.overlay)}catch(e){m.default.error({title:`Помилка`,message:e.response?.data?.message||`Не вдалося завантажити деталі товару.`,position:`topRight`})}finally{x()}}}function P(){O.overlay&&h(O.overlay)}var Ve=`/bug-hunters/assets/all-goods-Hax69vCO.webp`,He=`/bug-hunters/assets/all-goods@2x-BysERup1.webp`,Ue=`/bug-hunters/assets/soft-furniture-ZL0q516E.webp`,We=`/bug-hunters/assets/soft-furniture@2x-fcapyOKM.webp`,Ge=`data:image/webp;base64,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`,Ke=`/bug-hunters/assets/wardrobe@2x-lyKXvzaE.webp`,qe=`/bug-hunters/assets/beds-DEFBnyti.webp`,Je=`/bug-hunters/assets/beds@2x-BAzJXQO4.webp`,Ye=`/bug-hunters/assets/tables-BffQDIU5.webp`,Xe=`/bug-hunters/assets/tables@2x-DIEwr06V.webp`,Ze=`/bug-hunters/assets/chairs-DwPrEXAY.webp`,Qe=`/bug-hunters/assets/chairs@2x-BuMPFlxn.webp`,$e=`/bug-hunters/assets/kitchens-0ICtv114.webp`,et=`/bug-hunters/assets/kitchens@2x-DBtwNX_B.webp`,tt=`/bug-hunters/assets/for-kids-pUrkrFd4.webp`,nt=`/bug-hunters/assets/for-kids@2x-DpdTQKlH.webp`,rt=`/bug-hunters/assets/for-office-B9OQHvzH.webp`,it=`/bug-hunters/assets/for-office@2x-DsCQ_JoZ.webp`,at=`/bug-hunters/assets/for-hallway-BmvCIYEV.webp`,ot=`/bug-hunters/assets/for-hallway@2x-D1YFkjc3.webp`,st=`/bug-hunters/assets/for-bathroom-BnAVKjmO.webp`,ct=`/bug-hunters/assets/for-bathroom@2x-D749-2zn.webp`,lt=`/bug-hunters/assets/for-outdoor-C21nTBaQ.webp`,ut=`/bug-hunters/assets/for-outdoor@2x-DR1vlrR-.webp`,dt=`/bug-hunters/assets/accessories-BryIR9p8.webp`,ft=`/bug-hunters/assets/accessories@2x-DNDncR1H.webp`,F=`Всі товари`,I=new WeakMap,L={"Всі товари":{img:Ve,img2x:He},"М'які меблі":{img:Ue,img2x:We},"Шафи та системи зберігання":{img:Ge,img2x:Ke},"Ліжка та матраци":{img:qe,img2x:Je},Столи:{img:Ye,img2x:Xe},"Стільці та табурети":{img:Ze,img2x:Qe},Кухні:{img:$e,img2x:et},"Меблі для дитячої":{img:tt,img2x:nt},"Меблі для офісу":{img:rt,img2x:it},"Меблі для передпокою":{img:at,img2x:ot},"Меблі для ванної кімнати":{img:st,img2x:ct},"Садові та вуличні меблі":{img:lt,img2x:ut},"Декор та аксесуари":{img:dt,img2x:ft}};function R(e){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#39;`)}function z(){return[{id:`all`,name:F}]}function pt(e){if(!Array.isArray(e))return z();let t=z(),n=new Set([`all`]);return e.forEach(e=>{let r=String(e?._id??e?.id??``).trim(),i=String(e?.name??``).trim();!r||!i||n.has(r)||(n.add(r),t.push({id:r,name:i}))}),t}function mt(e){return L[e]||L[`Всі товари`]}function ht(e){return Array.isArray(e)?e.map(e=>{let t=String(e?.id??``).trim(),n=String(e?.name??``).trim();if(!t||!n)return``;let r=mt(n),i=R(t),a=R(n);return`
        <li class="categories-list__item">
          <button
            class="category-btn ${t===`all`?`is-active`:``}"
            type="button"
            data-category-id="${i}"
            data-category-name="${a}"
            aria-pressed="${t===`all`}"
          >
            <img src="${r.img}" srcset="${r.img} 1x, ${r.img2x} 2x" alt="${a}" class="fill-image" />
            <span>${a}</span>
          </button>
        </li>
      `}).join(``):``}function gt(e,t){e&&e.querySelectorAll(`.category-btn`).forEach(e=>{let n=e.dataset.categoryId===t;e.classList.toggle(`is-active`,n),e.setAttribute(`aria-pressed`,String(n))})}function B(e,t,n){if(!e)return;e.innerHTML=ht(t);let r=I.get(e);r&&e.removeEventListener(`click`,r);let i=t=>{let r=t.target.closest(`.category-btn`);if(!r)return;let i={id:r.dataset.categoryId||`all`,name:r.dataset.categoryName||`Всі товари`};gt(e,i.id),typeof n==`function`&&n(i)};I.set(e,i),e.addEventListener(`click`,i)}var _t=class{constructor({selector:e,isHidden:t=!0}){this.button=document.querySelector(e),this.container=this.button?.closest(`.load-more`)||null,this.button&&t&&this.hide()}show(){this.button&&this.button.classList.remove(`is-hidden`),this.container&&this.container.classList.remove(`is-hidden`)}hide(){this.button&&this.button.classList.add(`is-hidden`),this.container&&this.container.classList.add(`is-hidden`)}disable(){this.button&&(this.button.disabled=!0)}enable(){this.button&&(this.button.disabled=!1)}checkHasMore(e,t){return e>=t?(this.hide(),!1):(this.show(),!0)}},vt=`[data-products-list]`;function V(e){return e||document.querySelector(vt)}function H(e){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#39;`)}function yt(e){return`${Number(e||0).toLocaleString(`uk-UA`)} грн`}function bt(e){return Array.isArray(e)?[...new Set(e)].slice(0,3):[]}function xt(e){let t=e.replace(`#`,``);if(![3,6].includes(t.length))return!1;let n=t.length===3?t.split(``).map(e=>`${e}${e}`).join(``):t,r=parseInt(n.slice(0,2),16),i=parseInt(n.slice(2,4),16),a=parseInt(n.slice(4,6),16);return(r*299+i*587+a*114)/1e3<128}function U(e){let t=H(e?._id??e?.id??``),n=H(e?.name??`Без назви`),r=H(e?.images?.[0]??``),i=yt(e?.price);return`
    <li class="product-card" data-product-id="${t}">
      <div class="product-card__image-wrapper">
        <img src="${r}" alt="${n}" class="product-card__img" loading="lazy" />
      </div>

      <div class="product-card__content">
        <h3 class="product-card__title">${n}</h3>

        <ul class="product-card__colors" aria-label="Доступні кольори">
          ${bt(e?.color).map(e=>{let t=H(e);return`
        <li class="product-card__color${xt(e)?` product-card__color--dark`:``}" style="background-color: ${t};">
          <span class="visually-hidden">Колір ${t}</span>
        </li>
      `}).join(``)}
        </ul>

        <p class="product-card__price">${i}</p>
      </div>

      <button class="product-card__btn" type="button" data-product-details data-product-id="${t}">
        Детальніше
      </button>
    </li>
  `}function St(e,t){let n=V(t);n&&(n.innerHTML=e.map(U).join(``))}function Ct(e,t){let n=V(t);n&&n.insertAdjacentHTML(`beforeend`,e.map(U).join(``))}function W(e){let t=V(e);t&&(t.innerHTML=``)}var wt=`(max-width: 767.98px)`,G={categoriesList:document.querySelector(`[data-categories-list]`),productsList:document.querySelector(`[data-products-list]`),pagination:document.querySelector(`[data-products-pagination]`)},K=new _t({selector:`[data-load-more]`,isHidden:!0}),q={activeCategoryId:`all`,activeCategoryName:F,currentPage:1,limit:8,totalItems:0,totalPages:0,selectedProductId:``,selectedColor:``},J=window.matchMedia(wt),Y=!1;function X(){return J.matches}function Tt(){return q.activeCategoryId===`all`?``:q.activeCategoryId}function Z(e){if(e){b(),K.disable();return}x(),K.enable()}function Et(e){G.productsList&&(G.productsList.innerHTML=`
    <li class="products-list__empty">
      <p>${e}</p>
    </li>
  `)}function Dt(){if(!G.pagination)return;if(X()||q.totalPages<=1||q.totalItems===0){G.pagination.innerHTML=``,G.pagination.classList.add(`is-hidden`);return}let e=Array.from({length:q.totalPages},(e,t)=>{let n=t+1,r=n===q.currentPage;return`
      <button
        class="products-pagination__button ${r?`is-active`:``}"
        type="button"
        data-page="${n}"
        aria-label="Сторінка ${n}"
        aria-current="${r?`page`:`false`}"
      >
        ${n}
      </button>
    `}).join(``);G.pagination.innerHTML=`
    <button
      class="products-pagination__button products-pagination__button--arrow btn-prev"
      type="button"
      data-page="${Math.max(1,q.currentPage-1)}"
      aria-label="Попередня сторінка"
      ${q.currentPage===1?`disabled`:``}
    >
      <svg class="btn-icon" width="20" height="20" aria-hidden="true">
        <use href="${Te}#icon-left-arrow-alt"></use>
      </svg>
    </button>
    ${e}
    <button
      class="products-pagination__button products-pagination__button--arrow btn-next"
      type="button"
      data-page="${Math.min(q.totalPages,q.currentPage+1)}"
      aria-label="Наступна сторінка"
      ${q.currentPage===q.totalPages?`disabled`:``}
    >
      <svg class="btn-icon" width="20" height="20" aria-hidden="true">
        <use href="${Te}#icon-right-arrow-alt"></use>
      </svg>
    </button>
  `,G.pagination.classList.remove(`is-hidden`)}function Ot(){if(!X()||q.totalItems===0){K.hide();return}K.checkHasMore(q.currentPage,q.totalPages)}function Q(){Dt(),Ot()}function kt(e){q.currentPage=Number(e.page)||1,q.totalItems=Number(e.totalItems)||0,q.totalPages=Math.max(1,Math.ceil(q.totalItems/q.limit))}async function $({page:e=1,append:t=!1}={}){Z(!0);try{let n=await De({page:e,limit:q.limit,category:Tt()});if(kt(n),!n.furnitures.length){W(G.productsList),Et(`За цією категорією товарів поки немає.`),Q();return}t?Ct(n.furnitures,G.productsList):St(n.furnitures,G.productsList),Q()}catch(e){W(G.productsList),Et(`Не вдалося завантажити товари. Спробуйте ще раз.`),m.default.error({title:`Помилка`,message:e.response?.data?.message||`Не вдалося завантажити список меблів.`,position:`topRight`}),q.totalItems=0,q.totalPages=0,Q()}finally{Z(!1)}}async function At(){b();try{let e=pt(await Ee());B(G.categoriesList,e,async e=>{q.activeCategoryId=e.id,q.activeCategoryName=e.name,q.currentPage=1,W(G.productsList),await $({page:1,append:!1})})}catch(e){B(G.categoriesList,z(),async e=>{q.activeCategoryId=e.id,q.activeCategoryName=e.name,q.currentPage=1,W(G.productsList),await $({page:1,append:!1})}),m.default.error({title:`Помилка`,message:e.response?.data?.message||`Не вдалося завантажити категорії. Показуємо всі товари.`,position:`topRight`})}finally{x()}}async function jt(){!X()||q.currentPage>=q.totalPages||await $({page:q.currentPage+1,append:!0})}async function Mt(e){let t=e.target.closest(`[data-page]`);if(!t||t.disabled||X())return;let n=Number(t.dataset.page);!n||n===q.currentPage||await $({page:n,append:!1})}async function Nt(e){let t=e.target.closest(`[data-product-details]`);if(!t)return;let n=t.dataset.productId;n&&(q.selectedProductId=n,await Be(n))}async function Pt(){q.currentPage=1,W(G.productsList),await $({page:1,append:!1})}async function Ft(){Y||!G.categoriesList||!G.productsList||!G.pagination||(Y=!0,ze(),G.productsList.addEventListener(`click`,Nt),G.pagination.addEventListener(`click`,Mt),K.button?.addEventListener(`click`,jt),J.addEventListener(`change`,Pt),await At(),await $({page:1,append:!1}))}d(),le(),we(),Ft();
//# sourceMappingURL=index.js.map