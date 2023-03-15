import styles from "./login.module.scss";

export default function Login() {
  // Decir que lea si el usuario se quiere registar o no y cambiar el formulario. Maybe
  // Poniendolo en el estado?

  return (
    <>
      <div className={styles.enter}>
        <div className={styles.enter_options}>
          <div>Login</div>
          <div>Register</div>
        </div>
        <div className={styles.login}>
          <form action="" className={styles.login_form}>
            <input type="text" placeholder="EMAIL" required />
            <input type="text" placeholder="PASSWORD" required />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
