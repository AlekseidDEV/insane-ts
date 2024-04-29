import { Btn, Div, Form, Input, Select } from "src/models/aliases";
import { renderTable } from "./renderTable";
import { DataTabel } from "src/models/dataTable";
import { openModal } from "./openModal";
import { renderSelect } from "./renderSelect";

export const serviceAdd = () => {
  const addBtn: Btn | null = document.querySelector(".btn-addItem");
  const form: Form | null = document.querySelector("#table-form");
  const inputs = form!.querySelectorAll("input");
  const select: Select | null = document.querySelector("#typeItem");
  const overlayModal: Div | null = document.querySelector(".modal__overlay");

  const validInput = (inputs: NodeList) => {
    let succes = false;

    succes = Array.from(inputs).every((input) => {
      if ((input as Input).value === "") {
        return false;
      } else {
        return true;
      }
    });

    return succes;
  };

  const addServiceServer = () => {
    const formData = new FormData(form as Form);
    const dataBody: { [key: string]: string | Blob } = {};

    formData.forEach((value, key) => {
      dataBody[key] = value;
    });

    console.log(dataBody);

    window.servicePrise?.addService(dataBody).then(() => {
      window.servicePrise?.getServices().then((data: DataTabel[]) => {
        renderTable(data);
        renderSelect(data);
        form?.reset();
        select!.value = "0";
        overlayModal!.style.display = "none";
      });
    });
  };

  addBtn?.addEventListener("click", openModal);

  form?.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    if (!form?.dataset.method && validInput(inputs)) {
      addServiceServer();
    } else if (!form?.dataset.method) {
      alert("заполните поля");
    }
  });
};
