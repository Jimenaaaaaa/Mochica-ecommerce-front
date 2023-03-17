import { useDispatch, useSelector } from "react-redux";
import { LoginData, RegisterData } from "../models/models/user";
import { loginSlice } from "../reducers/user.slice";

import { UserRepo } from "../services/users.api.repo";

import { AppDispatch, RootState } from "../store/store";

export function useUsers(repo: UserRepo) {
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();

  const login = async (info: LoginData) => {
    try {
      const data = await repo.loginUser(info);
      // Mirar si cambio lo que devuelve el back
      dispatch(loginSlice(data));
    } catch (error) {
      // gestionar errores
      console.error((error as Error).message);
    }
  };

  const register = async (info: RegisterData) => {
    try {
      await repo.registerUser(info);
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  return {
    users,
    login,
    register,
  };
}

// Reducer -> Me deuelve el token
// Customhook -> le manda el token al slice
// Slice -> Actualiza el estado con el token
