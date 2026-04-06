const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-swiper-C6NGsUqk.js","assets/rolldown-runtime-Cq0jCQ29.js","assets/vendor-swiper-Z8AHcVQ8.css","assets/vendor-jJCv9pwj.js","assets/vendor-Cb2O_A97.css"])))=>i.map(i=>d[i]);
import{r as e}from"./assets/rolldown-runtime-Cq0jCQ29.js";import{t}from"./assets/vendor-accordion-E0_mvaAg.js";import{n}from"./assets/vendor-jJCv9pwj.js";import{t as r}from"./assets/vendor-izitoast-DH103bj3.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var i=e(t(),1);function a(e){return e?new i.default(e,{duration:220,showMultiple:!1,collapse:!0}):null}var o={loader:`[data-loader]`,starRatingSpriteHost:`[data-star-rating-sprite-host]`,starRatingSprite:`[data-star-rating-sprite]`,mobileMenu:`[data-mobile-menu]`,mobileMenuOpen:`[data-menu-open]`,mobileMenuClose:`[data-menu-close]`,mobileMenuBackdrop:`[data-menu-backdrop]`,navLink:`[data-nav-link]`,categoriesSection:`[data-categories-section]`,categoriesList:`[data-categories-list]`,categoryButton:`[data-category-button]`,productsSection:`[data-products-section]`,productsList:`[data-products-list]`,productsPagination:`[data-products-pagination]`,productsPaginationButton:`[data-products-page]`,productDetailsButton:`[data-product-details]`,loadMoreContainer:`[data-load-more-container]`,loadMoreButton:`[data-load-more]`,faqSection:`[data-faq-section]`,faqAccordion:`[data-faq-accordion]`,reviewsSection:`[data-reviews-section]`,reviewsSlider:`[data-reviews-slider]`,reviewsList:`[data-reviews-list]`,reviewsPagination:`[data-reviews-pagination]`,reviewsPrev:`[data-reviews-prev]`,reviewsNext:`[data-reviews-next]`,orderModal:`[data-order-modal]`,orderModalOpen:`[data-order-modal-open]`,orderModalClose:`[data-order-modal-close]`,orderForm:`[data-order-form]`,orderFormSubmit:`[data-order-form-submit]`,orderFormName:`[data-order-form-name]`,orderFormPhone:`[data-order-form-phone]`,orderFormComment:`[data-order-form-comment]`,orderFormErrorName:`[data-form-error="name"]`,orderFormErrorPhone:`[data-form-error="phone"]`,orderFormErrorComment:`[data-form-error="comment"]`,productModal:`[data-product-modal]`,productModalClose:`[data-product-modal-close]`,productModalMainImage:`[data-product-modal-main-image]`,productModalThumbnails:`[data-product-modal-thumbnails]`,productModalTitle:`[data-product-modal-title]`,productModalCategory:`[data-product-modal-category]`,productModalPrice:`[data-product-modal-price]`,productModalRating:`[data-product-modal-rating]`,productModalColors:`[data-product-modal-colors]`,productModalDescription:`[data-product-modal-description]`,productModalSizes:`[data-product-modal-sizes]`,productModalOrder:`[data-product-modal-order]`,productThumbnail:`[data-product-thumbnail]`,productColor:`[data-product-color]`};function s(e,t=document){return t?.querySelector(e)??null}function c(e,t=document){return Array.from(t?.querySelectorAll(e)??[])}function l(e,t){return e instanceof Element?e.closest(t):null}var u=s(o.mobileMenu),ee=s(o.categoriesSection),d=s(o.categoriesList,ee),f=s(o.productsSection),te=s(o.productsList,f),ne=s(o.productsPagination,f),re=s(o.loadMoreContainer,f),ie=s(o.faqSection),p=s(o.reviewsSection),m=s(o.orderModal),h=s(o.orderForm,m),g=s(o.productModal),_=s(o.productModalThumbnails,g),v={loader:s(o.loader),starRatingSpriteHost:s(o.starRatingSpriteHost),get starRatingSprite(){return s(o.starRatingSprite)},mobileMenu:{root:u,openButton:s(o.mobileMenuOpen),closeButton:s(o.mobileMenuClose,u),backdrop:s(o.mobileMenuBackdrop,u),links:c(o.navLink,u)},categories:{list:d,getButtons(e=d){return c(o.categoryButton,e)},getButton(e){return l(e,o.categoryButton)}},products:{list:te,pagination:ne,loadMoreContainer:re,loadMoreButton:s(o.loadMoreButton,f),getPaginationButton(e){return l(e,o.productsPaginationButton)},getDetailsButton(e){return l(e,o.productDetailsButton)}},faq:{accordion:s(o.faqAccordion,ie)},reviews:{section:p,list:s(o.reviewsList,p),slider:s(o.reviewsSlider,p),pagination:s(o.reviewsPagination,p),prevButton:s(o.reviewsPrev,p),nextButton:s(o.reviewsNext,p)},orderModal:{root:m,closeButton:s(o.orderModalClose,m),form:h,submitButton:s(o.orderFormSubmit,h),fields:{name:s(o.orderFormName,h),phone:s(o.orderFormPhone,h),comment:s(o.orderFormComment,h)},errors:{name:s(o.orderFormErrorName,h),phone:s(o.orderFormErrorPhone,h),comment:s(o.orderFormErrorComment,h)},getTrigger(e){return l(e,o.orderModalOpen)}},productModal:{root:g,closeButton:s(o.productModalClose,g),mainImage:s(o.productModalMainImage,g),thumbnails:_,title:s(o.productModalTitle,g),category:s(o.productModalCategory,g),price:s(o.productModalPrice,g),rating:s(o.productModalRating,g),colors:s(o.productModalColors,g),description:s(o.productModalDescription,g),sizes:s(o.productModalSizes,g),getThumbnailButtons(){return c(o.productThumbnail,_)},getThumbnailButton(e){return l(e,o.productThumbnail)},getColorButton(e){return l(e,o.productColor)},getOrderButton(e){return l(e,o.productModalOrder)}}},y;function ae(){let e=v.faq.accordion;e&&(y&&y.destroy(),y=a(e))}var b={CATEGORIES:`/categories`,FURNITURES:`/furnitures`,FURNITURE_BY_ID:e=>`/furnitures/${e}`,ORDERS:`/orders`,FEEDBACKS:`/feedbacks`},oe=`(min-width: 1440px)`,x=0,S=null,se=``,C=!1;function ce(){return Math.max(0,window.innerWidth-document.documentElement.clientWidth)}function le(){let e=window.getComputedStyle(document.body).paddingRight,t=Number.parseFloat(e)||0,n=ce();se=document.body.style.paddingRight,document.body.classList.add(`no-scroll`),C=!0,n>0&&(document.body.style.paddingRight=`${t+n}px`)}function ue(){document.body.classList.remove(`no-scroll`),document.body.style.paddingRight=se,C=!1}function de(){S!==null&&(window.clearTimeout(S),S=null),x===0&&!C&&le(),x+=1}function fe(){x!==0&&(--x,!(x>0)&&(S=window.setTimeout(()=>{S=null,x===0&&ue()},0)))}function pe(){let{root:e,openButton:t,closeButton:n,backdrop:r,links:i}=v.mobileMenu;if(!e||!t||!n||!r)return;let a=window.matchMedia(oe),o=t,s=()=>{a.matches||(o=document.activeElement,e.classList.remove(`is-hidden`),e.setAttribute(`aria-hidden`,`false`),t.setAttribute(`aria-expanded`,`true`),de(),n.focus())},c=(n=!0)=>{e.classList.add(`is-hidden`),e.setAttribute(`aria-hidden`,`true`),t.setAttribute(`aria-expanded`,`false`),fe(),n&&o instanceof HTMLElement&&o.focus()};t.addEventListener(`click`,s),n.addEventListener(`click`,()=>c()),r.addEventListener(`click`,()=>c()),i.forEach(e=>e.addEventListener(`click`,()=>c(!1))),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&c()}),a.addEventListener(`change`,e=>{e.matches&&c(!1)})}function me(){pe()}n.defaults.baseURL=`https://furniture-store-v2.b.goit.study/api`;async function he(e){try{if(!e)throw Error(`Order data is required`);let{data:t}=await n.post(b.ORDERS,e);return t}catch(e){throw e}}async function ge(e){return he(e)}function _e({name:e=``,phone:t=``,comment:n=``}={}){let r={},i=e.trim(),a=t.replace(/\D/g,``),o=n.trim();return i?(i.length<2||i.length>64)&&(r.name=`2-64 символи`):r.name=`Введіть ім'я`,a?(a.length<10||a.length>15)&&(r.phone=`10-15 цифр`):r.phone=`Введіть телефон`,o&&(o.length<5||o.length>256)&&(r.comment=`5-256 символів`),{isValid:Object.keys(r).length===0,errors:r}}function ve(e){e&&(e.contains(document.activeElement)&&document.activeElement.blur(),e.classList.add(`is-hidden`),e.setAttribute(`aria-hidden`,`true`),fe())}function w(e){e&&(e.classList.remove(`is-hidden`),e.setAttribute(`aria-hidden`,`false`),de())}var T={modelId:``,color:``,name:``},E={...T};function ye(e={}){E={...E,...e}}function be(){return{...E}}function xe(){E={...T}}function D(){return v.loader}function O(){let e=D();e&&e.classList.add(`is-visible`)}function k(){let e=D();e&&e.classList.remove(`is-visible`)}var A=e(r(),1);function Se(e){A.default.show({title:`Успіх`,message:e,position:`topRight`,timeout:3e3,class:`toast-success`})}function j(e){A.default.show({title:`Помилка`,message:e,position:`topRight`,timeout:3e3,class:`toast-error`})}var M=!1;function N(){Object.values(v.orderModal.fields).forEach(e=>{e?.classList.remove(`is-error`)}),Object.values(v.orderModal.errors).forEach(e=>{e&&(e.textContent=e.dataset.defaultMessage||``,e.style.opacity=`0`)})}function P(e,t){if(!t)return;let n=v.orderModal.fields[e],r=v.orderModal.errors[e];n instanceof HTMLElement&&(n.classList.add(`is-error`),r&&(r.textContent=t,r.style.opacity=`1`))}function Ce(e){P(`name`,e.name),P(`phone`,e.phone),P(`comment`,e.comment)}function F(e,t){e&&(e.disabled=t,e.textContent=t?`Надсилаємо...`:`Надіслати заявку`)}function we(e=v.orderModal.form){if(!e)return{name:``,phone:``,comment:``};let t=new FormData(e);return{name:String(t.get(`name`)||``).trim(),phone:String(t.get(`phone`)||``).replace(/\D/g,``),comment:String(t.get(`comment`)||``).trim()}}function Te(e){return{modelId:e.dataset.modelId||``,color:e.dataset.color||``,name:e.dataset.productName||``}}function Ee(e){let t=v.orderModal.getTrigger(e.target);t&&(e.preventDefault(),I(Te(t)))}function De(e){e.key===`Escape`&&v.orderModal.root&&!v.orderModal.root.classList.contains(`is-hidden`)&&L()}function I(e={}){v.orderModal.root&&(ye({modelId:e.modelId||``,color:e.color||``,name:e.name||``}),w(v.orderModal.root))}function L({resetForm:e=!0}={}){v.orderModal.root&&(e&&v.orderModal.form?.reset(),N(),xe(),ve(v.orderModal.root))}function Oe(){if(M)return;let{root:e,closeButton:t,form:n,submitButton:r}=v.orderModal;!e||!n||(M=!0,Object.values(v.orderModal.errors).forEach(e=>{e&&(e.dataset.defaultMessage=e.textContent)}),document.addEventListener(`click`,Ee),document.addEventListener(`keydown`,De),t?.addEventListener(`click`,()=>L()),e.addEventListener(`click`,t=>{t.target===e&&L()}),n.addEventListener(`submit`,async e=>{e.preventDefault(),N();let t=we(n),i=_e(t);if(!i.isValid){Ce(i.errors);return}let a=be();if(!a.modelId||!a.color){j(`Не вдалося визначити товар для замовлення. Відкрийте модалку товару ще раз.`);return}let o={name:t.name,phone:t.phone,modelId:a.modelId,color:a.color};t.comment&&(o.comment=t.comment);try{F(r,!0),O(),await ge(o),Se(`Дякуємо! Ваше замовлення прийнято.`),L()}catch(e){j(e.response?.data?.message||`Не вдалося оформити замовлення. Спробуйте ще раз.`)}finally{k(),F(r,!1)}}))}var R=`/bug-hunters/assets/icons-B05t0GHi.svg`;n.defaults.baseURL=`https://furniture-store-v2.b.goit.study/api`;async function ke(){try{let e=await n.get(b.CATEGORIES);if(!Array.isArray(e.data))throw Error(`Invalid data format`);return e.data}catch(e){throw e}}n.defaults.baseURL=`https://furniture-store-v2.b.goit.study/api`;async function Ae({page:e=1,limit:t=8,category:r=``}={}){try{let i={page:e,limit:t};r&&(i.category=r);let{data:a}=await n.get(b.FURNITURES,{params:i});if(!a||!Array.isArray(a.furnitures))throw Error(`Invalid furnitures format`);return a}catch(e){throw e}}async function je(e){try{if(!e)throw Error(`ID is required`);let{data:t}=await n.get(b.FURNITURE_BY_ID(e));return t}catch(e){throw e}}var z=`<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg"
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
</svg>`,B={product:null,selectedColor:``,mainImage:``},Me=!1;function Ne(){v.starRatingSprite||!v.starRatingSpriteHost||v.starRatingSpriteHost.insertAdjacentHTML(`beforeend`,`<div data-star-rating-sprite aria-hidden="true">${z}</div>`)}function Pe(e){return`${Number(e||0).toLocaleString(`uk-UA`)} грн`}function Fe(e){let t=Number(e)||0;return t>=3.3&&t<=3.7?3.5:t>=3.8&&t<=4.2?4:Math.max(0,Math.min(5,Math.round(t*2)/2))}function Ie(){return Array.from({length:5},()=>`
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
    `).join(``)}function Le(e){let t=Fe(e),n=[`rating`,`medium`,`star-svg`,`label-hidden`,`direction-ltr`,`value-${Math.floor(t)}`];return t%1!=0&&n.push(`half`),`
    <div class="${n.join(` `)}" aria-label="Рейтинг ${t} з 5">
      <div class="label-value">${t}</div>
      <div class="star-container">
        ${Ie()}
      </div>
    </div>
  `}function Re(e){return Array.isArray(e)?[...new Set(e)].slice(0,3):[]}function ze(e,t){if(!v.productModal.thumbnails)return;let n=e.filter(e=>e!==t);v.productModal.thumbnails.innerHTML=n.map(e=>`
        <button
          class="product-modal__thumbnail"
          type="button"
          data-product-thumbnail="${e}"
          aria-label="Переглянути інше фото товару"
        >
          <img src="${e}" alt="${B.product?.name||`Товар`}" loading="lazy" />
        </button>
      `).join(``)}function Be(e){v.productModal.colors&&(v.productModal.colors.innerHTML=e.map(e=>{let t=e===B.selectedColor;return`
        <button
          class="product-modal__color-btn ${t?`is-selected`:``}"
          type="button"
          data-product-color="${e}"
          aria-label="Обрати колір ${e}"
          aria-pressed="${t}"
        >
          <span class="product-modal__color-swatch" style="background-color: ${e};" aria-hidden="true"></span>
        </button>
      `}).join(``))}function Ve(e){v.productModal.mainImage&&(B.mainImage=e,e?v.productModal.mainImage.src=e:v.productModal.mainImage.removeAttribute(`src`),v.productModal.mainImage.alt=B.product?.name||`Товар`,ze(Array.isArray(B.product?.images)?B.product.images.filter(Boolean):[],e))}function He(e){let t=Array.isArray(e.images)?e.images.filter(Boolean):[],n=Re(e.color);B.product=e,B.selectedColor=n[0]||``,B.mainImage=t[0]||``,v.productModal.title.textContent=e.name||`Без назви`,v.productModal.category.textContent=e.category?.name||e.type||`Меблі`,v.productModal.price.textContent=Pe(e.price),v.productModal.rating.innerHTML=Le(e.rate),v.productModal.description.textContent=e.description||`Опис тимчасово відсутній.`,v.productModal.sizes.textContent=e.sizes||`Не вказано`,Ve(B.mainImage),ze(t,B.mainImage),Be(n)}function Ue(e){e.target===v.productModal.root&&V()}function We(e){let t=v.productModal.getThumbnailButton(e.target);if(t){Ve(t.dataset.productThumbnail||``);return}let n=v.productModal.getColorButton(e.target);if(n){B.selectedColor=n.dataset.productColor||``,Be(Re(B.product?.color));return}v.productModal.getOrderButton(e.target)&&B.product?._id&&B.selectedColor&&(V(),I({modelId:B.product._id,color:B.selectedColor,name:B.product.name}))}function Ge(e){e.key===`Escape`&&v.productModal.root&&!v.productModal.root.classList.contains(`is-hidden`)&&V()}function Ke(){Me||!v.productModal.root||(Me=!0,Ne(),v.productModal.closeButton?.addEventListener(`click`,V),v.productModal.root.addEventListener(`click`,Ue),v.productModal.root.addEventListener(`click`,We),document.addEventListener(`keydown`,Ge))}async function qe(e){if(!(!e||!v.productModal.root)){O();try{He(await je(e)),w(v.productModal.root)}catch(e){j(e.response?.data?.message||`Не вдалося завантажити деталі товару.`)}finally{k()}}}function V(){v.productModal.root&&ve(v.productModal.root)}var Je=`/bug-hunters/assets/all-goods-Hax69vCO.webp`,Ye=`/bug-hunters/assets/all-goods@2x-BysERup1.webp`,Xe=`/bug-hunters/assets/soft-furniture-ZL0q516E.webp`,Ze=`/bug-hunters/assets/soft-furniture@2x-fcapyOKM.webp`,Qe=`data:image/webp;base64,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`,$e=`/bug-hunters/assets/wardrobe@2x-lyKXvzaE.webp`,et=`/bug-hunters/assets/beds-DEFBnyti.webp`,tt=`/bug-hunters/assets/beds@2x-BAzJXQO4.webp`,nt=`/bug-hunters/assets/tables-BffQDIU5.webp`,rt=`/bug-hunters/assets/tables@2x-DIEwr06V.webp`,it=`/bug-hunters/assets/chairs-DwPrEXAY.webp`,at=`/bug-hunters/assets/chairs@2x-BuMPFlxn.webp`,ot=`/bug-hunters/assets/kitchens-0ICtv114.webp`,st=`/bug-hunters/assets/kitchens@2x-DBtwNX_B.webp`,ct=`/bug-hunters/assets/for-kids-pUrkrFd4.webp`,lt=`/bug-hunters/assets/for-kids@2x-DpdTQKlH.webp`,ut=`/bug-hunters/assets/for-office-B9OQHvzH.webp`,dt=`/bug-hunters/assets/for-office@2x-DsCQ_JoZ.webp`,ft=`/bug-hunters/assets/for-hallway-BmvCIYEV.webp`,pt=`/bug-hunters/assets/for-hallway@2x-D1YFkjc3.webp`,mt=`/bug-hunters/assets/for-bathroom-BnAVKjmO.webp`,ht=`/bug-hunters/assets/for-bathroom@2x-D749-2zn.webp`,gt=`/bug-hunters/assets/for-outdoor-C21nTBaQ.webp`,_t=`/bug-hunters/assets/for-outdoor@2x-DR1vlrR-.webp`,vt=`/bug-hunters/assets/accessories-BryIR9p8.webp`,yt=`/bug-hunters/assets/accessories@2x-DNDncR1H.webp`,bt=`Всі товари`,xt=new WeakMap,St={"Всі товари":{img:Je,img2x:Ye},"М'які меблі":{img:Xe,img2x:Ze},"Шафи та системи зберігання":{img:Qe,img2x:$e},"Ліжка та матраци":{img:et,img2x:tt},Столи:{img:nt,img2x:rt},"Стільці та табурети":{img:it,img2x:at},Кухні:{img:ot,img2x:st},"Меблі для дитячої":{img:ct,img2x:lt},"Меблі для офісу":{img:ut,img2x:dt},"Меблі для передпокою":{img:ft,img2x:pt},"Меблі для ванної кімнати":{img:mt,img2x:ht},"Садові та вуличні меблі":{img:gt,img2x:_t},"Декор та аксесуари":{img:vt,img2x:yt}};function Ct(e){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#39;`)}function H(){return[{id:`all`,name:bt}]}function wt(e){if(!Array.isArray(e))return H();let t=H(),n=new Set([`all`]);return e.forEach(e=>{let r=String(e?._id??e?.id??``).trim(),i=String(e?.name??``).trim();!r||!i||n.has(r)||(n.add(r),t.push({id:r,name:i}))}),t}function Tt(e){return St[e]||St[`Всі товари`]}function Et(e){return Array.isArray(e)?e.map(e=>{let t=String(e?.id??``).trim(),n=String(e?.name??``).trim();if(!t||!n)return``;let r=Tt(n),i=Ct(t),a=Ct(n);return`
        <li class="categories-list__item">
          <button
            class="category-btn ${t===`all`?`is-active`:``}"
            type="button"
            data-category-button
            data-category-id="${i}"
            data-category-name="${a}"
            aria-pressed="${t===`all`}"
          >
            <img src="${r.img}" srcset="${r.img} 1x, ${r.img2x} 2x" alt="${a}" class="fill-image" loading="lazy" />
            <span>${a}</span>
          </button>
        </li>
      `}).join(``):``}function Dt(e,t){e&&v.categories.getButtons(e).forEach(e=>{let n=e.dataset.categoryId===t;e.classList.toggle(`is-active`,n),e.setAttribute(`aria-pressed`,String(n))})}function Ot(e,t,n){if(!e)return;e.innerHTML=Et(t);let r=xt.get(e);r&&e.removeEventListener(`click`,r);let i=t=>{let r=v.categories.getButton(t.target);if(!r)return;let i={id:r.dataset.categoryId||`all`,name:r.dataset.categoryName||`Всі товари`};Dt(e,i.id),typeof n==`function`&&n(i)};xt.set(e,i),e.addEventListener(`click`,i)}var kt=class{constructor({button:e,container:t,isHidden:n=!0}){this.button=e||null,this.container=t||null,this.button&&n&&this.hide()}show(){this.button&&this.button.classList.remove(`is-hidden`),this.container&&this.container.classList.remove(`is-hidden`)}hide(){this.button&&this.button.classList.add(`is-hidden`),this.container&&this.container.classList.add(`is-hidden`)}disable(){this.button&&(this.button.disabled=!0)}enable(){this.button&&(this.button.disabled=!1)}checkHasMore(e,t){return e>=t?(this.hide(),!1):(this.show(),!0)}};function U(e){return e||v.products.list}function W(e){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#39;`)}function At(e){return`${Number(e||0).toLocaleString(`uk-UA`)} грн`}function jt(e){return Array.isArray(e)?[...new Set(e)].slice(0,3):[]}function Mt(e){let t=e.replace(`#`,``);if(![3,6].includes(t.length))return!1;let n=t.length===3?t.split(``).map(e=>`${e}${e}`).join(``):t,r=parseInt(n.slice(0,2),16),i=parseInt(n.slice(2,4),16),a=parseInt(n.slice(4,6),16);return(r*299+i*587+a*114)/1e3<128}function Nt(e){let t=W(e?._id??e?.id??``),n=W(e?.name??`Без назви`),r=W(e?.images?.[0]??``),i=At(e?.price);return`
    <li class="product-card" data-product-id="${t}">
      <div class="product-card__image-wrapper">
        <img src="${r}" alt="${n}" class="product-card__img" loading="lazy" />
      </div>

      <div class="product-card__content">
        <h3 class="product-card__title">${n}</h3>

        <ul class="product-card__colors" aria-label="Доступні кольори">
          ${jt(e?.color).map(e=>{let t=W(e);return`
        <li class="product-card__color${Mt(e)?` product-card__color--dark`:``}" style="background-color: ${t};">
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
  `}function Pt(e,t){let n=U(t);n&&(n.innerHTML=e.map(Nt).join(``))}function Ft(e,t){let n=U(t);n&&n.insertAdjacentHTML(`beforeend`,e.map(Nt).join(``))}function G(e){let t=U(e);t&&(t.innerHTML=``)}var It=`(min-width: 768px)`,K=new kt({button:v.products.loadMoreButton,container:v.products.loadMoreContainer,isHidden:!0}),q={activeCategoryId:`all`,activeCategoryName:bt,currentPage:1,limit:8,totalItems:0,totalPages:0,selectedProductId:``,selectedColor:``},Lt=window.matchMedia(It),Rt=!1;function J(){return Lt.matches}function zt(){return q.activeCategoryId===`all`?``:q.activeCategoryId}function Bt(e){if(e){O(),K.disable();return}k(),K.enable()}function Vt(e){v.products.list&&(v.products.list.innerHTML=`
    <li class="products-list__empty">
      <p>${e}</p>
    </li>
  `)}function Ht(){if(!v.products.pagination)return;if(!J()||q.totalPages<=1||q.totalItems===0){v.products.pagination.innerHTML=``,v.products.pagination.classList.add(`is-hidden`);return}let{currentPage:e,totalPages:t}=q,n=new Set([1,t]);for(let r=e-1;r<=e+1;r++)r>=1&&r<=t&&n.add(r);let r=[...n].sort((e,t)=>e-t),i=``,a=null;for(let t of r){a!==null&&t-a>1&&(i+=`
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
    `,a=t}v.products.pagination.innerHTML=`
    <button
      class="products-pagination__button products-pagination__button--arrow btn-prev"
      type="button"
      data-products-page="${Math.max(1,e-1)}"
      aria-label="Попередня сторінка"
      ${e===1?`disabled`:``}
    >
      <svg class="btn-icon" width="20" height="20" aria-hidden="true">
        <use href="${R}#icon-left-arrow-alt"></use>
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
        <use href="${R}#icon-right-arrow-alt"></use>
      </svg>
    </button>
  `,v.products.pagination.classList.remove(`is-hidden`)}function Ut(){if(J()||q.totalItems===0){K.hide();return}K.checkHasMore(q.currentPage,q.totalPages)}function Y(){Ht(),Ut()}function Wt(e){q.currentPage=Number(e.page)||1,q.totalItems=Number(e.totalItems)||0,q.totalPages=Math.max(1,Math.ceil(q.totalItems/q.limit))}async function X({page:e=1,append:t=!1}={}){Bt(!0);try{let n=await Ae({page:e,limit:q.limit,category:zt()});if(Wt(n),!n.furnitures.length){G(v.products.list),Vt(`За цією категорією товарів поки немає.`),Y();return}t?Ft(n.furnitures,v.products.list):Pt(n.furnitures,v.products.list),Y()}catch(e){G(v.products.list),Vt(`Не вдалося завантажити товари. Спробуйте ще раз.`),j(e.response?.data?.message||`Не вдалося завантажити список меблів.`),q.totalItems=0,q.totalPages=0,Y()}finally{Bt(!1)}}async function Gt(){O();try{let e=wt(await ke());Ot(v.categories.list,e,async e=>{q.activeCategoryId=e.id,q.activeCategoryName=e.name,q.currentPage=1,G(v.products.list),await X({page:1,append:!1})})}catch(e){Ot(v.categories.list,H(),async e=>{q.activeCategoryId=e.id,q.activeCategoryName=e.name,q.currentPage=1,G(v.products.list),await X({page:1,append:!1})}),j(e.response?.data?.message||`Не вдалося завантажити категорії. Показуємо всі товари.`)}finally{k()}}async function Kt(){J()||q.currentPage>=q.totalPages||await X({page:q.currentPage+1,append:!0})}async function qt(e){let t=v.products.getPaginationButton(e.target);if(!t||t.disabled||!J())return;let n=Number(t.dataset.productsPage);!n||n===q.currentPage||await X({page:n,append:!1})}async function Jt(e){let t=v.products.getDetailsButton(e.target);if(!t)return;let n=t.dataset.productId;n&&(q.selectedProductId=n,await qe(n))}async function Yt(){q.currentPage=1,G(v.products.list),await X({page:1,append:!1})}async function Xt(){Rt||!v.categories.list||!v.products.list||!v.products.pagination||(Rt=!0,Ke(),v.products.list.addEventListener(`click`,Jt),v.products.pagination.addEventListener(`click`,qt),K.button?.addEventListener(`click`,Kt),Lt.addEventListener(`change`,Yt),await Gt(),await X({page:1,append:!1}))}n.defaults.baseURL=`https://furniture-store-v2.b.goit.study/api`;function Zt(e){let t=Number(e)||0;return t>=3.3&&t<=3.7?3.5:t>=3.8&&t<=4.2?4:Math.max(0,Math.min(5,Math.round(t*2)/2))}function Qt(e={}){return{author:String(e.author??e.name??`Анонімний користувач`),text:String(e.text??e.descr??e.comment??``),rating:Zt(e.rating??e.rate)}}async function $t(e=10){try{let{data:t}=await n.get(b.FEEDBACKS,{params:{limit:e}});if(!t||!Array.isArray(t.feedbacks))throw Error(`Invalid feedbacks format`);return{reviews:t.feedbacks.map(Qt),total:t.total,page:Number(t.page),limit:Number(t.limit)}}catch(e){throw e}}var en=`modulepreload`,tn=function(e){return`/bug-hunters/`+e},Z={},Q=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=tn(t,n),t in Z)return;Z[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:en,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},$;function nn(){v.starRatingSprite||!v.starRatingSpriteHost||v.starRatingSpriteHost.insertAdjacentHTML(`beforeend`,`<div data-star-rating-sprite aria-hidden="true">${z}</div>`)}function rn(e){let t=Number(e)||0;return t>=3.3&&t<=3.7?3.5:t>=3.8&&t<=4.2?4:Math.max(0,Math.min(5,Math.round(t*2)/2))}function an(e=``){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#39;`)}function on(){return Array.from({length:5},()=>`
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
    `).join(``)}function sn(e){let t=rn(e),n=[`rating`,`medium`,`star-svg`,`label-hidden`,`direction-ltr`,`value-${Math.floor(t)}`];return t%1!=0&&n.push(`half`),`
    <div class="${n.join(` `)}" aria-label="Рейтинг ${t} з 5">
      <div class="label-value">${t}</div>
      <div class="star-container">
        ${on()}
      </div>
    </div>
  `}function cn({author:e,text:t,rating:n}){return`
    <li class="feedback-item swiper-slide">
      <div class="feedback-card">
        ${sn(n)}
        <p class="feedback-text">"${an(t)}"</p>
        <p class="feedback-author">${an(e)}</p>
      </div>
    </li>
  `}async function ln(){let{section:e,list:t,slider:n,pagination:r,prevButton:i,nextButton:a}=v.reviews;if(!(!e||!t||!n||!r||!i||!a))try{let[{default:e},{Navigation:o,Pagination:s}]=await Promise.all([Q(()=>import(`./assets/vendor-swiper-C6NGsUqk.js`).then(e=>e.t),__vite__mapDeps([0,1,2])),Q(()=>import(`./assets/vendor-swiper-C6NGsUqk.js`).then(e=>e.a),__vite__mapDeps([0,1,2])),Q(()=>import(`./assets/vendor-jJCv9pwj.js`).then(e=>e.t),__vite__mapDeps([3,1,4])),Q(()=>import(`./assets/vendor-swiper-C6NGsUqk.js`).then(e=>e.n),__vite__mapDeps([0,1,2])),Q(()=>import(`./assets/vendor-swiper-C6NGsUqk.js`).then(e=>e.i),__vite__mapDeps([0,1,2])),Q(()=>import(`./assets/vendor-swiper-C6NGsUqk.js`).then(e=>e.r),__vite__mapDeps([0,1,2]))]);nn();let{reviews:c}=await $t();if(!Array.isArray(c)||c.length===0){t.innerHTML=`
        <li class="feedback-item feedback-item--status">
          <p class="feedback-status">Наразі немає відгуків.</p>
        </li>
      `,i.disabled=!0,a.disabled=!0,r.innerHTML=``;return}t.innerHTML=c.slice(0,10).map(cn).join(``),i.disabled=!1,a.disabled=!1,$&&$.destroy(!0,!0),$=new e(n,{modules:[o,s],slidesPerView:1,spaceBetween:16,watchOverflow:!0,navigation:{nextEl:a,prevEl:i,disabledClass:`is-disabled`},pagination:{el:r,clickable:!0,bulletClass:`feedback-pagination-bullet`,bulletActiveClass:`is-active`},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}})}catch(e){t.innerHTML=`
      <li class="feedback-item feedback-item--status">
        <p class="feedback-status">Не вдалося завантажити відгуки.</p>
      </li>
    `,i.disabled=!0,a.disabled=!0,r.innerHTML=``,j(e.response?.data?.message||`Не вдалося завантажити відгуки.`)}}var un=[me,ae,Oe],dn=[Xt,ln];function fn(){un.forEach(e=>{e()}),dn.forEach(e=>{e()})}fn();
//# sourceMappingURL=index.js.map