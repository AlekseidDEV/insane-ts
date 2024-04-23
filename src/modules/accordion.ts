import { Div, Elem } from "src/models/aliases";

export const accordion = () => {
  const accordionBlock: Div | null = document.querySelector(".accordion_faq");
  const titleBlocks = accordionBlock?.querySelectorAll(".title_block");

  const changeAccordion = (e: Event) => {
    if ((e.target as Elem).matches(".title_block")) {
      titleBlocks?.forEach((block) => {
        if (e.target === block) {
          block.classList.toggle("msg-active");
        } else {
          block.classList.remove("msg-active");
        }
      });
    }
  };

  accordionBlock?.addEventListener("click", changeAccordion);
};
