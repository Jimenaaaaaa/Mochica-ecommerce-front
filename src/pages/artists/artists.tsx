import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../../hooks/use.products";
import { ProductsRepo } from "../../services/products/products.api.repo";
import styles from "./artists.module.scss";

type Artist = {
  author: string;
  img: string;
  id: string;
  itemName: string;
};

export default function Artists() {
  const repo = useMemo(() => new ProductsRepo(), []);
  const { products } = useProducts(repo);

  const artists = [] as any;
  const repeated = {} as any;

  products.products.forEach((obj) => {
    if (!repeated[obj.author]) {
      repeated[obj.author] = true;
      artists.push({
        author: obj.author,
        img: obj.img,
        id: obj.id,
        itemName: obj.name,
      });
    }
  });

  return (
    <div>
      <h1 className={styles.title}>Artists</h1>
      <ul className={styles.artist_ul}>
        {artists.map((item: Artist) => (
          <li key={item.id} className={styles.artist_list}>
            <Link to={`/artists/${item.author}`} relative="path">
              <img src={item.img} alt={item.itemName} />
              <p className={styles.author}>{item.author}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
