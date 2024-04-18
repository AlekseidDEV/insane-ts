export const privacyPopup = () => {
  const popupPrivacy: HTMLDivElement | null =
    document.querySelector(".popup-privacy");

  const openPopup = (e: Event) => {
    if ((e.target as HTMLElement).matches(".link-privacy")) {
      e.preventDefault();

      popupPrivacy!.style.visibility = "visible";
    } else if (e.target === popupPrivacy) {
      popupPrivacy!.style.visibility = "hidden";
    } else if ((e.target as HTMLElement).matches(".close-privacy")) {
      popupPrivacy!.style.visibility = "hidden";
    }
  };

  document.addEventListener("click", openPopup);
};
