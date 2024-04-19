import { Div, Elem } from "src/models/aliases";

export const privacyPopup = () => {
  const popupPrivacy: Div | null =
    document.querySelector(".popup-privacy");

  const openPopup = (e: Event) => {
    if ((e.target as Elem).matches(".link-privacy")) {
      e.preventDefault();

      popupPrivacy!.style.visibility = "visible";
    } else if (e.target === popupPrivacy) {
      popupPrivacy!.style.visibility = "hidden";
    } else if ((e.target as Elem).matches(".close-privacy")) {
      popupPrivacy!.style.visibility = "hidden";
    }
  };

  document.addEventListener("click", openPopup);
};
