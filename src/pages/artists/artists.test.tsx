/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { act, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { useProducts } from "../../hooks/use.products";
import { Product } from "../../models/product";
import { ProductsRepo } from "../../services/products/products.api.repo";
import { store } from "../../store/store";
import Artists from "./artists";

jest.mock("../../hooks/use.products");
describe("Given the Artists component", () => {
  // useProducts: (repo: ProductsRepo) => {
  //   const products = [
  //     { author: "Author A", img: "imgA.jpg" },
  //     { author: "Author B", img: "imgB.jpg" },
  //     { author: "Author A", img: "imgC.jpg" },
  //     { author: "Author C", img: "imgD.jpg" },
  //   ];
  //   const productsGetAll = jest.fn(() => {});
  //   return { products, productsGetAll };
  // },

  beforeEach(async () => {
    (useProducts as jest.Mock).mockReturnValue({
      products: {
        products: [
          {
            id: "1",
            name: "test1",
          } as Product,
          {
            id: "2",
            name: "test2",
          } as Product,
        ],
      },
      productsGetAll: jest.fn(),
    });

    act(() => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Artists></Artists>
          </MemoryRouter>
        </Provider>
      );
    });
  });
  describe("When it is rendered", () => {
    test("Then it should appear in the document", () => {
      const title = screen.getByRole("heading");
      expect(title).toBeInTheDocument();
    });

    test("Then it should call the forEach method", async () => {
      const artistList = screen.getByRole("list");
      // const artistItems = screen.getAllByRole("listitem");
      // expect(artistItems).toHaveLength(3);
      expect(artistList).toContainElement(screen.getByText("Author A"));
      // expect(artistList).toContainElement(screen.getByText("Author B"));
      // expect(artistList).toContainElement(screen.getByText("Author C"));
    });
  });
});
