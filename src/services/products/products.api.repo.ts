import { AddedProduct, Product } from "../../models/product";

export interface ProductRepoStructure {
  getAll(): Promise<Product[]>;
  getById(): Promise<Product>;
  getByTag(tag: string): Promise<Product[]>;
  patch(info: Partial<Product>): Promise<Product>;
}

export type ResultsGet = {
  slicedData: Product[];
  length: number;
  currentPage: number;
};

export class ProductsRepo {
  url: string;
  constructor() {
    this.url = "http://localhost:4500/products";
  }

  async getAll(number?: number, filter?: string): Promise<ResultsGet> {
    let url;
    let numberPage;

    number ? (numberPage = number) : (numberPage = 1);

    filter
      ? (url = this.url + "?page=" + numberPage + "&filter=" + filter)
      : (url = this.url + "?page=" + numberPage);
    const resp = await fetch(url);
    if (!resp.ok)
      throw new Error(`Error http: ${resp.status} ${resp.statusText}`);

    const data = await resp.json();
    return data.results;
  }

  async getById(id: string): Promise<Product> {
    const url = this.url + "/" + id;
    const resp = await fetch(url);

    if (!resp.ok)
      throw new Error(`Error http: ${resp.status} ${resp.statusText}`);

    const data = await resp.json();
    return data.results;
  }

  async getByFilter(filter: string): Promise<ResultsGet> {
    const url = this.url + `/?filter=${filter}`;
    const resp = await fetch(url);

    if (!resp.ok)
      throw new Error(`Error http: ${resp.status} ${resp.statusText}`);
    const data = await resp.json();
    return data.results;
  }

  async patch(info: Partial<Product>, token: string): Promise<Product> {
    const url = this.url + "/" + info.id;
    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(info),
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = await resp.json();
    return data.results;
  }

  async post(product: AddedProduct, token: string): Promise<Product> {
    const url = this.url + "/add";
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = await resp.json();
    return data;
  }

  async delete(id: string, token: string): Promise<void> {
    const url = this.url + "/delete/" + id;
    const resp = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
  }
}
