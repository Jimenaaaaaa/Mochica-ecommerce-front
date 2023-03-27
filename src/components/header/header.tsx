import { NavBar } from "../navbar/nav.bar";
import styles from "./header.module.scss";

export function Header() {
  return (
    <>
      <NavBar></NavBar>
      <div className={styles.title}>
        <img
          className={styles.title_image}
          src="https://firebasestorage.googleapis.com/v0/b/mochica-ceramics.appspot.com/o/mochica?alt=media&token=9b8072a0-c452-4aa7-8b8c-0d0015778a22"
          alt="mochica"
        />
      </div>
    </>
  );
}
