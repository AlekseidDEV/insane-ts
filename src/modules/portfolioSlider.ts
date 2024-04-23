import { Div, Elem } from "src/models/aliases";
import { galleryPortfolio } from "./galleryPortfolio";

export const portfolioSlider = (
  sliderClass: string,
  rightArrow: string,
  leftArrow: string,
  frameImg: string,
  slideClass: string,
  sliderTrack: string,
) => {
  const sliderWrapper: Div | null = document.querySelector(sliderClass);
  const slidertrack: Div | null = sliderWrapper!.querySelector(sliderTrack);
  const slides = document.querySelectorAll(slideClass);
  const arrowRight = document.getElementById(rightArrow.slice(1));
  const arrowLeft = document.getElementById(leftArrow.slice(1));

  let stepCount = 0;

  const prev: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        let step = slides[0].clientWidth;

        stepCount += -step;

        if (stepCount < 0) {
          stepCount = 0;
        }

        slidertrack!.style.transform = `translateX(${-stepCount}px)`;

        observer.unobserve(entry.target);
      }

      if (stepCount === 0) {
        arrowRight!.style.display = "flex";
        arrowLeft!.style.display = "none";
      }
    });
  };

  const next: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        let step = slides[0].clientWidth;

        stepCount += step;

        slidertrack!.style.transform = `translateX(${-stepCount}px)`;
        observer.unobserve(entry.target);
      } else {
        arrowRight!.style.display = "none";
        arrowLeft!.style.display = "flex";

        observer.unobserve(entry.target);
      }
    });
  };

  const nextObserv = new IntersectionObserver(next, {
    rootMargin: "50px",
    threshold: 0,
  });

  const prevObserv = new IntersectionObserver(prev, {
    rootMargin: "50px",
    threshold: 1,
  });

  sliderWrapper?.addEventListener("click", (e: Event) => {
    if ((e.target as Elem).closest(rightArrow)) {
      nextObserv.observe(slides[slides.length - 1]);
    } else if ((e.target as Elem).closest(leftArrow)) {
      prevObserv.observe(slides[0]);
    } else if ((e.target as Elem).matches(frameImg)) {
      galleryPortfolio();
    }
  });
};
