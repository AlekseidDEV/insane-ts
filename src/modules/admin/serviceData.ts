import { ServiceInt } from "src/models/ServiceInt";
import { DataTabel } from "src/models/dataTable";
import { FetchObject } from "src/models/fetchObject";
import { SortOption } from "src/models/sortOption";

export class ServicePrice implements ServiceInt {
  getRequest<T>(url: string): Promise<T> {
    return fetch(url)
      .then((res) => res.json())
      .catch((error) => {
        console.error(`ошибка ${error}`);
      });
  }

  PostRequest<T>(url: string, obj: FetchObject): Promise<T> {
    return fetch(url, obj)
      .then((res) => res.json())
      .catch((error) => {
        console.error(`ошибка ${error}`);
      });
  }

  getServices(): Promise<DataTabel[]> {
    return this.getRequest("http://localhost:1808/service");
  }

  filterService(key: string, value: string): Promise<DataTabel[]> {
    return this.getRequest(`http://localhost:1808/service?${key}=${value}`);
  }

  sortService(options: SortOption): Promise<DataTabel[]> {
    if (options.count === "0") {
      return this.getRequest(
        `http://localhost:1808/service?_sort=${options.viewTh}&_order=${options.mod}`,
      );
    } else {
      return this.getRequest(
        `http://localhost:1808/service?${options.key}=${options.value}&_sort=${options.viewTh}&_order=${options.mod}`,
      );
    }
  }

  addService(service: { [key: string]: string | Blob }): Promise<DataTabel> {
    return this.PostRequest(`http://localhost:1808/service`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    });
  }

  removeService(id: string): Promise<DataTabel> {
    return this.PostRequest(`http://localhost:1808/service/${id}`, {
      method: "DELETE",
    });
  }

  getService(id: string): Promise<DataTabel> {
    return this.getRequest(`http://localhost:1808/service/${id}`);
  }

  editService(id: string, service: DataTabel): Promise<DataTabel> {
    return this.PostRequest(`http://localhost:1808/service/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    });
  }
}
