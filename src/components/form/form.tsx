import { SyntheticEvent, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks/use.products";
import { AddedProduct, Product } from "../../models/product";
import { ProductsRepo } from "../../services/products/products.api.repo";

export function Form() {
  const { id } = useParams();
  const repo = useMemo(() => new ProductsRepo(), []);
  const { products, productPatch, productPost } = useProducts(repo);
  const product = products.selectedProduct;

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const inputs = form.querySelectorAll("input");

    const filledProduct: Partial<Product> = {
      img: inputs[0].value,
      name: inputs[1].value,
      price: inputs[2].value,
      type: inputs[3].value,
      cone: inputs[4].value,
      size: inputs[5].value,
      author: inputs[6].value,
    };

    if (id) {
      filledProduct.id = product.id;
      productPatch(filledProduct);
    } else {
      productPost(filledProduct as AddedProduct);
    }
  };

  return (
    <form action="" onSubmit={handleSubmit} id="form" data-testid="form">
      <div className="form-line">
        <label htmlFor="">Image: </label>
        <input
          type="text"
          placeholder="https://www.example.png"
          defaultValue={product.img}
          required
        />
      </div>
      <div className="form-line">
        <label htmlFor="">Name: </label>
        <input type="text" defaultValue={product.name} required />
      </div>
      <div className="form-line">
        <label htmlFor="">Price: </label>
        <input type="text" defaultValue={product.price} required />
      </div>
      <div className="form-line">
        <label htmlFor="">Type: </label>
        <input type="text" defaultValue={product.type} required />
      </div>
      <div className="form-line">
        <label htmlFor="">Cone: </label>
        <input type="text" defaultValue={product.cone} required />
      </div>
      <div className="form-line">
        <label htmlFor="">Size: </label>
        <input type="text" defaultValue={product.size} required />
      </div>
      <div className="form-line">
        <label htmlFor="">Artist: </label>
        <input type="text" defaultValue={product.author} required />
      </div>
      <div className="button-div">
        <button type="submit">SUBMIT</button>
      </div>
    </form>
  );
}
