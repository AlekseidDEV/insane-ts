import { Div, Elem } from "src/models/aliases";

export const mobileTips = () => {
  const sliderWrapp: Div | null = document.querySelector(
    ".formula-slider-wrap",
  );
  const sliderCont: Div | null = document.querySelector(".formula-slider");
  let slides: NodeList = document.querySelectorAll(".formula-slider__slide");

  let slideIndex: number = 1;
  let posIndex = 0;

  const appendSlide = () => {
    if (posIndex > slides.length - 1) {
      posIndex = 0;
    }
    sliderCont?.append(slides[posIndex]);
  };

  const prependSlide = () => {
    if (posIndex < 0) {
      posIndex = slides.length - 1;
    }
    sliderCont?.prepend(slides[posIndex]);
  };

  const prev = (curentSlide: Div, classElem: string) => {
    curentSlide.classList.remove(classElem);
  };

  const next = (curentSlide: Div, classElem: string) => {
    curentSlide.classList.add(classElem);
  };

  const swithSlides = (e: Event) => {
    prev(slides[slideIndex] as Div, "active-item");

    if ((e.target as Elem).closest("#formula-arrow_left")) {
      slideIndex--;
      posIndex--;
      prependSlide();
    } else if ((e.target as Elem).closest("#formula-arrow_right")) {
      slideIndex++;
      appendSlide();
      posIndex++;
    }

    if (slideIndex > slides.length - 1) {
      slideIndex = 0;
    }

    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }

    next(slides[slideIndex] as Div, "active-item");
  };

  sliderWrapp?.addEventListener("click", swithSlides);
};
