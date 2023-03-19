import styles from "./nav.bar.module.scss";
export function NavBar() {
  // Aqui tiene que leer los datos del usuario y ver si es admin o no, si es admin tiene que aparecer
  // La opcion add product

  // Tengo que meterle los condicionales en el Profile de que si el usuario esta loggeado se cambie la pagina a la que redirige.


  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <a href={"/products"}>Products</a>
        </li>
        <li>
          <a href={"/artists"}>Artists</a>
        </li>
        <li>
          <a href={"/about"}>About</a>
        </li>
        <li>
          <a href={"/profile"}>Profile</a>
        </li>
        <li>
          <a href={"/cart"}>Cart</a>
        </li>
      </ul>
    </div>
  );
}
