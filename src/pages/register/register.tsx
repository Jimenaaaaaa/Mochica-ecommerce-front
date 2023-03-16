import { SyntheticEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterData } from "../../models/models/user";
import { UserRepo } from "../../services/users.api.repo";
import styles from "./register.module.scss";

export default function Register() {
  const navigate = useNavigate();
  const repo = new UserRepo();
  const handleSubmit = async (ev: SyntheticEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const formElement = ev.currentTarget;
    const formData: RegisterData = {
      name: (formElement[0] as HTMLFormElement).value,
      lastName: (formElement[1] as HTMLFormElement).value,
      email: (formElement[2] as HTMLFormElement).value,
      password: (formElement[3] as HTMLFormElement).value,
    };

    await repo.registerUser(formData);
    navigate("/login");
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
        <div className={styles.register}>
          <form
            action=""
            className={styles.register_form}
            onSubmit={handleSubmit}
          >
            <input type="text" placeholder="NAME" required />
            <input type="text" placeholder="LASTNAME" required />
            <input type="text" placeholder="EMAIL" required />
            <input type="password" placeholder="PASSWORD" required />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
