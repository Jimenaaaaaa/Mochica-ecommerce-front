import { Artist } from "./artist";

export type Product = {
  name: string;
  price: number;
  cone: number;
  size: number;
  author: Artist;
  img: [];
};
