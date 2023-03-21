import { Product } from "../../models/product";

export interface ProductRepoStructure {
  getAll(): Promise<Product[]>;
  getById(): Promise<Product>;
  getByTag(tag: string): Promise<Product[]>;
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
}
