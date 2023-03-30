import { useDispatch, useSelector } from "react-redux";
import { Product } from "../models/product";
import { LoginData, RegisterData } from "../models/user";
import { addToCartSlice, loginSlice } from "../reducers/user.slice";

import { UserRepo } from "../services/users/users.api.repo";

import { AppDispatch, RootState } from "../store/store";

export function useUsers(repo: UserRepo) {
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();

  const login = async (info: LoginData) => {
    try {
      const data = await repo.loginUser(info);
      dispatch(loginSlice(data));
    } catch (error) {}
  };

  const register = async (info: RegisterData) => {
    try {
      await repo.registerUser(info);
    } catch (error) {}
  };

  const addToCart = async (product: Product) => {
    try {
      dispatch(addToCartSlice(product));
    } catch (error) {}
  };

  return {
    users,
    login,
    register,
    addToCart,
  };
}

// Reducer -> Me deuelve el token
// Customhook -> le manda el token al slice
// Slice -> Actualiza el estado con el token
