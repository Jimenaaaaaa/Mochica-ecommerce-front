import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../../hooks/use.products";
import { ProductsRepo } from "../../services/products/products.api.repo";
import styles from "./details.module.scss";

export default function Details() {
  const repo = useMemo(() => new ProductsRepo(), []);
  const { products, productDelete } = useProducts(repo);

  const handleDelete = () => {
    productDelete(products.selectedProduct.id);
  };

  return (
    <>
      <div>
        <Link to={`/products`} relative="path">
          <button> Previous page</button>
        </Link>
        <Link to={`/edit/${products.selectedProduct.id}`} relative="path">
          <button> Edit </button>
        </Link>
        <Link to={`/products`} relative="path">
          <button onClick={handleDelete}> Delete </button>
        </Link>

        <div className={styles.container}>
          <div className={styles.photo_data}>
            <div className={styles.main_image}>
              <img src={products.selectedProduct.img} alt="" />
            </div>
            <div>
              <div>
                <h2>Nombre: {products.selectedProduct.name}</h2>
                <p>Autor: Meterlo aqui</p>
                <p>{products.selectedProduct.price}euros</p>
              </div>
              <div>
                <h3>About</h3>
                <p>Cone: {products.selectedProduct.cone} </p>
                <p>Size: {products.selectedProduct.size}</p>
                <button> Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
