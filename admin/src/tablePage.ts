import { renderSelect } from "./modules/renderSelect";
import { renderTable } from "./modules/renderTable";
import { ServicePrice } from "./modules/serviceData";
import { filterTable } from "./modules/filterTable";
import { sortTable } from "./modules/sortTable";
import { serviceAdd } from "./modules/serviceAdd";
import { removeService } from "./modules/removeService";
import { editService } from "./modules/editService";
import { checkAutho } from "./modules/checkAutho";

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
