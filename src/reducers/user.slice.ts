import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  loggedUser:
    | {
        token: string | null;
        user: User;
      }
    | {};
  role: string | null;
  // users: User[];
};

const initialState: State = {
  loggedUser: {
    token: null,
    user: {},
  },
  role: "user",
  // users: [],
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSlice(state, action: PayloadAction<LoginData>) {
      // Revisar el payload
      state.loggedUser = {
        token: action.payload.token,
        user: action.payload.user,
      };
    },
  },
});

export const { loginSlice } = slice.actions;
export const usersReducer = slice.reducer;
