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

// Products part =====================================================

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

// Product Slider ============================================================

if (document.querySelector(".images-product")) {
  let mySubImageSlider = new Swiper(".images-product__sub-container", {
    speed: 800,
    observer: true,
    observeParents: true,
    slidesPerGroup: 1,
    slidesPerView: 4,

    slideToClickedSlide: false,
  });

  let myMainImageSlider = new Swiper(".images-product__main-container", {
    speed: 800,
    observer: true,
    observeParents: true,
    slidesPerGroup: 1,
    slidesPerView: 1,

    slideToClickedSlide: false,

    thumbs: {
      // Свайпер с мениатюрами
      // и его настройки
      swiper: mySubImageSlider,
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

// Same slider ===========================================================

if (document.querySelector(".same-product__slider")) {
  let mySameSlider = new Swiper(".same-product__container", {
    speed: 800,
    observer: true,
    observeParents: true,
    slidesPerGroup: 1,
    slidesPerView: 3,
    loop: true,

    slideToClickedSlide: false,

    // Брейкпоинты
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      582: {
        slidesPerView: 2,
      },
      756: {
        slidesPerView: 3,
      },
    },

    // Автопрокрутка

    autoplay: {
      // Пауза между прокруткой
      delay: 1500,
      // Закончить на последнем слайде
      stopOnLastSlide: false,
      // Отключить после ручного переключения
      disableOnInteraction: true,
    },
  });
}
