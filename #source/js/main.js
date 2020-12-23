//@prepros-append dynamicAdapt.js

$(function () {
  let windowWith = window.innerWidth;

  window.addEventListener("resize", function () {
    windowWith = window.innerWidth;
  });

  // Turn img to background ===========================================

  function ibg() {
    $.each($(".ibg"), function (index, val) {
      if ($(this).find("img").length > 0) {
        $(this).css({
          background:
            'url("' + $(this).find("img").attr("src") + '") center no-repeat',
          "background-size": "cover",
        });

        $(this).find("img").first().css("display", "none");
      }
    });
  }

  ibg();

  // Burger btn ===============================================

  const burgerBtnFirst = $(".menu__icon"),
    burgerBtnSecond = $(".menu-intro__icon"),
    introMenuBody = $(".menu-intro__body");

  burgerBtnFirst.on("click", function (event) {
    event.preventDefault();

    $(".menu__body").toggleClass("active");
    $(this).toggleClass("active");
  });

  burgerBtnSecond.on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("active");
    introMenuBody.toggleClass("active");
  });

  // Show submenu cart (PC,MOBILE) ================================================

  const menuParentLinks = document.querySelectorAll(
      ".menu-intro__link-parrent"
    ),
    submenuItems = document.querySelectorAll(".submenu-intro__item"),
    submenuIntroLinks = document.querySelectorAll(".submenu-intro__link");

  submenuIntroLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  });
  if (windowWith < 992.98) {
    menuParentLinks.forEach((link, index) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        if (submenuItems[index].classList.contains("active")) {
          submenuItems[index].classList.remove("active");
          this.querySelector("a").style.backgroundColor = "transparent";
        } else {
          submenuItems.forEach((item) => {
            item.classList.remove("active");
          });
          menuParentLinks.forEach((link) => {
            link.querySelector("a").style.backgroundColor = "transparent";
          });

          submenuItems[index].classList.add("active");
          link.querySelector("a").style.backgroundColor = "#098494";
        }
      });
    });
  } else {
    menuParentLinks.forEach((menuParentLink, index) => {
      menuParentLink.addEventListener("mouseenter", function (event) {
        event.preventDefault();

        menuParentLinks.forEach(
          (menuParentLink) =>
            (menuParentLink.style.backgroundColor = "transparent")
        );

        this.style.backgroundColor = "#098494";

        submenuItems[index].classList.add("active");
        submenuItems[index].parentNode.style.zIndex = 100;
      });

      menuParentLink.addEventListener("mouseleave", function (event) {
        submenuItems[index].classList.remove("active");
        submenuItems[index].parentNode.style.zIndex = 22;

        this.style.backgroundColor = "transparent";
      });
    });
  }

  // Toggle select categories ================================================

  const selectBtn = document.querySelector(".search-intro__select"),
    categories = document.querySelector(".categories-intro");

  selectBtn.addEventListener("click", function (event) {
    categories.classList.toggle("active");
    selectBtn.classList.toggle("active");
  });

  categories.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  document.documentElement.addEventListener("click", function (event) {
    if (!event.target.classList.contains("search-intro__select")) {
      categories.classList.remove("active");
      selectBtn.classList.remove("active");
    }
  });

  // Check select categories ================================================

  let categoriesInputs = document.querySelectorAll(".checkbox__input"),
    categoriesText = document.querySelectorAll(".checkbox__text"),
    checkedInputs = [],
    selectTitle = document.querySelector(".search-intro__title");

  categoriesInputs.forEach((input, index) => {
    input.addEventListener("click", function (event) {
      if (input.checked) {
        if (!checkedInputs.includes(input)) {
          checkedInputs.push(input);
          categoriesText[index].classList.add("active");
        }
      } else {
        if (checkedInputs.includes(input)) {
          checkedInputs = checkedInputs.filter((item) => item !== input);
          categoriesText[index].classList.remove("active");
        }
      }
      if (checkedInputs.length <= 0) {
        selectTitle.textContent = "Везде";
      } else {
        if (windowWith < 480) {
          selectTitle.textContent = `${checkedInputs.length} категории`;
        } else {
          selectTitle.textContent = `Выбрано ${checkedInputs.length} категории`;
        }
      }
    });
  });

  // Swiper Slider https://swiperjs.com/ ================================================

  // Intro slider ================================================

  // Main part ====================

  // Actions

  if (document.querySelector(".main-intro-content__slider")) {
    let myIntroSlider = new Swiper(".main-intro-content__slider", {
      pagination: {
        el: ".main-intro-content__pagination",
        // Буллеты
        type: "bullets",
        clickable: true,
      },
      loop: true,
      speed: 800,
      autoHeight: true,
      observer: true,
      observeParents: true,
      slidesPerGroup: 1,
      // Автопрокрутка
      autoplay: {
        // Пауза между прокруткой
        delay: 5000,
        // Закончить на последнем слайде
        stopOnLastSlide: false,
        // Отключить после ручного переключения
        disableOnInteraction: false,
      },
    });

    // Get background to dots
    const itemImages = document.querySelectorAll(".item-content-intro__image"),
      sliderIntroDotts = document.querySelectorAll(
        ".main-intro-content__pagination .swiper-pagination-bullet"
      );

    sliderIntroDotts.forEach((item, index) => {
      let dotBackground = itemImages[index]
        .querySelector("img")
        .getAttribute("src");
      item.style.cssText = `
			background: url('${dotBackground}') center no-repeat;
			background-size: cover;
			`;
    });
  }

  // Products part ====================

  // Actions

  if (document.querySelector(".products-intro__slider-container")) {
    let myProductSlider = new Swiper(".products-intro__slider-container", {
      loop: true,
      speed: 800,
      autoHeight: true,
      observer: true,
      observeParents: true,
      slidesPerGroup: 1,

      grabCursor: false,
      slideToClickedSlide: false,

      // Стрелки
      navigation: {
        nextEl: ".control-intro-products__arrow_next",
        prevEl: ".control-intro-products__arrow_prev",
      },

      // Pagination
      pagination: {
        el: ".control-intro-products__info",
        type: "fraction",
      },
    });
  }

  // Brands slider ================================================

  if (document.querySelector(".slider-brands__container")) {
    let myBrandsSlider = new Swiper(".slider-brands__container", {
      loop: true,
      speed: 800,
      autoHeight: true,
      observer: true,
      observeParents: true,
      slidesPerGroup: 1,
      slidesPerView: 5,

      grabCursor: false,
      slideToClickedSlide: false,

      // Стрелки
      navigation: {
        nextEl: ".arrow-brands_next",
        prevEl: ".arrow-brands_prev",
      },

      // Брейкпоинты
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        600: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1170: {
          slidesPerView: 5,
        },
      },

      autoplay: {
        // Пауза между прокруткой
        delay: 2000,
      },
    });
  }

  // Prise-filter ===================================================================

  const priceFilter = document.querySelector(".price-filter__slider");

  noUiSlider.create(priceFilter, {
    start: [0, 100000],
    connect: true,
    tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
    range: {
      min: 0,
      max: 300000,
    },
  });

  const priceStart = document.getElementById("price-start"),
    priceEnd = document.getElementById("price-end");

  priceStart.addEventListener("input", setPrices);
  priceEnd.addEventListener("input", setPrices);

  function setPrices() {
    let startPriceValue, endPriceValue;

    if (priceStart.value != "") {
      startPriceValue = priceStart.value;
    }

    if (priceEnd.value != "") {
      endPriceValue = priceEnd.value;
    }

    priceFilter.noUiSlider.set([startPriceValue, endPriceValue]);
  }

  // Checkbox-filter ===================================================================

  const filterTitles = document.querySelectorAll(
      ".section-filter__title-spoiler"
    ),
    filterBodies = document.querySelectorAll(".section-filter__body_spoiler");

  filterTitles.forEach((title, index) => {
    title.addEventListener("click", function () {
      this.classList.toggle("active");
      filterBodies[index].classList.toggle("section-filter__body_spoiler");
    });
  });

  const filterTitle = document.querySelector(".filter__title");

  filterTitle.addEventListener("click", function (event) {
    document.querySelector(".filter__body").classList.toggle("active");
  });

  // Catalog ===================================================================

  document.querySelectorAll(".select-catalog").forEach((catalog, index) => {
    catalog.addEventListener("click", function () {
      this.classList.toggle("active");
      console.log(document.querySelectorAll(".select-catalog__body"));
      document
        .querySelectorAll(".select-catalog__body")
        [index].classList.toggle("active");
    });

    catalog.querySelectorAll(".select-catalog__option").forEach((option) => {
      option.addEventListener("click", function (event) {
        event.preventDefault();

        let content = "";
        content = option.textContent;
        catalog.querySelector(
          ".select-catalog__default"
        ).textContent = content;
      });
		});
		
  });

  document.querySelectorAll(".view-catalog__item").forEach((item, index) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();

      document
        .querySelectorAll(".view-catalog__item")
        .forEach((item) => item.classList.remove("active"));

      this.classList.add("active");
    });
  });
});
