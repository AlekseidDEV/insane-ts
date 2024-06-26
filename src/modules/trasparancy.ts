import { Div, Elem } from "src/models/aliases";
import { transpancyEnum } from "src/models/enumTransparancy";

export const transparancy = () => {
  const sliderBlock: Div | null = document.querySelector(transpancyEnum.slider);
  const popupTrans: Div | null = document.querySelector(transpancyEnum.popup);
  const insideSlides = document.querySelectorAll(transpancyEnum.slides);
  const totalSpan = popupTrans!.querySelector(transpancyEnum.totalCount);
  const curentSpan = popupTrans!.querySelector(transpancyEnum.curentCount);

  let countInside = 0;

  totalSpan!.textContent = `${insideSlides.length}`;
  curentSpan!.textContent = "1";

  const startSlider = (activeClass: string) => {
    const activeSlide = document.querySelector(activeClass);

    if (countInside > insideSlides.length - 1) {
      countInside = 0;
    }

    if (countInside < 0) {
      countInside = insideSlides.length - 1;
    }

    curentSpan!.textContent = `${countInside + 1}`;

    activeSlide?.classList.remove(activeClass.slice(1));
    insideSlides[countInside].classList.add(activeClass.slice(1));
  };

  const openPopup = (indexItem: number) => {
    insideSlides.forEach((slide, index) => {
      if (indexItem === index) {
        (slide as Elem).classList.add(transpancyEnum.activeSlide.slice(1));
      } else {
        (slide as Elem).classList.remove(transpancyEnum.activeSlide.slice(1));
      }
    });

    popupTrans!.style.visibility = "visible";
  };

  sliderBlock?.addEventListener("click", (e: Event) => {
    if ((e.target as Elem).matches(".transparency-item__img")) {
      openPopup(Number((e.target as Elem).dataset["item"]));
    }
  });

  popupTrans?.addEventListener("click", (e: Event) => {
    if (e.target === popupTrans) {
      popupTrans!.style.visibility = "hidden";
      countInside = 0;
    } else if ((e.target as Elem).closest(".close")) {
      popupTrans!.style.visibility = "hidden";
      countInside = 0;
    } else if ((e.target as Elem).closest("#transparency_right")) {
      countInside++;
      startSlider(transpancyEnum.activeSlide);
    } else if ((e.target as Elem).closest("#transparency_left")) {
      countInside--;
      startSlider(transpancyEnum.activeSlide);
    }
  });
};
