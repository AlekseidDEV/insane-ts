import { Div, Elem, Form, Input, Select } from "src/models/aliases";
import { DataTabel } from "src/models/dataTable";
import { openModal } from "./openModal";
import { renderTable } from "./renderTable";

export const editService = () => {
  const tBody = document.querySelector("#tbody");
  const select: Select | null = document.querySelector("#typeItem");
  const form: Form | null = document.querySelector("#table-form");
  const typeInput: Input | null = form!.querySelector('input[name="type"]');
  const nameInput: Input | null = form!.querySelector('input[name="name"]');
  const unitsInput: Input | null = form!.querySelector('input[name="units"]');
  const costInput: Input | null = form!.querySelector('input[name="cost"]');
  const overlayModal: Div | null = document.querySelector(".modal__overlay");

  tBody?.addEventListener("click", (e: Event) => {
    if ((e.target as Elem).closest(".button.action-change")) {
      const tr = (e.target as Elem).closest("tr");
      const id = tr!.dataset["key_id"];

      openModal();
      form?.setAttribute("data-method", `${id}`);

      window.servicePrise?.getService(id!).then((service: DataTabel) => {
        typeInput!.value = service.type;
        nameInput!.value = service.name;
        unitsInput!.value = service.units;
        costInput!.value = service.cost;
      });
    }
  });

  form?.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    if (form.dataset.method) {
      const id = form.dataset.method;

      const service: DataTabel = {
        type: typeInput!.value,
        name: nameInput!.value,
        units: unitsInput!.value,
        cost: costInput!.value,
      };

      window.servicePrise?.editService(id, service).then(() => {
        window.servicePrise?.getServices().then((data: DataTabel[]) => {
          renderTable(data);
          form.reset();
          form.removeAttribute("data-method");
          select!.value = "0";
          overlayModal!.style.display = "none";
        });
      });
    }
  });
};
