import { Div, Elem, Span } from "src/models/aliases";

export const galleryPortfolio = () => {
  const popupGallery: Div | null = document.querySelector(".popup-portfolio");
  const allSlidesText = document.querySelectorAll(".popup-portfolio-text");
  const slides = document.querySelectorAll(".popup-portfolio-slider__slide");
  const totalSpan: Span | null = popupGallery!.querySelector(
    ".slider-counter-content__total",
  );
  const curentSpan: Span | null = popupGallery!.querySelector(
    ".slider-counter-content__current",
  );

  let count = 0;

  slides.forEach((slide, index) => {
    if ((slide as Div).classList.contains("actvie_portfolio_slider")) {
      count = index;
    }
  });

  popupGallery!.style.visibility = "visible";
  totalSpan!.textContent = `${slides.length}`;

  const sliderStart = (imgClass: string, textClass: string) => {
    const activeImg = document.querySelector(imgClass);
    const textActive = document.querySelector(textClass);

    if (count > slides.length - 1) {
      count = 0;
    }

    if (count < 0) {
      count = slides.length - 1;
    }

    curentSpan!.textContent = `${count + 1}`;

    activeImg?.classList.remove(imgClass.slice(1));
    textActive?.classList.remove(textClass.slice(1));

    allSlidesText[count].classList.add(textClass.slice(1));
    slides[count].classList.add(imgClass.slice(1));
  };

  popupGallery?.addEventListener("click", (e) => {
    if (e.target === popupGallery) {
      popupGallery!.style.visibility = "hidden";
    } else if ((e.target as Elem).closest(".close")) {
      popupGallery!.style.visibility = "hidden";
    } else if ((e.target as Elem).closest("#popup_portfolio_left")) {
      count--;
      sliderStart(".actvie_portfolio_slider", ".text-content_active");
    } else if ((e.target as Elem).closest("#popup_portfolio_right")) {
      count++;
      sliderStart(".actvie_portfolio_slider", ".text-content_active");
    }
  });
};
