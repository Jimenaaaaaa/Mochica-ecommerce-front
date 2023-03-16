import { useDispatch } from "react-redux";
import { LoginData, RegisterData } from "../models/models/user";
import { login } from "../reducers/slice";
import { UserRepo } from "../services/users.api.repo";

import { AppDispatch } from "../store/store";

export function useUsers(repo: UserRepo) {
  const dispatch = useDispatch<AppDispatch>();

  const userLogin = async (info: LoginData) => {
    try {
      const data = await repo.loginUser(info);
      // Mirar si cambio lo que devuelve el back
      dispatch(login(data));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const userRegister = async (info: RegisterData) => {
    try {
      const data = await repo.registerUser(info);
      // Mirar si cambio lo que devuelve el back
      dispatch(login(data));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  return {
    userLogin,
    userRegister,
  };
}

// Reducer -> Me deuelve el token
// Customhook -> le manda el token al slice
// Slice -> Actualiza el estado con el token
