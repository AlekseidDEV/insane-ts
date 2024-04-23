import { DataTabel } from "./dataTable";
import { FetchObject } from "./fetchObject";
import { SortOption } from "./sortOption";

export interface ServiceInt {
  getRequest(url: string): Promise<DataTabel[] | DataTabel>;
  PostRequest(url: string, obj: FetchObject): Promise<DataTabel[] | DataTabel>;
  getServices(): Promise<DataTabel[]>;
  filterService(key: string, value: string): Promise<DataTabel[]>;
  sortService(options: SortOption): Promise<DataTabel[]>;
  addService(service: { [key: string]: string | Blob }): Promise<DataTabel>;
  removeService(id: string): Promise<DataTabel>;
  getService(id: string): Promise<DataTabel>;
  editService(id: string, service: DataTabel): Promise<DataTabel>;
}
