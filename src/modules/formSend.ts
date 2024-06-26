import { DataForm } from "src/models/dataForm";
import { rennderMessage } from "./renderMessage";
import { Div, Form, Input } from "src/models/aliases";

export const formSend = (e: Event, form: Form | undefined) => {
  const allInputs = form!.querySelectorAll("input");
  const checkbox: Form | null = form!.querySelector('input[type="checkbox"]');
  const formData = new FormData(form);
  const dataBody: DataForm = {};

  formData.forEach((value, key) => {
    dataBody[key] = value;
  });

  const formSendServer = (data: DataForm) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  };

  const isFromValue = (inputs: NodeList) => {
    let succes = false;
    succes = Array.from(inputs).every((input) => {
      if (
        (input as Input).value === "" &&
        (input as Input).type !== "checkbox"
      ) {
        return false;
      } else {
        return true;
      }
    });

    return succes;
  };

  if (isFromValue(allInputs) && checkbox!.checked) {
    formSendServer(dataBody)
      .then(() => {
        allInputs.forEach((input) => {
          input.value = "";
        });
        checkbox!.checked = false;
        rennderMessage(0);

        if ((e.target as Form).id === "feedback6") {
          (form!.closest(".popup") as Div).style.visibility = "hidden";
        }
      })
      .catch(() => rennderMessage(2));
  } else {
    rennderMessage(1);
  }
};
