import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks/use.products";
import { Product } from "../../models/product";
import { ProductsRepo } from "../../services/products/products.api.repo";
import { Card } from "../card/card";
import styles from "./cardlist.module.scss";

export default function Cardlist() {
  const { filter } = useParams();
  const repo = useMemo(() => new ProductsRepo(), []);
  const { products, productsGetAll } = useProducts(repo);

  const page = products.currentPage;
  const totalPages = products.totalPages;

  useEffect(() => {
    productsGetAll(filter, page);
  }, [filter, page, productsGetAll]);

  const handleClick = (number: number) => {
    productsGetAll(filter, number + products.currentPage);
  };

  return (
    <div data-testid="cardlist-component">
      <div className={styles.card_pages}>
        {page !== 1 ? (
          <p
            data-testid="button1"
            className={styles.button_prev}
            onClick={() => {
              handleClick(-1);
            }}
          >
            previous page
          </p>
        ) : (
          <div></div>
        )}

        {page < totalPages ? (
          <p
            data-testid="button2"
            className={styles.button_next}
            onClick={() => {
              handleClick(1);
            }}
          >
            next page
          </p>
        ) : (
          <div></div>
        )}
      </div>
      {/* <div className={styles.card_container}> */}
      <ul className={styles.card_list}>
        {products.products.map((item: Product) => (
          <Card product={item} key={item.id}></Card>
        ))}
      </ul>
      {/* </div> */}
    </div>
  );
}
