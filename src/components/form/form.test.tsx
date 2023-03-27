/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { act, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { useProducts } from "../../hooks/use.products";
import { ProductsRepo } from "../../services/products/products.api.repo";

import { store } from "../../store/store";
import { Form } from "./form";

let mockParams = { id: "1" };
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => mockParams,
}));
jest.mock("../../hooks/use.products");

const mockRepo: ProductsRepo = {
  url: "testing",
  getAll: jest.fn(),
  getById: jest.fn(),
  getByFilter: jest.fn(),
  patch: jest.fn(),
  post: jest.fn(),
  delete: jest.fn(),
};
describe("Given the Form component", () => {
  let elements: HTMLElement[];

  beforeEach(async () => {
    (useProducts as jest.Mock).mockReturnValue({
      products: {
        selectedProduct: {
          img: "test",
          name: "test",
          price: "test",
          type: "test",
          cone: "test",
          size: "test",
          author: "test",
        },
      },
      productPatch: jest.fn(),
      productPost: jest.fn(),
    });

    await act(async () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Form></Form>
          </MemoryRouter>
        </Provider>
      );
    });
  });
  describe("When we render the form component", () => {
    test("Then the form should appear on the screen", () => {
      const element = screen.getByRole("button");
      expect(element).toBeInTheDocument();
    });
  });

  describe("When the user clicks the submit button and there is an existing product", () => {
    test("then it calls productPatch when submitting a product", async () => {
      elements = await screen.findAllByRole("button");
      await fireEvent.click(elements[0]);
      expect(useProducts(mockRepo).productPatch).toHaveBeenCalled();
    });
  });
});
