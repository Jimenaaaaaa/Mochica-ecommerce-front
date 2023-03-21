/* eslint-disable jsx-a11y/no-redundant-roles */
import { SyntheticEvent, useMemo } from "react";
import { Link } from "react-router-dom";
import { useUsers } from "../../hooks/use.users";
import { LoginData } from "../../models/user.js";
import { UserRepo } from "../../services/users/users.api.repo";
import styles from "./login.module.scss";

export default function Login() {
  const repo = useMemo(() => new UserRepo(), []);
  const { login } = useUsers(repo);
  const handleSubmit = async (ev: SyntheticEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const formElement = ev.currentTarget;
    const formData: LoginData = {
      email: (formElement.elements[0] as HTMLFormElement).value,
      password: (formElement.elements[1] as HTMLFormElement).value,
    };

    login(formData);
    formElement.reset();
  };

  return (
    <>
      <div className={styles.enter}>
        <div className={styles.enter_options}>
          <Link to={`/login`}>
            <h2>Login</h2>
          </Link>
          <Link to={`/register`}>
            <h2>Register</h2>
          </Link>
        </div>
        <div className={styles.login}>
          <form action="" className={styles.login_form} onSubmit={handleSubmit}>
            <input type="text" placeholder="EMAIL" required />
            <input
              type="password"
              placeholder="PASSWORD"
              role="textbox"
              required
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
