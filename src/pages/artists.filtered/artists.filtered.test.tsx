/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { act, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { useProducts } from "../../hooks/use.products";
import { Product } from "../../models/product";
import { store } from "../../store/store";
import ArtistsFiltered from "./artists.filtered";

jest.mock("../../hooks/use.products");
describe("Given the Artists component", () => {
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
            <ArtistsFiltered></ArtistsFiltered>
          </MemoryRouter>
        </Provider>
      );
    });
  });
  describe("When it is rendered", () => {
    test("Then it should appear in the document", () => {
      const title = screen.getAllByRole("listitem");
      expect(title[0]).toBeInTheDocument();
    });
  });
});
