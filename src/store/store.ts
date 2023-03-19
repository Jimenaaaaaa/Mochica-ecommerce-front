import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "../reducers/user.slice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;