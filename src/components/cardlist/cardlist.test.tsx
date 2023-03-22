/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { act, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { useProducts } from "../../hooks/use.products";
import { Product } from "../../models/product";
import { store } from "../../store/store";
import Cardlist from "./cardlist";

jest.mock("../../hooks/use.products");
jest.mock("../card/card");

describe("Given Product List component", () => {
  beforeEach(async () => {
    (useProducts as jest.Mock).mockReturnValue({
      products: {
        Products: [
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

    await act(() => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Cardlist></Cardlist>
          </MemoryRouter>
        </Provider>
      );
    });
  });

  describe("When the Card is rendered", () => {
    test("Then it should return images", async () => {
      await act(async () => {
        const name = screen.getByTestId("cardlist-component");
        expect(name).toBeInTheDocument();
      });
    });
  });
});
