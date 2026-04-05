import{r as e}from"./assets/rolldown-runtime-Cq0jCQ29.js";import{a as t,i as n,n as r,o as i,r as a,t as o}from"./assets/vendor-Bu8pUOGg.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var s=e(i(),1);function c(e){return e?new s.default(e,{duration:220,showMultiple:!1,collapse:!0}):null}var l;function ee(){let e=document.querySelector(`.accordion-container`);e&&(l&&l.destroy(),l=c(e))}var u={CATEGORIES:`/categories`,FURNITURES:`/furnitures`,FURNITURE_BY_ID:e=>`/furnitures/${e}`,ORDERS:`/orders`,FEEDBACKS:`/feedbacks`},te=`(min-width: 1440px)`,d=document.querySelector(`[data-mobile-menu]`),f={mobileMenu:d,openMenuBtn:document.querySelector(`[data-menu-open]`),closeMenuBtn:d?.querySelector(`[data-menu-close]`),menuBackdrop:d?.querySelector(`[data-menu-backdrop]`),menuLinks:d?.querySelectorAll(`[data-nav-link]`)??[],body:document.body,orderModal:document.querySelector(`[data-order-modal]`),openOrderModalBtns:document.querySelectorAll(`[data-order-modal-open]`),closeOrderModalBtn:document.querySelector(`[data-order-modal-close]`),orderForm:document.querySelector(`[data-order-form]`)};function ne(){let{mobileMenu:e,openMenuBtn:t,closeMenuBtn:n,menuBackdrop:r,menuLinks:i,body:a}=f;if(!e||!t||!n||!r)return;let o=window.matchMedia(te),s=t,c=()=>{o.matches||(s=document.activeElement,e.classList.remove(`is-hidden`),e.setAttribute(`aria-hidden`,`false`),t.setAttribute(`aria-expanded`,`true`),a.classList.add(`no-scroll`),n.focus())},l=(n=!0)=>{e.classList.add(`is-hidden`),e.setAttribute(`aria-hidden`,`true`),t.setAttribute(`aria-expanded`,`false`),a.classList.remove(`no-scroll`),n&&s instanceof HTMLElement&&s.focus()};t.addEventListener(`click`,c),n.addEventListener(`click`,()=>l()),r.addEventListener(`click`,()=>l()),i.forEach(e=>e.addEventListener(`click`,()=>l(!1))),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&l()}),o.addEventListener(`change`,e=>{e.matches&&l(!1)})}function re(){ne()}r.defaults.baseURL=`https://furniture-store-v2.b.goit.study/api`;function ie(e){let t=Number(e)||0;return t>=3.3&&t<=3.7?3.5:t>=3.8&&t<=4.2?4:Math.max(0,Math.min(5,Math.round(t*2)/2))}function ae(e={}){return{author:String(e.author??e.name??`Анонімний користувач`),text:String(e.text??e.descr??e.comment??``),rating:ie(e.rating??e.rate)}}async function oe(e=10){try{let{data:t}=await r.get(u.FEEDBACKS,{params:{limit:e}});if(!t||!Array.isArray(t.feedbacks))throw Error(`Invalid feedbacks format`);return{reviews:t.feedbacks.map(ae),total:t.total,page:Number(t.page),limit:Number(t.limit)}}catch(e){throw e}}var p=e(o(),1);function se(e){p.default.show({title:`Успіх`,message:e,position:`topRight`,timeout:3e3,class:`toast-success`})}function m(e){p.default.show({title:`Помилка`,message:e,position:`topRight`,timeout:3e3,class:`toast-error`})}var ce=`<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg"
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
</svg>`,h;function le(){document.getElementById(`star-empty`)||document.body.insertAdjacentHTML(`afterbegin`,ce)}function ue(e){let t=Number(e)||0;return t>=3.3&&t<=3.7?3.5:t>=3.8&&t<=4.2?4:Math.max(0,Math.min(5,Math.round(t*2)/2))}function g(e=``){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#39;`)}function de(){return Array.from({length:5},()=>`
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
    `).join(``)}function fe(e){let t=ue(e),n=[`rating`,`medium`,`star-svg`,`label-hidden`,`direction-ltr`,`value-${Math.floor(t)}`];return t%1!=0&&n.push(`half`),`
    <div class="${n.join(` `)}" aria-label="Рейтинг ${t} з 5">
      <div class="label-value">${t}</div>
      <div class="star-container">
        ${de()}
      </div>
    </div>
  `}function pe({author:e,text:t,rating:n}){return`
    <li class="feedback-item swiper-slide">
      <div class="feedback-card">
        ${fe(n)}
        <p class="feedback-text">"${g(t)}"</p>
        <p class="feedback-author">${g(e)}</p>
      </div>
    </li>
  `}async function me(){let e=document.querySelector(`.feedback`),r=e?.querySelector(`.feedback-list`),i=e?.querySelector(`.feedback-slider`),o=e?.querySelector(`.feedback-pagination`),s=e?.querySelector(`.btn-prev`),c=e?.querySelector(`.btn-next`);if(!(!e||!r||!i||!o||!s||!c))try{le();let{reviews:e}=await oe();if(!Array.isArray(e)||e.length===0){r.innerHTML=`
        <li class="feedback-item feedback-item--status">
          <p class="feedback-status">Наразі немає відгуків.</p>
        </li>
      `,s.disabled=!0,c.disabled=!0,o.innerHTML=``;return}r.innerHTML=e.slice(0,10).map(pe).join(``),s.disabled=!1,c.disabled=!1,h&&h.destroy(!0,!0),h=new t(i,{modules:[n,a],slidesPerView:1,spaceBetween:16,watchOverflow:!0,navigation:{nextEl:c,prevEl:s,disabledClass:`is-disabled`},pagination:{el:o,clickable:!0,bulletClass:`feedback-pagination-bullet`,bulletActiveClass:`is-active`},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}})}catch(e){r.innerHTML=`
      <li class="feedback-item feedback-item--status">
        <p class="feedback-status">Не вдалося завантажити відгуки.</p>
      </li>
    `,s.disabled=!0,c.disabled=!0,o.innerHTML=``,m(e.response?.data?.message||`Не вдалося завантажити відгуки.`)}}r.defaults.baseURL=`https://furniture-store-v2.b.goit.study/api`;async function he(e){try{if(!e)throw Error(`Order data is required`);let{data:t}=await r.post(u.ORDERS,e);return t}catch(e){throw e}}async function ge(e){return he(e)}function _e({name:e=``,phone:t=``,comment:n=``}={}){let r={},i=e.trim(),a=t.replace(/\D/g,``),o=n.trim();return i?(i.length<2||i.length>64)&&(r.name=`Ім'я має містити 2-64 символи`):r.name=`Введіть ім'я`,a?a.length!==12&&(r.phone=`Телефон має містити рівно 12 цифр`):r.phone=`Введіть номер телефону`,o&&(o.length<5||o.length>256)&&(r.comment=`Коментар має містити від 5 до 256 символів`),{isValid:Object.keys(r).length===0,errors:r}}function _(e){e&&(e.classList.add(`is-hidden`),e.setAttribute(`aria-hidden`,`true`),document.body.classList.remove(`no-scroll`))}function v(e){e&&(e.classList.remove(`is-hidden`),e.setAttribute(`aria-hidden`,`false`),document.body.classList.add(`no-scroll`))}var y={modelId:``,color:``,name:``},b={...y};function ve(e={}){b={...b,...e}}function ye(){return{...b}}function be(){b={...y}}var x=null;function S(){return x||=document.querySelector(`.loader`),x}function C(){let e=S();e&&e.classList.add(`is-visible`)}function w(){let e=S();e&&e.classList.remove(`is-visible`)}var T=!1;function E(e){if(!e)return;let t=e.querySelectorAll(`.form-input, .form-textarea`),n=e.querySelectorAll(`.form-error`);t.forEach(e=>e.classList.remove(`is-error`)),n.forEach(e=>{e.textContent=e.dataset.defaultMessage||``,e.style.opacity=`0`})}function D(e,t,n){if(!n||!e)return;let r=e.elements.namedItem(t);if(!(r instanceof HTMLElement))return;r.classList.add(`is-error`);let i=r.closest(`.form-field`)?.querySelector(`.form-error`);i&&(i.textContent=n,i.style.opacity=`1`)}function xe(e,t){D(e,`name`,t.name),D(e,`phone`,t.phone),D(e,`comment`,t.comment)}function O(e,t){e&&(e.disabled=t,e.textContent=t?`Надсилаємо...`:`Надіслати заявку`)}function Se(e){let t=new FormData(e);return{name:String(t.get(`name`)||``).trim(),phone:String(t.get(`phone`)||``).replace(/\D/g,``),comment:String(t.get(`comment`)||``).trim()}}function Ce(e){return{modelId:e.dataset.modelId||``,color:e.dataset.color||``,name:e.dataset.productName||``}}function we(e){let t=e.target.closest(`[data-order-modal-open]`);t&&(e.preventDefault(),k(Ce(t)))}function Te(e){e.key===`Escape`&&f.orderModal&&!f.orderModal.classList.contains(`is-hidden`)&&A()}function k(e={}){f.orderModal&&(ve({modelId:e.modelId||``,color:e.color||``,name:e.name||``}),v(f.orderModal))}function A({resetForm:e=!0}={}){f.orderModal&&(e&&f.orderForm?.reset(),E(f.orderForm),be(),_(f.orderModal))}function Ee(){if(T)return;let{orderModal:e,closeOrderModalBtn:t,orderForm:n}=f;!e||!n||(T=!0,n.querySelectorAll(`.form-error`).forEach(e=>{e.dataset.defaultMessage=e.textContent}),document.addEventListener(`click`,we),document.addEventListener(`keydown`,Te),t?.addEventListener(`click`,()=>A()),e.addEventListener(`click`,t=>{t.target===e&&A()}),n.addEventListener(`submit`,async e=>{e.preventDefault(),E(n);let t=Se(n),r=_e(t);if(!r.isValid){xe(n,r.errors);return}let i=ye();if(!i.modelId||!i.color){m(`Не вдалося визначити товар для замовлення. Відкрийте модалку товару ще раз.`);return}let a=e.currentTarget.querySelector(`[type="submit"]`),o={name:t.name,phone:t.phone,modelId:i.modelId,color:i.color};t.comment&&(o.comment=t.comment);try{O(a,!0),C(),await ge(o),se(`Дякуємо! Ваше замовлення прийнято.`),A()}catch(e){m(e.response?.data?.message||`Не вдалося оформити замовлення. Спробуйте ще раз.`)}finally{w(),O(a,!1)}}))}var j=`/bug-hunters/assets/icons-B05t0GHi.svg`;r.defaults.baseURL=`https://furniture-store-v2.b.goit.study/api`;async function De(){try{let e=await r.get(u.CATEGORIES);if(!Array.isArray(e.data))throw Error(`Invalid data format`);return e.data}catch(e){throw e}}r.defaults.baseURL=`https://furniture-store-v2.b.goit.study/api`;async function Oe({page:e=1,limit:t=8,category:n=``}={}){try{let i={page:e,limit:t};n&&(i.category=n);let{data:a}=await r.get(u.FURNITURES,{params:i});if(!a||!Array.isArray(a.furnitures))throw Error(`Invalid furnitures format`);return a}catch(e){throw e}}async function ke(e){try{if(!e)throw Error(`ID is required`);let{data:t}=await r.get(u.FURNITURE_BY_ID(e));return t}catch(e){throw e}}var M={overlay:document.querySelector(`[data-product-modal]`),closeButton:document.querySelector(`[data-product-modal-close]`),mainImage:document.querySelector(`[data-product-modal-main-image]`),thumbnails:document.querySelector(`[data-product-modal-thumbnails]`),title:document.querySelector(`[data-product-modal-title]`),category:document.querySelector(`[data-product-modal-category]`),price:document.querySelector(`[data-product-modal-price]`),rating:document.querySelector(`[data-product-modal-rating]`),colors:document.querySelector(`[data-product-modal-colors]`),description:document.querySelector(`[data-product-modal-description]`),sizes:document.querySelector(`[data-product-modal-sizes]`),orderButton:document.querySelector(`[data-product-modal-order]`)},N={product:null,selectedColor:``,mainImage:``},P=!1;function Ae(){document.getElementById(`star-empty`)||document.body.insertAdjacentHTML(`afterbegin`,ce)}function je(e){return`${Number(e||0).toLocaleString(`uk-UA`)} грн`}function Me(e){let t=Number(e)||0;return t>=3.3&&t<=3.7?3.5:t>=3.8&&t<=4.2?4:Math.max(0,Math.min(5,Math.round(t*2)/2))}function Ne(){return Array.from({length:5},()=>`
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
    `).join(``)}function Pe(e){let t=Me(e),n=[`rating`,`medium`,`star-svg`,`label-hidden`,`direction-ltr`,`value-${Math.floor(t)}`];return t%1!=0&&n.push(`half`),`
    <div class="${n.join(` `)}" aria-label="Рейтинг ${t} з 5">
      <div class="label-value">${t}</div>
      <div class="star-container">
        ${Ne()}
      </div>
    </div>
  `}function F(e){return Array.isArray(e)?[...new Set(e)].slice(0,3):[]}function Fe(e,t){M.thumbnails&&(M.thumbnails.innerHTML=e.map(e=>`
        <button
          class="product-modal__thumbnail ${e===t?`is-active`:``}"
          type="button"
          data-product-thumbnail="${e}"
          aria-label="Переглянути інше фото товару"
        >
          <img src="${e}" alt="${N.product?.name||`Товар`}" loading="lazy" />
        </button>
      `).join(``))}function I(e){M.colors&&(M.colors.innerHTML=e.map(e=>{let t=e===N.selectedColor;return`
        <button
          class="product-modal__color-btn ${t?`is-selected`:``}"
          type="button"
          data-product-color="${e}"
          style="--swatch-color: ${e};"
          aria-label="Обрати колір ${e}"
          aria-pressed="${t}"
        ></button>
      `}).join(``))}function L(e){M.mainImage&&(N.mainImage=e,e?M.mainImage.src=e:M.mainImage.removeAttribute(`src`),M.mainImage.alt=N.product?.name||`Товар`,M.thumbnails?.querySelectorAll(`[data-product-thumbnail]`).forEach(t=>{t.classList.toggle(`is-active`,t.dataset.productThumbnail===e)}))}function Ie(e){let t=Array.isArray(e.images)?e.images.filter(Boolean):[],n=F(e.color);N.product=e,N.selectedColor=n[0]||``,N.mainImage=t[0]||``,M.title.textContent=e.name||`Без назви`,M.category.textContent=e.category?.name||e.type||`Меблі`,M.price.textContent=je(e.price),M.rating.innerHTML=Pe(e.rate),M.description.textContent=e.description||`Опис тимчасово відсутній.`,M.sizes.textContent=e.sizes||`Не вказано`,L(N.mainImage),Fe(t,N.mainImage),I(n)}function Le(e){e.target===M.overlay&&R()}function Re(e){let t=e.target.closest(`[data-product-thumbnail]`);if(t){L(t.dataset.productThumbnail||``);return}let n=e.target.closest(`[data-product-color]`);if(n){N.selectedColor=n.dataset.productColor||``,I(F(N.product?.color));return}e.target.closest(`[data-product-modal-order]`)&&N.product?._id&&N.selectedColor&&(R(),k({modelId:N.product._id,color:N.selectedColor,name:N.product.name}))}function ze(e){e.key===`Escape`&&M.overlay&&!M.overlay.classList.contains(`is-hidden`)&&R()}function Be(){P||!M.overlay||(P=!0,Ae(),M.closeButton?.addEventListener(`click`,R),M.overlay.addEventListener(`click`,Le),M.overlay.addEventListener(`click`,Re),document.addEventListener(`keydown`,ze))}async function Ve(e){if(!(!e||!M.overlay)){C();try{Ie(await ke(e)),v(M.overlay)}catch(e){m(e.response?.data?.message||`Не вдалося завантажити деталі товару.`)}finally{w()}}}function R(){M.overlay&&_(M.overlay)}var He=`/bug-hunters/assets/all-goods-Hax69vCO.webp`,Ue=`/bug-hunters/assets/all-goods@2x-BysERup1.webp`,We=`/bug-hunters/assets/soft-furniture-ZL0q516E.webp`,Ge=`/bug-hunters/assets/soft-furniture@2x-fcapyOKM.webp`,Ke=`data:image/webp;base64,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`,qe=`/bug-hunters/assets/wardrobe@2x-lyKXvzaE.webp`,Je=`/bug-hunters/assets/beds-DEFBnyti.webp`,Ye=`/bug-hunters/assets/beds@2x-BAzJXQO4.webp`,Xe=`/bug-hunters/assets/tables-BffQDIU5.webp`,Ze=`/bug-hunters/assets/tables@2x-DIEwr06V.webp`,Qe=`/bug-hunters/assets/chairs-DwPrEXAY.webp`,$e=`/bug-hunters/assets/chairs@2x-BuMPFlxn.webp`,et=`/bug-hunters/assets/kitchens-0ICtv114.webp`,tt=`/bug-hunters/assets/kitchens@2x-DBtwNX_B.webp`,nt=`/bug-hunters/assets/for-kids-pUrkrFd4.webp`,rt=`/bug-hunters/assets/for-kids@2x-DpdTQKlH.webp`,it=`/bug-hunters/assets/for-office-B9OQHvzH.webp`,at=`/bug-hunters/assets/for-office@2x-DsCQ_JoZ.webp`,ot=`/bug-hunters/assets/for-hallway-BmvCIYEV.webp`,st=`/bug-hunters/assets/for-hallway@2x-D1YFkjc3.webp`,ct=`/bug-hunters/assets/for-bathroom-BnAVKjmO.webp`,lt=`/bug-hunters/assets/for-bathroom@2x-D749-2zn.webp`,ut=`/bug-hunters/assets/for-outdoor-C21nTBaQ.webp`,dt=`/bug-hunters/assets/for-outdoor@2x-DR1vlrR-.webp`,ft=`/bug-hunters/assets/accessories-BryIR9p8.webp`,pt=`/bug-hunters/assets/accessories@2x-DNDncR1H.webp`,z=`Всі товари`,B=new WeakMap,V={"Всі товари":{img:He,img2x:Ue},"М'які меблі":{img:We,img2x:Ge},"Шафи та системи зберігання":{img:Ke,img2x:qe},"Ліжка та матраци":{img:Je,img2x:Ye},Столи:{img:Xe,img2x:Ze},"Стільці та табурети":{img:Qe,img2x:$e},Кухні:{img:et,img2x:tt},"Меблі для дитячої":{img:nt,img2x:rt},"Меблі для офісу":{img:it,img2x:at},"Меблі для передпокою":{img:ot,img2x:st},"Меблі для ванної кімнати":{img:ct,img2x:lt},"Садові та вуличні меблі":{img:ut,img2x:dt},"Декор та аксесуари":{img:ft,img2x:pt}};function H(e){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#39;`)}function U(){return[{id:`all`,name:z}]}function mt(e){if(!Array.isArray(e))return U();let t=U(),n=new Set([`all`]);return e.forEach(e=>{let r=String(e?._id??e?.id??``).trim(),i=String(e?.name??``).trim();!r||!i||n.has(r)||(n.add(r),t.push({id:r,name:i}))}),t}function ht(e){return V[e]||V[`Всі товари`]}function gt(e){return Array.isArray(e)?e.map(e=>{let t=String(e?.id??``).trim(),n=String(e?.name??``).trim();if(!t||!n)return``;let r=ht(n),i=H(t),a=H(n);return`
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
      `}).join(``):``}function _t(e,t){e&&e.querySelectorAll(`.category-btn`).forEach(e=>{let n=e.dataset.categoryId===t;e.classList.toggle(`is-active`,n),e.setAttribute(`aria-pressed`,String(n))})}function W(e,t,n){if(!e)return;e.innerHTML=gt(t);let r=B.get(e);r&&e.removeEventListener(`click`,r);let i=t=>{let r=t.target.closest(`.category-btn`);if(!r)return;let i={id:r.dataset.categoryId||`all`,name:r.dataset.categoryName||`Всі товари`};_t(e,i.id),typeof n==`function`&&n(i)};B.set(e,i),e.addEventListener(`click`,i)}var vt=class{constructor({selector:e,isHidden:t=!0}){this.button=document.querySelector(e),this.container=this.button?.closest(`.load-more`)||null,this.button&&t&&this.hide()}show(){this.button&&this.button.classList.remove(`is-hidden`),this.container&&this.container.classList.remove(`is-hidden`)}hide(){this.button&&this.button.classList.add(`is-hidden`),this.container&&this.container.classList.add(`is-hidden`)}disable(){this.button&&(this.button.disabled=!0)}enable(){this.button&&(this.button.disabled=!1)}checkHasMore(e,t){return e>=t?(this.hide(),!1):(this.show(),!0)}},yt=`[data-products-list]`;function G(e){return e||document.querySelector(yt)}function K(e){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#39;`)}function bt(e){return`${Number(e||0).toLocaleString(`uk-UA`)} грн`}function xt(e){return Array.isArray(e)?[...new Set(e)].slice(0,3):[]}function St(e){let t=e.replace(`#`,``);if(![3,6].includes(t.length))return!1;let n=t.length===3?t.split(``).map(e=>`${e}${e}`).join(``):t,r=parseInt(n.slice(0,2),16),i=parseInt(n.slice(2,4),16),a=parseInt(n.slice(4,6),16);return(r*299+i*587+a*114)/1e3<128}function Ct(e){let t=K(e?._id??e?.id??``),n=K(e?.name??`Без назви`),r=K(e?.images?.[0]??``),i=bt(e?.price);return`
    <li class="product-card" data-product-id="${t}">
      <div class="product-card__image-wrapper">
        <img src="${r}" alt="${n}" class="product-card__img" loading="lazy" />
      </div>

      <div class="product-card__content">
        <h3 class="product-card__title">${n}</h3>

        <ul class="product-card__colors" aria-label="Доступні кольори">
          ${xt(e?.color).map(e=>{let t=K(e);return`
        <li class="product-card__color${St(e)?` product-card__color--dark`:``}" style="background-color: ${t};">
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
  `}function wt(e,t){let n=G(t);n&&(n.innerHTML=e.map(Ct).join(``))}function Tt(e,t){let n=G(t);n&&n.insertAdjacentHTML(`beforeend`,e.map(Ct).join(``))}function q(e){let t=G(e);t&&(t.innerHTML=``)}var Et=`(max-width: 767.98px)`,J={categoriesList:document.querySelector(`[data-categories-list]`),productsList:document.querySelector(`[data-products-list]`),pagination:document.querySelector(`[data-products-pagination]`)},Y=new vt({selector:`[data-load-more]`,isHidden:!0}),X={activeCategoryId:`all`,activeCategoryName:z,currentPage:1,limit:8,totalItems:0,totalPages:0,selectedProductId:``,selectedColor:``},Dt=window.matchMedia(Et),Ot=!1;function Z(){return Dt.matches}function kt(){return X.activeCategoryId===`all`?``:X.activeCategoryId}function At(e){if(e){C(),Y.disable();return}w(),Y.enable()}function jt(e){J.productsList&&(J.productsList.innerHTML=`
    <li class="products-list__empty">
      <p>${e}</p>
    </li>
  `)}function Mt(){if(!J.pagination)return;if(Z()||X.totalPages<=1||X.totalItems===0){J.pagination.innerHTML=``,J.pagination.classList.add(`is-hidden`);return}let e=Array.from({length:X.totalPages},(e,t)=>{let n=t+1,r=n===X.currentPage;return`
      <button
        class="products-pagination__button ${r?`is-active`:``}"
        type="button"
        data-page="${n}"
        aria-label="Сторінка ${n}"
        aria-current="${r?`page`:`false`}"
      >
        ${n}
      </button>
    `}).join(``);J.pagination.innerHTML=`
    <button
      class="products-pagination__button products-pagination__button--arrow btn-prev"
      type="button"
      data-page="${Math.max(1,X.currentPage-1)}"
      aria-label="Попередня сторінка"
      ${X.currentPage===1?`disabled`:``}
    >
      <svg class="btn-icon" width="20" height="20" aria-hidden="true">
        <use href="${j}#icon-left-arrow-alt"></use>
      </svg>
    </button>
    ${e}
    <button
      class="products-pagination__button products-pagination__button--arrow btn-next"
      type="button"
      data-page="${Math.min(X.totalPages,X.currentPage+1)}"
      aria-label="Наступна сторінка"
      ${X.currentPage===X.totalPages?`disabled`:``}
    >
      <svg class="btn-icon" width="20" height="20" aria-hidden="true">
        <use href="${j}#icon-right-arrow-alt"></use>
      </svg>
    </button>
  `,J.pagination.classList.remove(`is-hidden`)}function Nt(){if(!Z()||X.totalItems===0){Y.hide();return}Y.checkHasMore(X.currentPage,X.totalPages)}function Q(){Mt(),Nt()}function Pt(e){X.currentPage=Number(e.page)||1,X.totalItems=Number(e.totalItems)||0,X.totalPages=Math.max(1,Math.ceil(X.totalItems/X.limit))}async function $({page:e=1,append:t=!1}={}){At(!0);try{let n=await Oe({page:e,limit:X.limit,category:kt()});if(Pt(n),!n.furnitures.length){q(J.productsList),jt(`За цією категорією товарів поки немає.`),Q();return}t?Tt(n.furnitures,J.productsList):wt(n.furnitures,J.productsList),Q()}catch(e){q(J.productsList),jt(`Не вдалося завантажити товари. Спробуйте ще раз.`),m(e.response?.data?.message||`Не вдалося завантажити список меблів.`),X.totalItems=0,X.totalPages=0,Q()}finally{At(!1)}}async function Ft(){C();try{let e=mt(await De());W(J.categoriesList,e,async e=>{X.activeCategoryId=e.id,X.activeCategoryName=e.name,X.currentPage=1,q(J.productsList),await $({page:1,append:!1})})}catch(e){W(J.categoriesList,U(),async e=>{X.activeCategoryId=e.id,X.activeCategoryName=e.name,X.currentPage=1,q(J.productsList),await $({page:1,append:!1})}),m(e.response?.data?.message||`Не вдалося завантажити категорії. Показуємо всі товари.`)}finally{w()}}async function It(){!Z()||X.currentPage>=X.totalPages||await $({page:X.currentPage+1,append:!0})}async function Lt(e){let t=e.target.closest(`[data-page]`);if(!t||t.disabled||Z())return;let n=Number(t.dataset.page);!n||n===X.currentPage||await $({page:n,append:!1})}async function Rt(e){let t=e.target.closest(`[data-product-details]`);if(!t)return;let n=t.dataset.productId;n&&(X.selectedProductId=n,await Ve(n))}async function zt(){X.currentPage=1,q(J.productsList),await $({page:1,append:!1})}async function Bt(){Ot||!J.categoriesList||!J.productsList||!J.pagination||(Ot=!0,Be(),J.productsList.addEventListener(`click`,Rt),J.pagination.addEventListener(`click`,Lt),Y.button?.addEventListener(`click`,It),Dt.addEventListener(`change`,zt),await Ft(),await $({page:1,append:!1}))}ee(),re(),me(),Ee(),Bt();
//# sourceMappingURL=index.js.map