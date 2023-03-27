import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/card/card";
import { useProducts } from "../../hooks/use.products";
import { Product } from "../../models/product";
import { ProductsRepo } from "../../services/products/products.api.repo";
import styles from "./artists.filtered.module.scss";

export default function ArtistsFiltered() {
  const { author } = useParams();
  const repo = useMemo(() => new ProductsRepo(), []);
  const { products, productsGetAll } = useProducts(repo);

  useEffect(() => {
    productsGetAll();
  }, [productsGetAll]);

  const selected = products.products.filter(
    (item) => item.author === author && item
  );

  return (
    <div data-testid="cardlist-component">
      <ul className={styles.artist_list}>
        {selected.map((item: Product) => (
          <Card product={item} key={item.id}></Card>
        ))}
      </ul>
      {/* Las flechas de next page y previous page */}
    </div>
  );
}
