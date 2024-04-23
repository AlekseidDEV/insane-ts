import { Select, TableEl } from "src/models/aliases";
import { renderTable } from "./renderTable";
import { DataTabel } from "src/models/dataTable";

export const sortTable = () => {
  const tHead = document.querySelector(".table thead");
  const allTh = tHead?.querySelectorAll("tr > th");
  const select: Select | null = document.querySelector("#typeItem");

  let isSort = false;

  const sort = (view: string) => {
    if (select!.value === "0") {
      window.servicePrise
        ?.sortService({
          viewTh: view,
          mod: isSort ? "asc" : "desc",
          count: "0",
        })
        .then((data: DataTabel[]) => {
          renderTable(data);
        });

      isSort = !isSort;
    } else {
      window.servicePrise
        ?.sortService({
          key: "type",
          value: select!.value,
          viewTh: view,
          mod: isSort ? "asc" : "desc",
          count: "1",
        })
        .then((data: DataTabel[]) => {
          renderTable(data);
        });

      isSort = !isSort;
    }
  };

  tHead?.addEventListener("click", (e: Event) => {
    if ((e.target as TableEl).closest(".table-th")) {
      allTh?.forEach((th, index) => {
        if (e.target === th && index !== allTh.length - 1) {
          th.classList.add("active_th_sort");
          sort(th.id);
        } else {
          th.classList.remove("active_th_sort");
        }
      });
    }
  });
};
