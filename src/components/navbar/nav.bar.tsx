import styles from "./nav.bar.module.scss";
export function NavBar() {
  // Aqui tiene que leer los datos del usuario y ver si es admin o no, si es admin tiene que aparecer
  // La opcion add product

  return (
    <div className={styles.navbar}>
      <ul>
        <li>Products</li>
        <li>Artists</li>
        <li>About</li>
        <li>Profile</li>
        <li>Cart</li>
      </ul>
    </div>
  );
}
