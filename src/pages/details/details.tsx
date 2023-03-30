import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../../hooks/use.products";
import { useUsers } from "../../hooks/use.users";
import { ProductsRepo } from "../../services/products/products.api.repo";
import { UserRepo } from "../../services/users/users.api.repo";
import styles from "./details.module.scss";

export default function Details() {
  const repo = useMemo(() => new ProductsRepo(), []);
  const repoUser = useMemo(() => new UserRepo(), []);

  const { products, productDelete } = useProducts(repo);
  const { users, addToCart } = useUsers(repoUser);

  const person = users.loggedUser;

  const handleDelete = () => {
    productDelete(products.selectedProduct.id, users.loggedUser.token!);
  };

  const handleAdd = () => {
    addToCart(products.selectedProduct);
  };

  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <>
      <div className={styles.detail_container}>
        <div className={styles.buttons}>
          <div>
            <Link to={`/products/all`} relative="path">
              <p className={styles.goback}> Go back </p>
            </Link>
          </div>
          <div>
            {person.token && (
              <>
                <Link
                  to={`/edit/${products.selectedProduct.id}`}
                  relative="path"
                >
                  <button> Edit </button>
                </Link>
                <Link to={`/products/all`} relative="path">
                  <button onClick={handleDelete}> Delete </button>
                </Link>
              </>
            )}
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.photo_data}>
            <div className={styles.main_image}>
              <img src={products.selectedProduct.img} alt="" />
            </div>
            <div className={styles.text}>
              <div className={styles.text_title}>
                <h2>{products.selectedProduct.name}</h2>
                <p>{products.selectedProduct.author}</p>
                <p className={styles.text_price}>
                  {products.selectedProduct.price}€
                </p>
              </div>
              <p className={styles.user_feedback}>
                {isSubmit ? "Product added!" : ""}
              </p>
              <div className={styles.text_bottom}>
                <div className={styles.text_bottom_text}>
                  <h3>About</h3>
                  <p>Cone: {products.selectedProduct.cone} </p>
                  <p>Size: {products.selectedProduct.size}</p>
                </div>
                {person.token && (
                  <button
                    onClick={() => {
                      handleAdd();
                      setIsSubmit(true);
                      setTimeout(() => {
                        setIsSubmit(false);
                      }, 1500);
                    }}
                  >
                    {" "}
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
