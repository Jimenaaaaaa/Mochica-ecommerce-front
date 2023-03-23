import { useEffect, useMemo } from "react";
import { useProducts } from "../../hooks/use.products";
import { Product } from "../../models/product";
import { ProductsRepo } from "../../services/products/products.api.repo";
import { Card } from "../card/card";
import styles from "./cardlist.module.scss";

export default function Cardlist() {
  const repo = useMemo(() => new ProductsRepo(), []);
  const { products, productsGetAll } = useProducts(repo);

  useEffect(() => {
    productsGetAll();
  }, [productsGetAll]);

  return (
    <div data-testid="cardlist-component">
      <ul className={styles.card_list}>
        {products.products.map((item: Product) => (
          <Card product={item} key={item.id}></Card>
        ))}
      </ul>
      {/* Las flechas de next page y previous page */}
    </div>
  );
}
