import { renderSelect } from "./modules/admin/renderSelect";
import { renderTable } from "./modules/admin/renderTable";
import { ServicePrice } from "./modules/admin/serviceData";
import { filterTable } from "./modules/admin/filterTable";
import { sortTable } from "./modules/admin/sortTable";
import { serviceAdd } from "./modules/admin/serviceAdd";
import { removeService } from "./modules/admin/removeService";
import { editService } from "./modules/admin/editService";
import { checkAutho } from "./modules/admin/checkAutho";

declare global {
  interface Window {
    servicePrise?: ServicePrice;
  }
}

window.servicePrise = new ServicePrice();

checkAutho();

window.servicePrise.getServices().then((data) => {
  renderSelect(data);
  renderTable(data);
});

filterTable();
sortTable();
serviceAdd();
removeService();
editService();
