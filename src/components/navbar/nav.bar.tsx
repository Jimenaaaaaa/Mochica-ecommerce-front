import { Link } from "react-router-dom";
import styles from "./nav.bar.module.scss";
export function NavBar() {
  // Aqui tiene que leer los datos del usuario y ver si es admin o no, si es admin tiene que aparecer
  // La opcion add product

  // Tengo que meterle los condicionales en el Profile de que si el usuario esta loggeado se cambie la pagina a la que redirige.

  return (
    <div className={styles.navbar}>
      <input type="checkbox" className={styles.toggler}></input>
      <div className={styles.hamburguer}>
        <div></div>
      </div>

      <div className={styles.menu}>
        <div>
          <ul className={styles.menu_ul}>
            <li className={styles.menu_poducts}>
              <Link to={`/products/all`} relative="path">
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

        <div className={styles.submenu}>
          <ul className={styles.submenu_ul}>
            <li>
              <Link to={`/products/mug`} relative="path">
                Mug
              </Link>
            </li>
            <li>
              <Link to={`/products/vase`} relative="path">
                Vase
              </Link>
            </li>
            <li>
              <Link to={`/products/glass`} relative="path">
                Glass
              </Link>
            </li>
            <li>
              <Link to={`/products/plate`} relative="path">
                Plate
              </Link>
            </li>
            <li>
              <Link to={`/products/bowl`} relative="path">
                Bowl
              </Link>
            </li>
            <li>
              <Link to={`/products/jewerly`} relative="path">
                Jewerly
              </Link>
            </li>
            <li>
              <Link to={`/products/other`} relative="path">
                Other
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
