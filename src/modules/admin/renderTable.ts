import { Elem } from "src/models/aliases";
import { DataTabel } from "src/models/dataTable";

export const renderTable = (data: DataTabel[]) => {
  const tBody: Elem | null = document.querySelector("#tBody");

  tBody!.innerHTML = "";

  data.forEach((obj) => {
    tBody?.insertAdjacentHTML(
      "beforeend",
      `
     <tr class="table__row" data-key_id="${obj.id}">
        <td class="table__id table__cell">${obj.id}</td>
        <td class="table-type table__cell">${obj.type}</td>
        <td class="table-name table__cell">
            ${obj.name}
        </td>
        <td class="table-units table__cell">
        ${obj.units}
        </td>
        <td class="table-cost table__cell">
        ${obj.cost}
        </td>
        <td>
            <div class="table__actions table__cell">
                <button class="button action-change"><span class="svg_ui"><svg class="action-icon_change"><use xlink:href="./img/sprite.svg#change"></use></svg></span><span>Изменить</span>
                </button>
                <button class="button action-remove"><span class="svg_ui"><svg class="action-icon_remove"><use xlink:href="./img/sprite.svg#remove"></use></svg></span><span>Удалить</span>
                </button>
            </div>
        </td>
    </tr> 
        `,
    );
  });
};
