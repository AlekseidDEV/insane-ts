import { Elem, Select } from "src/models/aliases";
import { renderTable } from "./renderTable";
import { DataTabel } from "src/models/dataTable";

export const removeService = () => {
  const tBody = document.querySelector("#tbody");
  const select: Select | null = document.querySelector("#typeItem");

  tBody?.addEventListener("click", (e: Event) => {
    if ((e.target as Elem).closest(".button.action-remove")) {
      const tr = (e.target as Elem).closest("tr");
      const id = tr!.dataset["key_id"];

      window.servicePrise?.removeService(id!).then(() => {
        window.servicePrise?.getServices().then((data: DataTabel[]) => {
          renderTable(data);
          select!.value = "0";
        });
      });
    }
  });
};
