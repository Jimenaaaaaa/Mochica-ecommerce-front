import { useParams } from "react-router-dom";
import Cardlist from "../../components/cardlist/cardlist";
import styles from "./products.module.scss";

export default function Products() {
  const { filter } = useParams();

  return (
    <div className={styles.product_container}>
      {filter === "all" ? (
        <h1 className={styles.products}>Products</h1>
      ) : (
        <h1 className={styles.products}>{filter}</h1>
      )}

      <Cardlist></Cardlist>
    </div>
  );
}
