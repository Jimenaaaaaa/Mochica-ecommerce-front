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

  useEffect(() => {
    productsGetAll(filter!, page);
  }, [filter, page, productsGetAll]);

  const handleClick = (number: number) => {
    debugger;
    productsGetAll(filter, number + products.currentPage);
  };

  return (
    <div data-testid="cardlist-component">
      {filter !== "all" && <div>{filter}</div>}
      <ul className={styles.card_list}>
        {products.products.map((item: Product) => (
          <Card product={item} key={item.id}></Card>
        ))}
      </ul>
      <div>
        {page !== 1 ? (
          <button
            className="style.productsButtonsPrev"
            onClick={() => {
              handleClick(-1);
            }}
          >
            -
          </button>
        ) : (
          <div></div>
        )}

        <button
          className=""
          onClick={() => {
            handleClick(1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
