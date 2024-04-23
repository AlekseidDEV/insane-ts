import { DataTabel } from "src/models/dataTable";

export const renderSelect = (data: DataTabel[]) => {
  const select = document.querySelector("#typeItem");

  const uniqueKey: Set<string> = new Set();

  let newOptionsVal: Array<string> = [];

  select!.innerHTML = "";

  data.forEach((obj) => {
    uniqueKey.add(obj.type);
  });

  newOptionsVal = Array.from(uniqueKey);

  const generateOptions = (arr: string[]) => {
    for (let i = 0; i <= arr.length; i++) {
      const newOption = document.createElement("option");

      if (i !== arr.length) {
        newOption.setAttribute("value", `${arr[i]}`);
        newOption.textContent = arr[i];
      } else {
        newOption.setAttribute("selected", "selected");
        newOption.setAttribute("value", "0");
        newOption.textContent = "Все услуги";
      }

      select?.prepend(newOption);
    }
  };

  generateOptions(newOptionsVal);
};
