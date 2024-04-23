import { Btn, Div, Span } from "src/models/aliases";
import { repairTable } from "./repairTable";

export const repairSliders = () => {
  const sliderWrapper: Div | null = document.querySelector(
    ".repair-types-slider-wrap",
  );
  const repairTab: Div | null = document.querySelector(".repair-types-tab");
  const slidersArr = document.querySelectorAll(".types-repair");

  let countSlideCurrent: Span | null = sliderWrapper!.querySelector(
    ".slider-counter-content__current",
  );
  let countSlideTotal: Span | null = sliderWrapper!.querySelector(
    ".slider-counter-content__total",
  );

  let actvieSlider: Div | null = document.querySelector(
    ".types-repair.active-slider",
  );

  let count = 0;

  countSlideTotal!.textContent = `${actvieSlider!.querySelectorAll("div").length}`;

  const changeListSlider = (
    targetBtn: Btn,
    classBtn: string,
    indexSlide: number,
    classSlider: string,
  ) => {
    const activeBtn: Btn | null = repairTab!.querySelector(`.${classBtn}`);

    actvieSlider = document.querySelector(".types-repair.active-slider");

    activeBtn?.classList.remove(classBtn);
    targetBtn.classList.add(classBtn);

    actvieSlider?.classList.remove(classSlider);
    slidersArr[indexSlide].classList.add(classSlider);

    count = 0;
    countSlideCurrent!.textContent = "1";
    countSlideTotal!.textContent = `${slidersArr[indexSlide].querySelectorAll("div").length}`;
  };

  const changeSlide = (slideClass: string) => {
    actvieSlider = document.querySelector(".types-repair.active-slider");

    const activeSlide = actvieSlider!.querySelector(`.${slideClass}`);
    const slides = actvieSlider!.querySelectorAll(
      ".repair-types-slider__slide",
    );

    if (count > slides.length - 1) {
      count = 0;
    }

    if (count < 0) {
      count = slides.length - 1;
    }

    countSlideCurrent!.textContent = `${count + 1}`;

    activeSlide?.classList.remove(slideClass);
    slides[count].classList.add(slideClass);
  };

  sliderWrapper?.addEventListener("click", (e: Event) => {
    if ((e.target as Div).closest("#repair-types-arrow_right")) {
      count++;
      changeSlide("active-slide");
    } else if ((e.target as Div).closest("#repair-types-arrow_left")) {
      count--;
      changeSlide("active-slide");
    }
  });

  repairTab?.addEventListener("click", (e) => {
    if ((e.target as Div).localName === "button") {
      changeListSlider(
        e.target as Btn,
        "active",
        Number((e.target as Btn).dataset["index"]),
        "active-slider",
      );
    } else if ((e.target as Div).closest(".link-list-repair.mobile-hide")) {
      repairTable();
    }
  });
};
