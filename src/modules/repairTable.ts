import { Div, Elem } from "src/models/aliases";
import { getDataTable } from "./getDataTable";
import { renderTable } from "./renderTable";
import { DataTabel } from "src/models/dataTable";

export const repairTable = () => {
  const popupBlock: Div | null = document.querySelector(".popup-repair-types");
  const btns = popupBlock!.querySelectorAll(".popup-repair-types-nav__item");
  const titleTable: Elem | null = popupBlock!.querySelector("#switch-inner");

  popupBlock!.style.visibility = "visible";

  const changeTable = (btnTarget: Elem) => {
    btns.forEach((btn) => {
      if (btnTarget === btn) {
        btn.classList.add("active_o");
        titleTable!.textContent = btn.textContent;
        getDataTable().then((data) => {
          let filteredData = data.filter(
            (item: DataTabel) => item.type === btn.textContent,
          );

          renderTable(filteredData);
        });
      } else {
        btn.classList.remove("active_o");
      }
    });
  };

  popupBlock!.addEventListener("click", (e: Event) => {
    if (e.target === popupBlock) {
      popupBlock!.style.visibility = "hidden";
    } else if ((e.target as Elem).closest(".close")) {
      popupBlock!.style.visibility = "hidden";
    } else if ((e.target as Elem).matches(".popup-repair-types-nav__item")) {
      changeTable(e.target as Elem);
    }
  });
};
