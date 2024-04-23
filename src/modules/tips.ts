import { Div, Elem } from "src/models/aliases";

export const tips = () => {
  const wrapperTips: Div | null = document.querySelector(".tips-wrapper");

  let stateVisible = false;

  const isVisibleTips = (
    target: Div | null,
    text: Div | null,
    childElem: Div | null,
  ) => {
    const row: Elem | null = childElem!.parentElement;

    let rect = target!.getBoundingClientRect();

    if (rect.y < 0) {
      target!.style.cssText = `
            transform: rotate(180deg);
            padding-top: 30px;
            top: 150px;
            `;
      text!.style.transform = "rotate(-180deg)";
      row!.style.zIndex = "100";
    } else {
      target?.removeAttribute("style");
      text?.removeAttribute("style");
      row?.removeAttribute("style");
    }
  };

  const openTips = (target: Div | null) => {
    const numberItem = target!.querySelector("span");
    const tip: Div | null = document.querySelector(
      `.formula-item-popup-${numberItem?.textContent}`,
    );
    const textTip = tip!.querySelector("div");

    stateVisible = !stateVisible;

    isVisibleTips(tip, textTip, target);

    if (stateVisible) {
      target?.classList.add("active-item");
    } else {
      target?.classList.remove("active-item");
    }
  };

  wrapperTips?.addEventListener("mouseover", (e) => {
    if ((e.target as Elem).closest(".formula-item__icon")) {
      openTips((e.target as Div).closest(".formula-item"));
    }
  });
  wrapperTips?.addEventListener("mouseout", (e) => {
    if ((e.target as Elem).closest(".formula-item__icon")) {
      openTips((e.target as Div).closest(".formula-item"));
    }
  });
};
