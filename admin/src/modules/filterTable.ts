import { Select } from "src/models/aliases";
import { DataTabel } from "src/models/dataTable";
import { renderTable } from "./renderTable";

export const filterTable = () => {
  const select = document.querySelector("#typeItem");

  const filter = (e: Event) => {
    if ((e.target as Select).value === "0") {
      window.servicePrise?.getServices().then((data: DataTabel[]) => {
        renderTable(data);
      });
    } else {
      window.servicePrise
        ?.filterService("type", (e.target as Select).value)
        .then((data: DataTabel[]) => {
          renderTable(data);
        });
    }
  };

  select?.addEventListener("change", filter);
};
