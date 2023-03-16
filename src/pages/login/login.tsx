import { SyntheticEvent } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LoginData } from "../../models/models/user";
import { login } from "../../reducers/slice";
import { UserRepo } from "../../services/users.api.repo";
import { AppDispatch } from "../../store/store";
import styles from "./login.module.scss";

export default function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const repo = new UserRepo();
  const handleSubmit = async (ev: SyntheticEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const formElement = ev.currentTarget;
    const formData: LoginData = {
      email: (formElement[0] as HTMLFormElement).value,
      password: (formElement[1] as HTMLFormElement).value,
    };

    const successLoginData = await repo.loginUser(formData);

    dispatch(login(successLoginData));
  };

  return (
    <>
      <div className={styles.enter}>
        <div className={styles.enter_options}>
          <Link to={`/login`}>
            <div>Login</div>
          </Link>
          <Link to={`/register`}>
            <div>Register</div>
          </Link>
        </div>
        <div className={styles.login}>
          <form action="" className={styles.login_form} onSubmit={handleSubmit}>
            <input type="text" placeholder="EMAIL" required />
            <input type="password" placeholder="PASSWORD" required />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
