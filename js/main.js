if($((function(){let e=window.innerWidth;window.addEventListener("resize",(function(){e=window.innerWidth})),$.each($(".ibg"),(function(e,t){$(this).find("img").length>0&&($(this).css({background:'url("'+$(this).find("img").attr("src")+'") center no-repeat',"background-size":"cover"}),$(this).find("img").first().css("display","none"))}));const t=$(".menu__icon"),n=$(".menu-intro__icon"),i=$(".menu-intro__body");t.on("click",(function(e){e.preventDefault(),$(".menu__body").toggleClass("active"),$(this).toggleClass("active")})),n.on("click",(function(e){e.preventDefault(),$(this).toggleClass("active"),i.toggleClass("active")}));const r=document.querySelectorAll(".menu-intro__link-parrent"),o=document.querySelectorAll(".submenu-intro__item");document.querySelectorAll(".submenu-intro__link").forEach(e=>{e.addEventListener("click",(function(e){e.stopPropagation()}))}),e<992.98?r.forEach((e,t)=>{e.addEventListener("click",(function(n){n.preventDefault(),o[t].classList.contains("active")?(o[t].classList.remove("active"),this.querySelector("a").style.backgroundColor="transparent"):(o.forEach(e=>{e.classList.remove("active")}),r.forEach(e=>{e.querySelector("a").style.backgroundColor="transparent"}),o[t].classList.add("active"),e.querySelector("a").style.backgroundColor="#098494")}))}):r.forEach((e,t)=>{e.addEventListener("mouseenter",(function(e){e.preventDefault(),r.forEach(e=>e.style.backgroundColor="transparent"),this.style.backgroundColor="#098494",o[t].classList.add("active"),o[t].parentNode.style.zIndex=100})),e.addEventListener("mouseleave",(function(e){o[t].classList.remove("active"),o[t].parentNode.style.zIndex=22,this.style.backgroundColor="transparent"}))});const a=document.querySelector(".search-intro__select"),c=document.querySelector(".categories-intro");a.addEventListener("click",(function(e){c.classList.toggle("active"),a.classList.toggle("active")})),c.addEventListener("click",(function(e){e.stopPropagation()})),document.documentElement.addEventListener("click",(function(e){e.target.classList.contains("search-intro__select")||(c.classList.remove("active"),a.classList.remove("active"))}));let s=document.querySelectorAll(".checkbox__input"),l=document.querySelectorAll(".checkbox__text"),d=[],u=document.querySelector(".search-intro__title");if(s.forEach((t,n)=>{t.addEventListener("click",(function(i){t.checked?d.includes(t)||(d.push(t),l[n].classList.add("active")):d.includes(t)&&(d=d.filter(e=>e!==t),l[n].classList.remove("active")),d.length<=0?u.textContent="Везде":u.textContent=e<480?d.length+" категории":`Выбрано ${d.length} категории`}))}),document.querySelector(".main-intro-content__slider")){new Swiper(".main-intro-content__slider",{pagination:{el:".main-intro-content__pagination",type:"bullets",clickable:!0},loop:!0,speed:800,autoHeight:!0,observer:!0,observeParents:!0,slidesPerGroup:1,autoplay:{delay:5e3,stopOnLastSlide:!1,disableOnInteraction:!1}});const e=document.querySelectorAll(".item-content-intro__image");document.querySelectorAll(".main-intro-content__pagination .swiper-pagination-bullet").forEach((t,n)=>{let i=e[n].querySelector("img").getAttribute("src");t.style.cssText=`\n\t\t\tbackground: url('${i}') center no-repeat;\n\t\t\tbackground-size: cover;\n\t\t\t`})}if(document.querySelector(".products-intro__slider-container")){new Swiper(".products-intro__slider-container",{loop:!0,speed:800,autoHeight:!0,observer:!0,observeParents:!0,slidesPerGroup:1,grabCursor:!1,slideToClickedSlide:!1,navigation:{nextEl:".control-intro-products__arrow_next",prevEl:".control-intro-products__arrow_prev"},pagination:{el:".control-intro-products__info",type:"fraction"}})}if(document.querySelector(".slider-brands__container")){new Swiper(".slider-brands__container",{loop:!0,speed:800,autoHeight:!0,observer:!0,observeParents:!0,slidesPerGroup:1,slidesPerView:5,grabCursor:!1,slideToClickedSlide:!1,navigation:{nextEl:".arrow-brands_next",prevEl:".arrow-brands_prev"},breakpoints:{0:{slidesPerView:1},480:{slidesPerView:2},600:{slidesPerView:3},992:{slidesPerView:4},1170:{slidesPerView:5}},autoplay:{delay:2e3}})}const p=document.querySelector(".price-filter__slider");noUiSlider.create(p,{start:[0,1e5],connect:!0,tooltips:[wNumb({decimals:0}),wNumb({decimals:0})],range:{min:0,max:3e5}});const m=document.getElementById("price-start"),v=document.getElementById("price-end");function y(){let e,t;""!=m.value&&(e=m.value),""!=v.value&&(t=v.value),p.noUiSlider.set([e,t])}m.addEventListener("input",y),v.addEventListener("input",y);const _=document.querySelectorAll(".section-filter__title-spoiler"),f=document.querySelectorAll(".section-filter__body_spoiler");_.forEach((e,t)=>{e.addEventListener("click",(function(){this.classList.toggle("active"),f[t].classList.toggle("section-filter__body_spoiler")}))});document.querySelector(".filter__title").addEventListener("click",(function(e){document.querySelector(".filter__body").classList.toggle("active")})),document.querySelectorAll(".select-catalog").forEach((e,t)=>{e.addEventListener("click",(function(){this.classList.toggle("active"),console.log(document.querySelectorAll(".select-catalog__body")),document.querySelectorAll(".select-catalog__body")[t].classList.toggle("active")})),e.querySelectorAll(".select-catalog__option").forEach(t=>{t.addEventListener("click",(function(n){n.preventDefault();let i="";i=t.textContent,e.querySelector(".select-catalog__default").textContent=i}))})}),document.querySelectorAll(".view-catalog__item").forEach((e,t)=>{e.addEventListener("click",(function(e){e.preventDefault(),document.querySelectorAll(".view-catalog__item").forEach(e=>e.classList.remove("active")),this.classList.add("active")}))})})),document.querySelector(".images-product")){let e=new Swiper(".images-product__sub-container",{speed:800,observer:!0,observeParents:!0,slidesPerGroup:1,slidesPerView:4,slideToClickedSlide:!1});new Swiper(".images-product__main-container",{speed:800,observer:!0,observeParents:!0,slidesPerGroup:1,slidesPerView:1,slideToClickedSlide:!1,thumbs:{swiper:e}});const t=document.querySelector(".quantity__arrow_prev"),n=document.querySelector(".quantity__arrow_next"),i=document.querySelector(".quantity__input input");t.addEventListener("click",(function(e){e.preventDefault();let t=i.value;console.log(t),+t<=0||(i.value=--t)})),n.addEventListener("click",(function(e){e.preventDefault();let t=i.value;console.log(t),+t<0||(i.value=++t)}));const r=document.querySelectorAll(".tabs-product__nav-item"),o=document.querySelectorAll(".block-product-tabs");if(r.forEach((e,t)=>{e.addEventListener("click",(function(n){n.preventDefault(),e.classList.contains("active")||(o.forEach(e=>e.classList.remove("active")),r.forEach(e=>e.classList.remove("active")),this.classList.add("active"),o[t].classList.add("active"))}))}),document.querySelector(".same-product__slider")){new Swiper(".same-product__container",{speed:800,observer:!0,observeParents:!0,slidesPerGroup:1,slidesPerView:3,loop:!0,slideToClickedSlide:!1,breakpoints:{0:{slidesPerView:1},582:{slidesPerView:2},756:{slidesPerView:3}},autoplay:{delay:1500,stopOnLastSlide:!1,disableOnInteraction:!0}})}}function DynamicAdapt(e){this.type=e}DynamicAdapt.prototype.init=function(){const e=this;this.оbjects=[],this.daClassname="_dynamic_adapt_",this.nodes=document.querySelectorAll("[data-move]");for(let e=0;e<this.nodes.length;e++){const t=this.nodes[e],n=t.dataset.move.trim().split(","),i={};i.element=t,i.parent=t.parentNode,i.destination=document.querySelector(n[0].trim()),i.breakpoint=n[1]?n[1].trim():"767",i.place=n[2]?n[2].trim():"last",i.index=this.indexInParent(i.parent,i.element),this.оbjects.push(i)}this.arraySort(this.оbjects),this.mediaQueries=Array.prototype.map.call(this.оbjects,(function(e){return"("+this.type+"-width: "+e.breakpoint+"px),"+e.breakpoint}),this),this.mediaQueries=Array.prototype.filter.call(this.mediaQueries,(function(e,t,n){return Array.prototype.indexOf.call(n,e)===t}));for(let t=0;t<this.mediaQueries.length;t++){const n=this.mediaQueries[t],i=String.prototype.split.call(n,","),r=window.matchMedia(i[0]),o=i[1],a=Array.prototype.filter.call(this.оbjects,(function(e){return e.breakpoint===o}));r.addListener((function(){e.mediaHandler(r,a)})),this.mediaHandler(r,a)}},DynamicAdapt.prototype.mediaHandler=function(e,t){if(e.matches)for(let e=0;e<t.length;e++){const n=t[e];n.index=this.indexInParent(n.parent,n.element),this.moveTo(n.place,n.element,n.destination)}else for(let e=0;e<t.length;e++){const n=t[e];n.element.classList.contains(this.daClassname)&&this.moveBack(n.parent,n.element,n.index)}},DynamicAdapt.prototype.moveTo=function(e,t,n){t.classList.add(this.daClassname),"last"===e||e>=n.children.length?n.insertAdjacentElement("beforeend",t):"first"!==e?n.children[e].insertAdjacentElement("beforebegin",t):n.insertAdjacentElement("afterbegin",t)},DynamicAdapt.prototype.moveBack=function(e,t,n){t.classList.remove(this.daClassname),void 0!==e.children[n]?e.children[n].insertAdjacentElement("beforebegin",t):e.insertAdjacentElement("beforeend",t)},DynamicAdapt.prototype.indexInParent=function(e,t){const n=Array.prototype.slice.call(e.children);return Array.prototype.indexOf.call(n,t)},DynamicAdapt.prototype.arraySort=function(e){"min"===this.type?Array.prototype.sort.call(e,(function(e,t){return e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?-1:"last"===e.place||"first"===t.place?1:e.place-t.place:e.breakpoint-t.breakpoint})):Array.prototype.sort.call(e,(function(e,t){return e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?1:"last"===e.place||"first"===t.place?-1:t.place-e.place:t.breakpoint-e.breakpoint}))};const move=new DynamicAdapt("max");move.init();