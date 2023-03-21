/* eslint-disable testing-library/no-render-in-setup */
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { Product } from "../../models/product";
import { ProductsRepo } from "../../services/products/products.api.repo";
import { store } from "../../store/store";
import { Card } from "./card";

const mockProduct: Product = {
  name: "string",
  img: "string",
} as unknown as Product;

describe("Given a Card Product component", () => {
  describe("when it is rendered", () => {
    beforeEach(() => {
      ProductsRepo.prototype.getById = jest.fn();
      render(
        <Provider store={store}>
          <Router>
            <Card product={mockProduct}></Card>
          </Router>
        </Provider>
      );
    });

    test("Then the Product's name should be in the document", () => {
      const element1 = screen.getByText(mockProduct.name);
      expect(element1).toBeInTheDocument();
    });
    test("Then it should call the getbyId method", () => {
      const list = screen.getByRole("listitem");
      fireEvent.click(list);
      expect(ProductsRepo.prototype.getById).toHaveBeenCalled();
    });
  });
});
