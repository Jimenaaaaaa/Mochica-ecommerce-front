import { SyntheticEvent, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../hooks/use.products";
import { AddedProduct, Product } from "../../models/product";
import { ProductsRepo } from "../../services/products/products.api.repo";
import styles from "./form.module.scss";

export function Form() {
  const navigate = useNavigate();
  const { id } = useParams();
  const repo = useMemo(() => new ProductsRepo(), []);
  const { products, productPatch, productPost } = useProducts(repo);
  const product = products.selectedProduct;

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const inputs = form.querySelectorAll("input");
    const select = form.querySelector("select");

    const filledProduct: Partial<Product> = {
      name: inputs[1].value,
      price: inputs[2].value,
      type: select!.value,
      cone: inputs[3].value,
      size: inputs[4].value,
      author: inputs[5].value,
    };

    const img = inputs[0].files?.item(0);

    if (id) {
      filledProduct.id = product.id;
      filledProduct.type
        ? (filledProduct.type = select!.value)
        : (filledProduct.type = product.type);
      productPatch(filledProduct, img!, product.img);
      navigate(`/details/${product.id}`);
    } else {
      productPost(filledProduct as AddedProduct, img!);
    }
  };

  return (
    <form
      className={styles.form}
      action=""
      onSubmit={handleSubmit}
      id="form"
      data-testid="form"
    >
      <div className={styles.form_line}>
        <label htmlFor="">Image: </label>
        <input type="file" name="image" id="image" />
      </div>
      <div className={styles.form_line}>
        <label htmlFor="">Name: </label>
        <input type="text" defaultValue={id ? product.name : ""} required />
      </div>
      <div className={styles.form_line}>
        <label htmlFor="">Price: </label>
        <input type="text" defaultValue={id ? product.price : ""} required />
      </div>
      <div className={styles.form_line}>
        <label htmlFor="pet-select">Type:</label>

        <select name="pets" id="pet-select">
          <option value="">--Choose an option--</option>
          <option value="mug">Mug</option>
          <option value="vase">Vase</option>
          <option value="glass">Glass</option>
          <option value="plate">Plate</option>
          <option value="bowl">Bowl</option>
          <option value="jewerly">Jewerly</option>
          <option value="other">Other</option>
        </select>
        {/* <label htmlFor="">Type: </label>
        <input type="text" defaultValue={id ? product.type : ""} required /> */}
      </div>
      <div className={styles.form_line}>
        <label htmlFor="">Cone: </label>
        <input type="text" defaultValue={id ? product.cone : ""} required />
      </div>
      <div className={styles.form_line}>
        <label htmlFor="">Size: </label>
        <input type="text" defaultValue={id ? product.size : ""} required />
      </div>
      <div className={styles.form_line}>
        <label htmlFor="">Artist: </label>
        <input type="text" defaultValue={id ? product.author : ""} required />
      </div>
      <div className={styles.button_div}>
        <button type="submit">SUBMIT</button>
      </div>
    </form>
  );
}
