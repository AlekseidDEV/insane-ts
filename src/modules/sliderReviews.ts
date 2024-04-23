import { Div, Elem } from "src/models/aliases";
import { enumReviews } from "src/models/enumReviews";

export const sliderReviews = () => {
  const slider: Div | null = document.querySelector(enumReviews.slider);
  const slides = slider!.querySelectorAll(enumReviews.slides);

  let arrDots: Elem[] = [];
  let count = 0;

  const startSlider = () => {
    const activeSlide: Div | null = slider!.querySelector(
      enumReviews.slideActive,
    );
    const activeDot = document.querySelector(`.${enumReviews.dotActive}`);
    const dots = document.querySelectorAll(`.${enumReviews.dotReview}`);

    if (count > slides.length - 1) {
      count = 0;
    }

    if (count < 0) {
      count = slides.length - 1;
    }

    activeSlide?.classList.remove(enumReviews.slideActive.slice(1));
    slides[count].classList.add(enumReviews.slideActive.slice(1));

    activeDot?.classList.remove(enumReviews.dotActive);
    dots[count].classList.add(enumReviews.dotActive);
  };

  const addDots = () => {
    const dotBlock = document.querySelector(enumReviews.dotBlock);

    for (let i = 0; i <= slides.length - 1; i++) {
      const innerDot = document.createElement("div");
      const dot = document.createElement("div");

      innerDot.classList.add(enumReviews.dotInner);
      dot.classList.add(enumReviews.dot, enumReviews.dotReview);

      dot.append(innerDot);

      dotBlock?.append(dot);
    }

    arrDots = dotBlock!.querySelectorAll(`.${enumReviews.dotReview}`) as any;

    arrDots.forEach((dot, index) => {
      if (index === 0) {
        dot.classList.add(enumReviews.dotActive);
      }
    });
  };

  addDots();

  slider?.addEventListener("click", (e: Event) => {
    if ((e.target as Elem).closest("#reviews-arrow_left")) {
      count--;
      startSlider();
    } else if ((e.target as Elem).closest("#reviews-arrow_right")) {
      count++;
      startSlider();
    }
  });
};
