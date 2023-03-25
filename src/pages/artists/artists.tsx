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
  const { products} = useProducts(repo);

  // useEffect(() => {
  //   productsGetAll();
  // }, [productsGetAll]);

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
      <h1>Artists</h1>
      <ul key={artists[0].id}>
        {artists.map((item: Artist) => (
          <Link to={`/artists/${item.author}`} relative="path">
            <li key={item.id} className={styles.artist_list}>
              <img src={item.img} alt={item.itemName} />
              <p>{item.author}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
