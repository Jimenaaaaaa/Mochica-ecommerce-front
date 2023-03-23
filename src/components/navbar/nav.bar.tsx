import { Link } from "react-router-dom";
import styles from "./nav.bar.module.scss";
export function NavBar() {
  // Aqui tiene que leer los datos del usuario y ver si es admin o no, si es admin tiene que aparecer
  // La opcion add product

  // Tengo que meterle los condicionales en el Profile de que si el usuario esta loggeado se cambie la pagina a la que redirige.

  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <Link to={`/products`} relative="path">
            <p>Products</p>
          </Link>
        </li>
        <li>
          <Link to={`/artists`} relative="path">
            <p>Artists</p>
          </Link>
        </li>
        <li>
          <Link to={`/about`} relative="path">
            <p>About</p>
          </Link>
        </li>
        <li>
          <Link to={`/profile`} relative="path">
            <p>Profile</p>
          </Link>
        </li>
        <li>
          <Link to={`/cart`} relative="path">
            <p>Cart</p>
          </Link>
        </li>
        <li>
          <Link to={`/add`} relative="path">
            <p>Add</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
