import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../../hooks/use.products";
import { ProductsRepo } from "../../services/products/products.api.repo";
import styles from "./details.module.scss";

export default function Details() {
  const repo = useMemo(() => new ProductsRepo(), []);
  const { products, productDelete } = useProducts(repo);

  // Ponerle lo de que si esta en el carriton se actualice el boton
  // let isAdded = false;

  const handleDelete = () => {
    productDelete(products.selectedProduct.id);
  };

  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <>
      <div>
        <div className={styles.buttons}>
          <div>
            <Link to={`/products/all`} relative="path">
              <p> Go back </p>
            </Link>
          </div>
          <div>
            <Link to={`/edit/${products.selectedProduct.id}`} relative="path">
              <button> Edit </button>
            </Link>
            <Link to={`/products/all`} relative="path">
              <button onClick={handleDelete}> Delete </button>
            </Link>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.photo_data}>
            <div className={styles.main_image}>
              <img src={products.selectedProduct.img} alt="" />
            </div>
            <div className={styles.text}>
              <div>
                <h2>{products.selectedProduct.name}</h2>
                <p>{products.selectedProduct.author}</p>
                <p>{products.selectedProduct.price}€</p>
              </div>
              <p className={styles.user_feedback}>
                {isSubmit ? "Product added!" : ""}
              </p>
              <div className={styles.text_bottom}>
                <div>
                  <h3>About</h3>
                  <p>Cone: {products.selectedProduct.cone} </p>
                  <p>Size: {products.selectedProduct.size}</p>
                </div>

                <button
                  onClick={() => {
                    setIsSubmit(true);
                    setTimeout(() => {
                      setIsSubmit(false);
                    }, 1500);
                  }}
                >
                  {" "}
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
