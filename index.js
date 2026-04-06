import{r as e}from"./assets/rolldown-runtime-Cq0jCQ29.js";import{a as t,i as n,n as r,o as i,r as a,t as o}from"./assets/vendor-C848ls2K.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var s=e(i(),1);function c(e){return e?new s.default(e,{duration:220,showMultiple:!1,collapse:!0}):null}var l={loader:`[data-loader]`,starRatingSpriteHost:`[data-star-rating-sprite-host]`,starRatingSprite:`[data-star-rating-sprite]`,mobileMenu:`[data-mobile-menu]`,mobileMenuOpen:`[data-menu-open]`,mobileMenuClose:`[data-menu-close]`,mobileMenuBackdrop:`[data-menu-backdrop]`,navLink:`[data-nav-link]`,categoriesSection:`[data-categories-section]`,categoriesList:`[data-categories-list]`,categoryButton:`[data-category-button]`,productsSection:`[data-products-section]`,productsList:`[data-products-list]`,productsPagination:`[data-products-pagination]`,productsPaginationButton:`[data-products-page]`,productDetailsButton:`[data-product-details]`,loadMoreContainer:`[data-load-more-container]`,loadMoreButton:`[data-load-more]`,faqSection:`[data-faq-section]`,faqAccordion:`[data-faq-accordion]`,reviewsSection:`[data-reviews-section]`,reviewsSlider:`[data-reviews-slider]`,reviewsList:`[data-reviews-list]`,reviewsPagination:`[data-reviews-pagination]`,reviewsPrev:`[data-reviews-prev]`,reviewsNext:`[data-reviews-next]`,orderModal:`[data-order-modal]`,orderModalOpen:`[data-order-modal-open]`,orderModalClose:`[data-order-modal-close]`,orderForm:`[data-order-form]`,orderFormSubmit:`[data-order-form-submit]`,orderFormName:`[data-order-form-name]`,orderFormPhone:`[data-order-form-phone]`,orderFormComment:`[data-order-form-comment]`,orderFormErrorName:`[data-form-error="name"]`,orderFormErrorPhone:`[data-form-error="phone"]`,orderFormErrorComment:`[data-form-error="comment"]`,productModal:`[data-product-modal]`,productModalClose:`[data-product-modal-close]`,productModalMainImage:`[data-product-modal-main-image]`,productModalThumbnails:`[data-product-modal-thumbnails]`,productModalTitle:`[data-product-modal-title]`,productModalCategory:`[data-product-modal-category]`,productModalPrice:`[data-product-modal-price]`,productModalRating:`[data-product-modal-rating]`,productModalColors:`[data-product-modal-colors]`,productModalDescription:`[data-product-modal-description]`,productModalSizes:`[data-product-modal-sizes]`,productModalOrder:`[data-product-modal-order]`,productThumbnail:`[data-product-thumbnail]`,productColor:`[data-product-color]`};function u(e,t=document){return t?.querySelector(e)??null}function d(e,t=document){return Array.from(t?.querySelectorAll(e)??[])}function f(e,t){return e instanceof Element?e.closest(t):null}var p=u(l.mobileMenu),ee=u(l.categoriesSection),m=u(l.categoriesList,ee),h=u(l.productsSection),te=u(l.productsList,h),ne=u(l.productsPagination,h),re=u(l.loadMoreContainer,h),ie=u(l.faqSection),g=u(l.reviewsSection),_=u(l.orderModal),v=u(l.orderForm,_),y=u(l.productModal),b=u(l.productModalThumbnails,y),x={loader:u(l.loader),starRatingSpriteHost:u(l.starRatingSpriteHost),get starRatingSprite(){return u(l.starRatingSprite)},mobileMenu:{root:p,openButton:u(l.mobileMenuOpen),closeButton:u(l.mobileMenuClose,p),backdrop:u(l.mobileMenuBackdrop,p),links:d(l.navLink,p)},categories:{list:m,getButtons(e=m){return d(l.categoryButton,e)},getButton(e){return f(e,l.categoryButton)}},products:{list:te,pagination:ne,loadMoreContainer:re,loadMoreButton:u(l.loadMoreButton,h),getPaginationButton(e){return f(e,l.productsPaginationButton)},getDetailsButton(e){return f(e,l.productDetailsButton)}},faq:{accordion:u(l.faqAccordion,ie)},reviews:{section:g,list:u(l.reviewsList,g),slider:u(l.reviewsSlider,g),pagination:u(l.reviewsPagination,g),prevButton:u(l.reviewsPrev,g),nextButton:u(l.reviewsNext,g)},orderModal:{root:_,closeButton:u(l.orderModalClose,_),form:v,submitButton:u(l.orderFormSubmit,v),fields:{name:u(l.orderFormName,v),phone:u(l.orderFormPhone,v),comment:u(l.orderFormComment,v)},errors:{name:u(l.orderFormErrorName,v),phone:u(l.orderFormErrorPhone,v),comment:u(l.orderFormErrorComment,v)},getTrigger(e){return f(e,l.orderModalOpen)}},productModal:{root:y,closeButton:u(l.productModalClose,y),mainImage:u(l.productModalMainImage,y),thumbnails:b,title:u(l.productModalTitle,y),category:u(l.productModalCategory,y),price:u(l.productModalPrice,y),rating:u(l.productModalRating,y),colors:u(l.productModalColors,y),description:u(l.productModalDescription,y),sizes:u(l.productModalSizes,y),getThumbnailButtons(){return d(l.productThumbnail,b)},getThumbnailButton(e){return f(e,l.productThumbnail)},getColorButton(e){return f(e,l.productColor)},getOrderButton(e){return f(e,l.productModalOrder)}}},S;function ae(){let e=x.faq.accordion;e&&(S&&S.destroy(),S=c(e))}var C={CATEGORIES:`/categories`,FURNITURES:`/furnitures`,FURNITURE_BY_ID:e=>`/furnitures/${e}`,ORDERS:`/orders`,FEEDBACKS:`/feedbacks`},oe=`(min-width: 1440px)`,w=0,T=null,se=``,E=!1;function ce(){return Math.max(0,window.innerWidth-document.documentElement.clientWidth)}function le(){let e=window.getComputedStyle(document.body).paddingRight,t=Number.parseFloat(e)||0,n=ce();se=document.body.style.paddingRight,document.body.classList.add(`no-scroll`),E=!0,n>0&&(document.body.style.paddingRight=`${t+n}px`)}function ue(){document.body.classList.remove(`no-scroll`),document.body.style.paddingRight=se,E=!1}function de(){T!==null&&(window.clearTimeout(T),T=null),w===0&&!E&&le(),w+=1}function fe(){w!==0&&(--w,!(w>0)&&(T=window.setTimeout(()=>{T=null,w===0&&ue()},0)))}function pe(){let{root:e,openButton:t,closeButton:n,backdrop:r,links:i}=x.mobileMenu;if(!e||!t||!n||!r)return;let a=window.matchMedia(oe),o=t,s=()=>{a.matches||(o=document.activeElement,e.classList.remove(`is-hidden`),e.setAttribute(`aria-hidden`,`false`),t.setAttribute(`aria-expanded`,`true`),de(),n.focus())},c=(n=!0)=>{e.classList.add(`is-hidden`),e.setAttribute(`aria-hidden`,`true`),t.setAttribute(`aria-expanded`,`false`),fe(),n&&o instanceof HTMLElement&&o.focus()};t.addEventListener(`click`,s),n.addEventListener(`click`,()=>c()),r.addEventListener(`click`,()=>c()),i.forEach(e=>e.addEventListener(`click`,()=>c(!1))),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&c()}),a.addEventListener(`change`,e=>{e.matches&&c(!1)})}function me(){pe()}t.defaults.baseURL=`https://furniture-store-v2.b.goit.study/api`;async function he(e){try{if(!e)throw Error(`Order data is required`);let{data:n}=await t.post(C.ORDERS,e);return n}catch(e){throw e}}async function ge(e){return he(e)}function _e({name:e=``,phone:t=``,comment:n=``}={}){let r={},i=e.trim(),a=t.replace(/\D/g,``),o=n.trim();return i?(i.length<2||i.length>64)&&(r.name=`2-64 символи`):r.name=`Введіть ім'я`,a?(a.length<10||a.length>15)&&(r.phone=`10-15 цифр`):r.phone=`Введіть телефон`,o&&(o.length<5||o.length>256)&&(r.comment=`5-256 символів`),{isValid:Object.keys(r).length===0,errors:r}}function D(e){e&&(e.contains(document.activeElement)&&document.activeElement.blur(),e.classList.add(`is-hidden`),e.setAttribute(`aria-hidden`,`true`),fe())}function O(e){e&&(e.classList.remove(`is-hidden`),e.setAttribute(`aria-hidden`,`false`),de())}var k={modelId:``,color:``,name:``},A={...k};function ve(e={}){A={...A,...e}}function ye(){return{...A}}function be(){A={...k}}function j(){return x.loader}function M(){let e=j();e&&e.classList.add(`is-visible`)}function N(){let e=j();e&&e.classList.remove(`is-visible`)}var P=e(n(),1);function xe(e){P.default.show({title:`Успіх`,message:e,position:`topRight`,timeout:3e3,class:`toast-success`})}function F(e){P.default.show({title:`Помилка`,message:e,position:`topRight`,timeout:3e3,class:`toast-error`})}var I=!1;function L(){Object.values(x.orderModal.fields).forEach(e=>{e?.classList.remove(`is-error`)}),Object.values(x.orderModal.errors).forEach(e=>{e&&(e.textContent=e.dataset.defaultMessage||``,e.style.opacity=`0`)})}function R(e,t){if(!t)return;let n=x.orderModal.fields[e],r=x.orderModal.errors[e];n instanceof HTMLElement&&(n.classList.add(`is-error`),r&&(r.textContent=t,r.style.opacity=`1`))}function Se(e){R(`name`,e.name),R(`phone`,e.phone),R(`comment`,e.comment)}function z(e,t){e&&(e.disabled=t,e.textContent=t?`Надсилаємо...`:`Надіслати заявку`)}function Ce(e=x.orderModal.form){if(!e)return{name:``,phone:``,comment:``};let t=new FormData(e);return{name:String(t.get(`name`)||``).trim(),phone:String(t.get(`phone`)||``).replace(/\D/g,``),comment:String(t.get(`comment`)||``).trim()}}function we(e){return{modelId:e.dataset.modelId||``,color:e.dataset.color||``,name:e.dataset.productName||``}}function Te(e){let t=x.orderModal.getTrigger(e.target);t&&(e.preventDefault(),De(we(t)))}function Ee(e){e.key===`Escape`&&x.orderModal.root&&!x.orderModal.root.classList.contains(`is-hidden`)&&B()}function De(e={}){x.orderModal.root&&(ve({modelId:e.modelId||``,color:e.color||``,name:e.name||``}),O(x.orderModal.root))}function B({resetForm:e=!0}={}){x.orderModal.root&&(e&&x.orderModal.form?.reset(),L(),be(),D(x.orderModal.root))}function Oe(){if(I)return;let{root:e,closeButton:t,form:n,submitButton:r}=x.orderModal;!e||!n||(I=!0,Object.values(x.orderModal.errors).forEach(e=>{e&&(e.dataset.defaultMessage=e.textContent)}),document.addEventListener(`click`,Te),document.addEventListener(`keydown`,Ee),t?.addEventListener(`click`,()=>B()),e.addEventListener(`click`,t=>{t.target===e&&B()}),n.addEventListener(`submit`,async e=>{e.preventDefault(),L();let t=Ce(n),i=_e(t);if(!i.isValid){Se(i.errors);return}let a=ye();if(!a.modelId||!a.color){F(`Не вдалося визначити товар для замовлення. Відкрийте модалку товару ще раз.`);return}let o={name:t.name,phone:t.phone,modelId:a.modelId,color:a.color};t.comment&&(o.comment=t.comment);try{z(r,!0),M(),await ge(o),xe(`Дякуємо! Ваше замовлення прийнято.`),B()}catch(e){F(e.response?.data?.message||`Не вдалося оформити замовлення. Спробуйте ще раз.`)}finally{N(),z(r,!1)}}))}var ke=`/bug-hunters/assets/icons-B05t0GHi.svg`;t.defaults.baseURL=`https://furniture-store-v2.b.goit.study/api`;async function Ae(){try{let e=await t.get(C.CATEGORIES);if(!Array.isArray(e.data))throw Error(`Invalid data format`);return e.data}catch(e){throw e}}t.defaults.baseURL=`https://furniture-store-v2.b.goit.study/api`;async function je({page:e=1,limit:n=8,category:r=``}={}){try{let i={page:e,limit:n};r&&(i.category=r);let{data:a}=await t.get(C.FURNITURES,{params:i});if(!a||!Array.isArray(a.furnitures))throw Error(`Invalid furnitures format`);return a}catch(e){throw e}}async function Me(e){try{if(!e)throw Error(`ID is required`);let{data:n}=await t.get(C.FURNITURE_BY_ID(e));return n}catch(e){throw e}}var Ne=`<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg"
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
</svg>`,V={product:null,selectedColor:``,mainImage:``},Pe=!1;function Fe(){x.starRatingSprite||!x.starRatingSpriteHost||x.starRatingSpriteHost.insertAdjacentHTML(`beforeend`,`<div data-star-rating-sprite aria-hidden="true">${Ne}</div>`)}function Ie(e){return`${Number(e||0).toLocaleString(`uk-UA`)} грн`}function Le(e){let t=Number(e)||0;return t>=3.3&&t<=3.7?3.5:t>=3.8&&t<=4.2?4:Math.max(0,Math.min(5,Math.round(t*2)/2))}function Re(){return Array.from({length:5},()=>`
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
    `).join(``)}function ze(e){let t=Le(e),n=[`rating`,`medium`,`star-svg`,`label-hidden`,`direction-ltr`,`value-${Math.floor(t)}`];return t%1!=0&&n.push(`half`),`
    <div class="${n.join(` `)}" aria-label="Рейтинг ${t} з 5">
      <div class="label-value">${t}</div>
      <div class="star-container">
        ${Re()}
      </div>
    </div>
  `}function Be(e){return Array.isArray(e)?[...new Set(e)].slice(0,3):[]}function Ve(e,t){if(!x.productModal.thumbnails)return;let n=e.filter(e=>e!==t);x.productModal.thumbnails.innerHTML=n.map(e=>`
        <button
          class="product-modal__thumbnail"
          type="button"
          data-product-thumbnail="${e}"
          aria-label="Переглянути інше фото товару"
        >
          <img src="${e}" alt="${V.product?.name||`Товар`}" loading="lazy" />
        </button>
      `).join(``)}function H(e){x.productModal.colors&&(x.productModal.colors.innerHTML=e.map(e=>{let t=e===V.selectedColor;return`
        <button
          class="product-modal__color-btn ${t?`is-selected`:``}"
          type="button"
          data-product-color="${e}"
          aria-label="Обрати колір ${e}"
          aria-pressed="${t}"
        >
          <span class="product-modal__color-swatch" style="background-color: ${e};" aria-hidden="true"></span>
        </button>
      `}).join(``))}function He(e){x.productModal.mainImage&&(V.mainImage=e,e?x.productModal.mainImage.src=e:x.productModal.mainImage.removeAttribute(`src`),x.productModal.mainImage.alt=V.product?.name||`Товар`,Ve(Array.isArray(V.product?.images)?V.product.images.filter(Boolean):[],e))}function Ue(e){let t=Array.isArray(e.images)?e.images.filter(Boolean):[],n=Be(e.color);V.product=e,V.selectedColor=n[0]||``,V.mainImage=t[0]||``,x.productModal.title.textContent=e.name||`Без назви`,x.productModal.category.textContent=e.category?.name||e.type||`Меблі`,x.productModal.price.textContent=Ie(e.price),x.productModal.rating.innerHTML=ze(e.rate),x.productModal.description.textContent=e.description||`Опис тимчасово відсутній.`,x.productModal.sizes.textContent=e.sizes||`Не вказано`,He(V.mainImage),Ve(t,V.mainImage),H(n)}function We(e){e.target===x.productModal.root&&U()}function Ge(e){let t=x.productModal.getThumbnailButton(e.target);if(t){He(t.dataset.productThumbnail||``);return}let n=x.productModal.getColorButton(e.target);if(n){V.selectedColor=n.dataset.productColor||``,H(Be(V.product?.color));return}x.productModal.getOrderButton(e.target)&&V.product?._id&&V.selectedColor&&(U(),De({modelId:V.product._id,color:V.selectedColor,name:V.product.name}))}function Ke(e){e.key===`Escape`&&x.productModal.root&&!x.productModal.root.classList.contains(`is-hidden`)&&U()}function qe(){Pe||!x.productModal.root||(Pe=!0,Fe(),x.productModal.closeButton?.addEventListener(`click`,U),x.productModal.root.addEventListener(`click`,We),x.productModal.root.addEventListener(`click`,Ge),document.addEventListener(`keydown`,Ke))}async function Je(e){if(!(!e||!x.productModal.root)){M();try{Ue(await Me(e)),O(x.productModal.root)}catch(e){F(e.response?.data?.message||`Не вдалося завантажити деталі товару.`)}finally{N()}}}function U(){x.productModal.root&&D(x.productModal.root)}var Ye=`/bug-hunters/assets/all-goods-Hax69vCO.webp`,Xe=`/bug-hunters/assets/all-goods@2x-BysERup1.webp`,Ze=`/bug-hunters/assets/soft-furniture-ZL0q516E.webp`,Qe=`/bug-hunters/assets/soft-furniture@2x-fcapyOKM.webp`,$e=`data:image/webp;base64,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`,et=`/bug-hunters/assets/wardrobe@2x-lyKXvzaE.webp`,tt=`/bug-hunters/assets/beds-DEFBnyti.webp`,nt=`/bug-hunters/assets/beds@2x-BAzJXQO4.webp`,rt=`/bug-hunters/assets/tables-BffQDIU5.webp`,it=`/bug-hunters/assets/tables@2x-DIEwr06V.webp`,at=`/bug-hunters/assets/chairs-DwPrEXAY.webp`,ot=`/bug-hunters/assets/chairs@2x-BuMPFlxn.webp`,st=`/bug-hunters/assets/kitchens-0ICtv114.webp`,ct=`/bug-hunters/assets/kitchens@2x-DBtwNX_B.webp`,lt=`/bug-hunters/assets/for-kids-pUrkrFd4.webp`,ut=`/bug-hunters/assets/for-kids@2x-DpdTQKlH.webp`,dt=`/bug-hunters/assets/for-office-B9OQHvzH.webp`,ft=`/bug-hunters/assets/for-office@2x-DsCQ_JoZ.webp`,pt=`/bug-hunters/assets/for-hallway-BmvCIYEV.webp`,mt=`/bug-hunters/assets/for-hallway@2x-D1YFkjc3.webp`,ht=`/bug-hunters/assets/for-bathroom-BnAVKjmO.webp`,gt=`/bug-hunters/assets/for-bathroom@2x-D749-2zn.webp`,_t=`/bug-hunters/assets/for-outdoor-C21nTBaQ.webp`,vt=`/bug-hunters/assets/for-outdoor@2x-DR1vlrR-.webp`,yt=`/bug-hunters/assets/accessories-BryIR9p8.webp`,bt=`/bug-hunters/assets/accessories@2x-DNDncR1H.webp`,xt=`Всі товари`,St=new WeakMap,Ct={"Всі товари":{img:Ye,img2x:Xe},"М'які меблі":{img:Ze,img2x:Qe},"Шафи та системи зберігання":{img:$e,img2x:et},"Ліжка та матраци":{img:tt,img2x:nt},Столи:{img:rt,img2x:it},"Стільці та табурети":{img:at,img2x:ot},Кухні:{img:st,img2x:ct},"Меблі для дитячої":{img:lt,img2x:ut},"Меблі для офісу":{img:dt,img2x:ft},"Меблі для передпокою":{img:pt,img2x:mt},"Меблі для ванної кімнати":{img:ht,img2x:gt},"Садові та вуличні меблі":{img:_t,img2x:vt},"Декор та аксесуари":{img:yt,img2x:bt}};function wt(e){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#39;`)}function W(){return[{id:`all`,name:xt}]}function Tt(e){if(!Array.isArray(e))return W();let t=W(),n=new Set([`all`]);return e.forEach(e=>{let r=String(e?._id??e?.id??``).trim(),i=String(e?.name??``).trim();!r||!i||n.has(r)||(n.add(r),t.push({id:r,name:i}))}),t}function Et(e){return Ct[e]||Ct[`Всі товари`]}function Dt(e){return Array.isArray(e)?e.map(e=>{let t=String(e?.id??``).trim(),n=String(e?.name??``).trim();if(!t||!n)return``;let r=Et(n),i=wt(t),a=wt(n);return`
        <li class="categories-list__item">
          <button
            class="category-btn ${t===`all`?`is-active`:``}"
            type="button"
            data-category-button
            data-category-id="${i}"
            data-category-name="${a}"
            aria-pressed="${t===`all`}"
          >
            <img src="${r.img}" srcset="${r.img} 1x, ${r.img2x} 2x" alt="${a}" class="fill-image" />
            <span>${a}</span>
          </button>
        </li>
      `}).join(``):``}function Ot(e,t){e&&x.categories.getButtons(e).forEach(e=>{let n=e.dataset.categoryId===t;e.classList.toggle(`is-active`,n),e.setAttribute(`aria-pressed`,String(n))})}function kt(e,t,n){if(!e)return;e.innerHTML=Dt(t);let r=St.get(e);r&&e.removeEventListener(`click`,r);let i=t=>{let r=x.categories.getButton(t.target);if(!r)return;let i={id:r.dataset.categoryId||`all`,name:r.dataset.categoryName||`Всі товари`};Ot(e,i.id),typeof n==`function`&&n(i)};St.set(e,i),e.addEventListener(`click`,i)}var At=class{constructor({button:e,container:t,isHidden:n=!0}){this.button=e||null,this.container=t||null,this.button&&n&&this.hide()}show(){this.button&&this.button.classList.remove(`is-hidden`),this.container&&this.container.classList.remove(`is-hidden`)}hide(){this.button&&this.button.classList.add(`is-hidden`),this.container&&this.container.classList.add(`is-hidden`)}disable(){this.button&&(this.button.disabled=!0)}enable(){this.button&&(this.button.disabled=!1)}checkHasMore(e,t){return e>=t?(this.hide(),!1):(this.show(),!0)}};function G(e){return e||x.products.list}function K(e){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#39;`)}function jt(e){return`${Number(e||0).toLocaleString(`uk-UA`)} грн`}function Mt(e){return Array.isArray(e)?[...new Set(e)].slice(0,3):[]}function Nt(e){let t=e.replace(`#`,``);if(![3,6].includes(t.length))return!1;let n=t.length===3?t.split(``).map(e=>`${e}${e}`).join(``):t,r=parseInt(n.slice(0,2),16),i=parseInt(n.slice(2,4),16),a=parseInt(n.slice(4,6),16);return(r*299+i*587+a*114)/1e3<128}function Pt(e){let t=K(e?._id??e?.id??``),n=K(e?.name??`Без назви`),r=K(e?.images?.[0]??``),i=jt(e?.price);return`
    <li class="product-card" data-product-id="${t}">
      <div class="product-card__image-wrapper">
        <img src="${r}" alt="${n}" class="product-card__img" loading="lazy" />
      </div>

      <div class="product-card__content">
        <h3 class="product-card__title">${n}</h3>

        <ul class="product-card__colors" aria-label="Доступні кольори">
          ${Mt(e?.color).map(e=>{let t=K(e);return`
        <li class="product-card__color${Nt(e)?` product-card__color--dark`:``}" style="background-color: ${t};">
          <span class="visually-hidden">Колір ${t}</span>
        </li>
      `}).join(``)}
        </ul>

        <p class="product-card__price">${i}</p>
      </div>

      <button
        class="btn btn--secondary btn--product-card"
        type="button"
        data-product-details
        data-product-id="${t}"
      >
        Детальніше
      </button>
    </li>
  `}function Ft(e,t){let n=G(t);n&&(n.innerHTML=e.map(Pt).join(``))}function It(e,t){let n=G(t);n&&n.insertAdjacentHTML(`beforeend`,e.map(Pt).join(``))}function q(e){let t=G(e);t&&(t.innerHTML=``)}var Lt=`(min-width: 768px)`,J=new At({button:x.products.loadMoreButton,container:x.products.loadMoreContainer,isHidden:!0}),Y={activeCategoryId:`all`,activeCategoryName:xt,currentPage:1,limit:8,totalItems:0,totalPages:0,selectedProductId:``,selectedColor:``},Rt=window.matchMedia(Lt),zt=!1;function X(){return Rt.matches}function Bt(){return Y.activeCategoryId===`all`?``:Y.activeCategoryId}function Vt(e){if(e){M(),J.disable();return}N(),J.enable()}function Ht(e){x.products.list&&(x.products.list.innerHTML=`
    <li class="products-list__empty">
      <p>${e}</p>
    </li>
  `)}function Ut(){if(!x.products.pagination)return;if(!X()||Y.totalPages<=1||Y.totalItems===0){x.products.pagination.innerHTML=``,x.products.pagination.classList.add(`is-hidden`);return}let{currentPage:e,totalPages:t}=Y,n=new Set([1,t]);for(let r=e-1;r<=e+1;r++)r>=1&&r<=t&&n.add(r);let r=[...n].sort((e,t)=>e-t),i=``,a=null;for(let t of r){a!==null&&t-a>1&&(i+=`
        <span class="products-pagination__ellipsis" aria-hidden="true">…</span>
      `);let n=t===e;i+=`
      <button
        class="products-pagination__button ${n?`is-active`:``}"
        type="button"
        data-products-page="${t}"
        aria-label="Сторінка ${t}"
        aria-current="${n?`page`:`false`}"
      >
        ${t}
      </button>
    `,a=t}x.products.pagination.innerHTML=`
    <button
      class="products-pagination__button products-pagination__button--arrow btn-prev"
      type="button"
      data-products-page="${Math.max(1,e-1)}"
      aria-label="Попередня сторінка"
      ${e===1?`disabled`:``}
    >
      <svg class="btn-icon" width="20" height="20" aria-hidden="true">
        <use href="${ke}#icon-left-arrow-alt"></use>
      </svg>
    </button>
    ${i}
    <button
      class="products-pagination__button products-pagination__button--arrow btn-next"
      type="button"
      data-products-page="${Math.min(t,e+1)}"
      aria-label="Наступна сторінка"
      ${e===t?`disabled`:``}
    >
      <svg class="btn-icon" width="20" height="20" aria-hidden="true">
        <use href="${ke}#icon-right-arrow-alt"></use>
      </svg>
    </button>
  `,x.products.pagination.classList.remove(`is-hidden`)}function Wt(){if(X()||Y.totalItems===0){J.hide();return}J.checkHasMore(Y.currentPage,Y.totalPages)}function Z(){Ut(),Wt()}function Gt(e){Y.currentPage=Number(e.page)||1,Y.totalItems=Number(e.totalItems)||0,Y.totalPages=Math.max(1,Math.ceil(Y.totalItems/Y.limit))}async function Q({page:e=1,append:t=!1}={}){Vt(!0);try{let n=await je({page:e,limit:Y.limit,category:Bt()});if(Gt(n),!n.furnitures.length){q(x.products.list),Ht(`За цією категорією товарів поки немає.`),Z();return}t?It(n.furnitures,x.products.list):Ft(n.furnitures,x.products.list),Z()}catch(e){q(x.products.list),Ht(`Не вдалося завантажити товари. Спробуйте ще раз.`),F(e.response?.data?.message||`Не вдалося завантажити список меблів.`),Y.totalItems=0,Y.totalPages=0,Z()}finally{Vt(!1)}}async function Kt(){M();try{let e=Tt(await Ae());kt(x.categories.list,e,async e=>{Y.activeCategoryId=e.id,Y.activeCategoryName=e.name,Y.currentPage=1,q(x.products.list),await Q({page:1,append:!1})})}catch(e){kt(x.categories.list,W(),async e=>{Y.activeCategoryId=e.id,Y.activeCategoryName=e.name,Y.currentPage=1,q(x.products.list),await Q({page:1,append:!1})}),F(e.response?.data?.message||`Не вдалося завантажити категорії. Показуємо всі товари.`)}finally{N()}}async function qt(){X()||Y.currentPage>=Y.totalPages||await Q({page:Y.currentPage+1,append:!0})}async function Jt(e){let t=x.products.getPaginationButton(e.target);if(!t||t.disabled||!X())return;let n=Number(t.dataset.productsPage);!n||n===Y.currentPage||await Q({page:n,append:!1})}async function Yt(e){let t=x.products.getDetailsButton(e.target);if(!t)return;let n=t.dataset.productId;n&&(Y.selectedProductId=n,await Je(n))}async function Xt(){Y.currentPage=1,q(x.products.list),await Q({page:1,append:!1})}async function Zt(){zt||!x.categories.list||!x.products.list||!x.products.pagination||(zt=!0,qe(),x.products.list.addEventListener(`click`,Yt),x.products.pagination.addEventListener(`click`,Jt),J.button?.addEventListener(`click`,qt),Rt.addEventListener(`change`,Xt),await Kt(),await Q({page:1,append:!1}))}t.defaults.baseURL=`https://furniture-store-v2.b.goit.study/api`;function Qt(e){let t=Number(e)||0;return t>=3.3&&t<=3.7?3.5:t>=3.8&&t<=4.2?4:Math.max(0,Math.min(5,Math.round(t*2)/2))}function $t(e={}){return{author:String(e.author??e.name??`Анонімний користувач`),text:String(e.text??e.descr??e.comment??``),rating:Qt(e.rating??e.rate)}}async function en(e=10){try{let{data:n}=await t.get(C.FEEDBACKS,{params:{limit:e}});if(!n||!Array.isArray(n.feedbacks))throw Error(`Invalid feedbacks format`);return{reviews:n.feedbacks.map($t),total:n.total,page:Number(n.page),limit:Number(n.limit)}}catch(e){throw e}}var $;function tn(){x.starRatingSprite||!x.starRatingSpriteHost||x.starRatingSpriteHost.insertAdjacentHTML(`beforeend`,`<div data-star-rating-sprite aria-hidden="true">${Ne}</div>`)}function nn(e){let t=Number(e)||0;return t>=3.3&&t<=3.7?3.5:t>=3.8&&t<=4.2?4:Math.max(0,Math.min(5,Math.round(t*2)/2))}function rn(e=``){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#39;`)}function an(){return Array.from({length:5},()=>`
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
    `).join(``)}function on(e){let t=nn(e),n=[`rating`,`medium`,`star-svg`,`label-hidden`,`direction-ltr`,`value-${Math.floor(t)}`];return t%1!=0&&n.push(`half`),`
    <div class="${n.join(` `)}" aria-label="Рейтинг ${t} з 5">
      <div class="label-value">${t}</div>
      <div class="star-container">
        ${an()}
      </div>
    </div>
  `}function sn({author:e,text:t,rating:n}){return`
    <li class="feedback-item swiper-slide">
      <div class="feedback-card">
        ${on(n)}
        <p class="feedback-text">"${rn(t)}"</p>
        <p class="feedback-author">${rn(e)}</p>
      </div>
    </li>
  `}async function cn(){let{section:e,list:t,slider:n,pagination:i,prevButton:s,nextButton:c}=x.reviews;if(!(!e||!t||!n||!i||!s||!c))try{tn();let{reviews:e}=await en();if(!Array.isArray(e)||e.length===0){t.innerHTML=`
        <li class="feedback-item feedback-item--status">
          <p class="feedback-status">Наразі немає відгуків.</p>
        </li>
      `,s.disabled=!0,c.disabled=!0,i.innerHTML=``;return}t.innerHTML=e.slice(0,10).map(sn).join(``),s.disabled=!1,c.disabled=!1,$&&$.destroy(!0,!0),$=new a(n,{modules:[r,o],slidesPerView:1,spaceBetween:16,watchOverflow:!0,navigation:{nextEl:c,prevEl:s,disabledClass:`is-disabled`},pagination:{el:i,clickable:!0,bulletClass:`feedback-pagination-bullet`,bulletActiveClass:`is-active`},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}})}catch(e){t.innerHTML=`
      <li class="feedback-item feedback-item--status">
        <p class="feedback-status">Не вдалося завантажити відгуки.</p>
      </li>
    `,s.disabled=!0,c.disabled=!0,i.innerHTML=``,F(e.response?.data?.message||`Не вдалося завантажити відгуки.`)}}var ln=[me,ae,Oe],un=[Zt,cn];function dn(){ln.forEach(e=>{e()}),un.forEach(e=>{e()})}dn();
//# sourceMappingURL=index.js.map