import { Div, Elem, Form } from "src/models/aliases";

export const openModal = () => {
  const overlayModal: Div | null = document.querySelector(".modal__overlay");
  const form: Form | null = document.querySelector("#table-form");

  overlayModal!.style.display = "flex";

  overlayModal?.addEventListener("click", (e) => {
    if (e.target === overlayModal) {
      overlayModal!.style.display = "none";
      form?.removeAttribute("data-method");
    } else if ((e.target as Elem).closest(".button__close")) {
      overlayModal!.style.display = "none";
      form?.removeAttribute("data-method");
    }
  });
};
