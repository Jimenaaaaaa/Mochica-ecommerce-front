import { Product } from "./product";

// Tengo que a;adir el resto de info del user

export type LoginData = {
  email: string;
  passwd: string;
};

export type RegisterData = LoginData & {
  firstName: string;
  surname: string;
};

export type ProtoUser = RegisterData & {
  cart: Product[];
};

export type User = {
  id: string;
  token: string;
} & ProtoUser;
