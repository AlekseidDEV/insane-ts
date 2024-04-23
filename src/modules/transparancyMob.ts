import { Elem } from "src/models/aliases"
import { transpancyEnum } from "src/models/enumTransparancy";

export const transparancyMob = () => {
   const wrapperSlider = document.querySelector('.transparency-slider-wrap')
   const items = wrapperSlider!.querySelectorAll(transpancyEnum.item);

   let count = 0

   const sliderStart = () => {
    const activeItem = document.querySelector(transpancyEnum.itemActive);

    if (count > items.length - 1) {
      count = 0;
    }

    if (count < 0) {
      count = items.length - 1;
    }

    activeItem?.classList.remove(transpancyEnum.itemActive.slice(1));
    items[count].classList.add(transpancyEnum.itemActive.slice(1));
   }

   wrapperSlider?.addEventListener('click', (e) => {
        if ((e.target as Elem).closest("#transparency-arrow_left")) {
        count--;
        sliderStart();
      } else if ((e.target as Elem).closest("#transparency-arrow_right")) {
        count++;
        sliderStart();
      }
   })
}