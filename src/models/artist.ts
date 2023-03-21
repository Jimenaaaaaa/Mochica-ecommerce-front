import { Product } from "./product";

export type Artist = {
  name: string;
  lastName: string;
  city: string;
  country: string;
  products: Product[];
};
