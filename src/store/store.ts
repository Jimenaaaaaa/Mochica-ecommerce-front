import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "../reducers/user.slice";
import { productsReducer } from "../reducers/product.slice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
