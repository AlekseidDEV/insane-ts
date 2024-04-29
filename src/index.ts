import { Elem, Form } from "./models/aliases";
import { DataTabel } from "./models/dataTable";
import { numAccordion } from "./modules/accordNumber";
import { accordion } from "./modules/accordion";
import { formSend } from "./modules/formSend";
import { getDataTable } from "./modules/getDataTable";
import { maskPhone } from "./modules/helpers/inputMask";
import { menuFunc } from "./modules/menu";
import { mobileTips } from "./modules/mobileTips";
import { openPopup } from "./modules/openPopup";
import { portfolioSlider } from "./modules/portfolioSlider";
import { renderTable } from "./modules/renderTable";
import { renderTableBtns } from "./modules/renderTableBts";
import { repairSliderMob } from "./modules/repairSliderMob";
import { repairSliders } from "./modules/repairSliders";
import { repairTable } from "./modules/repairTable";
import { sliderReviews } from "./modules/sliderReviews";
import { smoothScroll } from "./modules/smoothScroll";
import { tips } from "./modules/tips";
import { tokenUser } from "./modules/tokenUser";
import { transparancyMob } from "./modules/transparancyMob";
import { transparancy } from "./modules/trasparancy";

numAccordion();

if (window.innerWidth > 576) {
  menuFunc("translate3d(0px, 0px, 0px)", "translate3d(645px, 0px, 0px)");
} else {
  menuFunc("translate3d(0px, 0px, 0px)", "translate3d(0px, 750px, 0px)");
}

maskPhone('input[name="phone"]');

tips();
mobileTips();
repairSliders();
repairSliderMob("#nav-arrow-repair-left_base", "#nav-arrow-repair-right_base");
portfolioSlider(
  ".portfolio-slider-wrap",
  "#portfolio-arrow_right",
  "#portfolio-arrow_left",
  ".portfolio-slider__slide-frame",
  ".portfolio-slider__slide.fade-tab",
  ".slider_track",
);
transparancy();
sliderReviews();
accordion();
tokenUser();
transparancyMob()

getDataTable()
  .then((data) => {
    let filteredData = data.filter(
      (item: DataTabel) => item.type === "Потолок: Демонтажные работы",
    );

    renderTable(filteredData);
    renderTableBtns(data)
    
  })
  .catch((error) => {
    console.error(error);
  });

document.addEventListener("click", (e) => {
  if ((e.target as Elem).matches(".button.button_wide")) {
    openPopup(".popup-consultation", ".close-consultation");
  } else if ((e.target as Elem).matches(".link-privacy")) {
    openPopup(".popup-privacy", ".close-privacy");
  }
});

document.addEventListener("submit", (e) => {
  e.preventDefault();

  formSend(e, e.target as Form);
});

document.querySelector(".button-footer")?.addEventListener("click", (e) => {
  e.preventDefault();
  smoothScroll((e.target as HTMLAnchorElement).hash);
});
