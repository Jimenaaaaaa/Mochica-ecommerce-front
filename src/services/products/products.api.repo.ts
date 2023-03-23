import { AddedProduct, Product } from "../../models/product";

export interface ProductRepoStructure {
  getAll(): Promise<Product[]>;
  getById(): Promise<Product>;
  getByTag(tag: string): Promise<Product[]>;
  patch(info: Partial<Product>): Promise<Product>;
}

export class ProductsRepo {
  url: string;
  constructor() {
    this.url = "http://localhost:4500/products";
  }

  async getAll(): Promise<Product[]> {
    const resp = await fetch(this.url);
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

  async getByTag(tag: string): Promise<Product[]> {
    // Mirar luego en el back como hacerlo
    const url = this.url + "/tag/" + tag;
    const resp = await fetch(url);

    if (!resp.ok)
      throw new Error(`Error http: ${resp.status} ${resp.statusText}`);
    const data = await resp.json();
    return data.results;
  }

  async patch(info: Partial<Product>): Promise<Product> {
    const url = this.url + "/" + info.id;
    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(info),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = await resp.json();
    return data;
  }

  async post(product: AddedProduct): Promise<Product> {
    const url = this.url + "/add";
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = await resp.json();
    return data;
  }

  async delete(id: string): Promise<void> {
    const url = this.url + "/delete/" + id;
    const resp = await fetch(url, {
      method: "DELETE",
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
  }
}
