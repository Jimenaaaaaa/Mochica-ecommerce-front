import { useMemo } from "react";
import { useUsers } from "../../hooks/use.users";
import { UserRepo } from "../../services/users/users.api.repo";
import styles from "./cart.module.scss";

export default function Cart() {
  const repoUser = useMemo(() => new UserRepo(), []);
  const { users } = useUsers(repoUser);

  let price = 0;
  const { cart } = users.loggedUser.user;
  cart.forEach((item) => (price += Number(item.price)));

  return (
    <>
      <div className={styles.shop_container}>
        <h1 className={styles.shopping}>Shopping Cart</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.subtitle}>
          <p>Products</p>
          <p>Price</p>
        </div>
        <ul className={styles.products}>
          {cart ? (
            cart.map((item) => (
              <li key={item.id} className={styles.product}>
                <div>
                  <img src={item.img} alt={item.name} />
                </div>
                <p>{item.name}</p>
                <p>{item.price}€</p>
              </li>
            ))
          ) : (
            <p> No hay elementos en el carrito</p>
          )}
        </ul>
        <div className={styles.price}>
          <p className={styles.price_total}>Total price</p>
          <p>{price}€</p>
        </div>
      </div>
    </>
  );
}
