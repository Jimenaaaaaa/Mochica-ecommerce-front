import { Artist } from "./artist";

export type AddedProduct = {
  name: string;
  price: number | string;
  cone: number | string;
  size: number | string;
  type: string;
  author: string;
  img: string;
};

export type Product = AddedProduct & {
  id: string;
};
