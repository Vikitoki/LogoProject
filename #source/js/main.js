//@prepros-append dynamicAdapt.js
//@prepros-append my-scripts.js
//@prepros-append my-sliders.js

document.addEventListener("DOMContentLoaded", function () {
  let windowWith = window.innerWidth;

  window.addEventListener("resize", function () {
    windowWith = window.innerWidth;
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

  // Prise-filter ===================================================================

  if (document.querySelector(".price-filter__slider")) {
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

  if (document.querySelector(".filter__title")) {
    const filterTitle = document.querySelector(".filter__title");

    filterTitle.addEventListener("click", function (event) {
      document.querySelector(".filter__body").classList.toggle("active");
    });
  }

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
        catalog.querySelector(".select-catalog__default").textContent = content;
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

  // Quantity ===================================================================

  if (document.querySelector(".quantity__input input")) {
    const quantityArrowPrev = document.querySelector(".quantity__arrow_prev"),
      quantityArrowNext = document.querySelector(".quantity__arrow_next"),
      quantityInput = document.querySelector(".quantity__input input");

    quantityArrowPrev.addEventListener("click", function (event) {
      event.preventDefault();

      let inputValue = quantityInput.value;

      console.log(inputValue);
      if (+inputValue <= 0) {
        return;
      }

      quantityInput.value = --inputValue;
    });

    quantityArrowNext.addEventListener("click", function (event) {
      event.preventDefault();

      let inputValue = quantityInput.value;

      console.log(inputValue);
      if (+inputValue < 0) {
        return;
      }

      quantityInput.value = ++inputValue;
    });
  }

  // Tabs Product =======================================================

  const tabsLinks = document.querySelectorAll(".tabs-product__nav-item"),
    tabsBlocks = document.querySelectorAll(".block-product-tabs");

  tabsLinks.forEach((link, index) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      if (link.classList.contains("active")) {
        return;
      }

      tabsBlocks.forEach((block) => block.classList.remove("active"));
      tabsLinks.forEach((link) => link.classList.remove("active"));

      this.classList.add("active");
      tabsBlocks[index].classList.add("active");
    });
  });

  // Remove order item =======================================================

  if (document.querySelector(".item-order__remove")) {
    const closeOrderBtns = document.querySelectorAll(".item-order__remove");

    let deleteItems = 0;

    closeOrderBtns.forEach((btn) => {
      btn.addEventListener("click", function (event) {
        event.preventDefault();

        btn.closest(".item-order").remove();

        deleteItems += 1;

        if (deleteItems === closeOrderBtns.length) {
          console.log(1);
          document.querySelector(".content-order__items").style.cssText = `
						padding: 15px 0;

						font-size: 20px;
						font-weight: 900;
						color: #333;
						text-transform: uppercase;
				
						text-align: center;

						border: 1px solid #dadada;
					`;

          document.querySelector(
            ".content-order__items"
          ).innerHTML = `<div>Ваша корзина пуста</div>`;
        }
      });
    });
  }

  // Select form =======================================================

  const selectTrigerAll = document.querySelectorAll(".select-form__default"),
    selectFormBodies = document.querySelectorAll(".select-form__body"),
    selectFormOption = document.querySelectorAll(".select-form__link");

  selectTrigerAll.forEach((trigger, index) => {
    trigger.addEventListener("click", function (event) {
      this.classList.toggle("active");
      selectFormBodies[index].classList.toggle("active");
    });

    selectFormOption.forEach((option) => {
      option.addEventListener("click", function (event) {
        event.preventDefault();

        option.closest(".select-form__body").classList.remove("active");
        trigger.classList.remove("active");

        trigger.textContent = option.textContent;
      });
    });
  });

  // Item form =======================================================

  const FormMustItems = document.querySelectorAll(
    ".item-form__label_must span"
  );

  FormMustItems.forEach((item) => {
    item.textContent += "*";
  });
});
