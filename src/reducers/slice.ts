import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models/models/user";

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

type LoginData = {
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
};

const initialState: State = {
  loggedUser: {
    token: null,
    user: {},
  },
  role: "user",
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginData>) {
      // Revisar el payload
      state.loggedUser = {
        token: action.payload.token,
        user: action.payload.user,
      };
    },
  },
});

export const { login } = slice.actions;
export const usersReducer = slice.reducer;
