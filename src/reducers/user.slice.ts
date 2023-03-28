import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../models/product.js";
import { User } from "../models/user.js";

// Ver si sumar mas tarde:
// type Status = "loading" | "idle" | "error";
// type State = {
//   userLoggingStatus: Status;
//   userLogged: {
//     token: string;
//     user: User;
//   } | null;
//   user: User;
// };

export type LoginData = {
  token: string;
  user: User;
};

export type State = {
  loggedUser: {
    token: string | null;
    user: User;
  };
  role: string | null;
};

const initialState: State = {
  loggedUser: {
    token: null,
    user: {} as User,
  },
  role: "user",
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSlice(state, action: PayloadAction<LoginData>) {
      state.loggedUser = {
        token: action.payload.token,
        user: action.payload.user,
      };
    },
    addToCartSlice(state, action: PayloadAction<Product>) {
      const { loggedUser } = state;
      const { user } = loggedUser;
      const { cart } = user;

      state.loggedUser = {
        ...loggedUser,
        user: {
          ...user,
          cart: [...cart, action.payload],
        },
      };
    },
  },
});

export const { loginSlice, addToCartSlice } = slice.actions;
export const usersReducer = slice.reducer;
