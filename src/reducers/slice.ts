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
  isLoadingUsers: false;
  user: User;
};

type State = {
  isLogged: boolean;
  loggedUser:
    | {
        token: string | null;
        user: User;
      }
    | {};
  role: string | null;
};

const initialState: State = {
  isLogged: false,
  loggedUser: {
    token: null,
    user: {},
  },
  role: null,
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
