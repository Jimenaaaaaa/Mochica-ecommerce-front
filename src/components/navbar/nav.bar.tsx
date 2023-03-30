import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useUsers } from "../../hooks/use.users";
import { UserRepo } from "../../services/users/users.api.repo";
import styles from "./nav.bar2.module.scss";
export function NavBar() {
  const repo = useMemo(() => new UserRepo(), []);
  const { users } = useUsers(repo);

  const person = users.loggedUser;

  return (
    <nav className={styles.navbar}>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/mochica-ceramics.appspot.com/o/prueba?alt=media&token=803c1f70-b964-4583-846a-677d2a61d425"
        alt=""
        className={styles.burgermenu}
      />
      <ul className={styles.menu_ul}>
        <li className={styles.menu_poducts}>
          <Link to={`/products/all`} relative="path">
            <p>Products</p>
          </Link>
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
          {person.token ? (
            <Link to={`/profile`} relative="path">
              <p>Profile</p>
            </Link>
          ) : (
            <Link to={`/login`} relative="path">
              <p>Profile</p>
            </Link>
          )}
        </li>
        <li>
          {person.token && (
            <Link to={`/cart`} relative="path">
              <p>Cart</p>
            </Link>
          )}
        </li>
        <li>
          {person.token && (
            <Link to={`/add`} relative="path">
              <p>Add</p>
            </Link>
          )}
        </li>
      </ul>

      <ul className={styles.submenu2}>
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
    </nav>
  );
}
