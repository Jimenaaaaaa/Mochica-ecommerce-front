import { Product } from "./product";

export type LoginData = {
  email: string;
  password: string;
};

export type RegisterData = LoginData & {
  name: string;
  lastName: string;
};

export type ProtoUser = RegisterData & {
  cart: Product[];
};

export type User = {
  id: string;
  token: string;
} & ProtoUser;
