import { NavBar } from "../navbar/nav.bar";
import styles from "./header.module.scss";

export function Header() {
  return (
    <>
      <NavBar></NavBar>
      <div className={styles.title}>
        <img className={styles.title_image} src="mochica.png" alt="" />
      </div>
    </>
  );
}
