import { Elem } from "src/models/aliases";
import { DataTabel } from "src/models/dataTable";

export const renderTable = (data: DataTabel[]) => {
    const tBody: Elem | null = document.querySelector('#tBody')

    tBody!.innerHTML = ''

    data.forEach((obj) => {
        tBody?.insertAdjacentHTML('beforeend', `
        <tr class="mobile-row showHide">
            <td class="repair-types-name">${obj.name}</td>
            <td class="repair-types-value">${obj.units.charAt(0)}<sup>${obj.units.charAt(1)}</sup></td>
            <td class="repair-types-value">${obj.cost}</td>
        </tr>
        `)
    })
}