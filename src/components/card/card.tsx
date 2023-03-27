import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProductById } from "../../reducers/product.slice";
import { ProductsRepo } from "../../services/products/products.api.repo";
import { AppDispatch } from "../../store/store";
import styles from "./card.module.scss";

export function Card({ product }: any) {
  const dispatch = useDispatch<AppDispatch>();
  const repo = useMemo(() => new ProductsRepo(), []);

  const handleClick = async () => {
    const selectedProduct = await repo.getById(product.id);
    dispatch(getProductById(selectedProduct));
  };

  return (
    <Link to={`/details/${product.id}`} relative="path">
      <li className={styles.card} onClick={handleClick}>
        <div>
          <img src={product.img} alt="" />
        </div>
        <div className={styles.text}>
          <p className={styles.text_title}>{product.name}</p>
          <p className={styles.text_price}>{product.price}€</p>
        </div>
      </li>
    </Link>
  );
}
