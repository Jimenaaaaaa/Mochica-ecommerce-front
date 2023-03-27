/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { useProducts } from "../../hooks/use.products";
import { Product } from "../../models/product";
import { ProductsRepo } from "../../services/products/products.api.repo";
import { store } from "../../store/store";
import Cardlist from "./cardlist";

jest.mock("../../hooks/use.products");
jest.mock("../card/card");

let mockRepo = {
  getAll: jest.fn(),
  getByTag: jest.fn(),
  getById: jest.fn(),
  patch: jest.fn(),
  post: jest.fn(),
  delete: jest.fn(),
} as unknown as ProductsRepo;

describe("Given Product List component", () => {
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
        currentPage: 2,
      },
      productsGetAll: jest.fn(),
      productsGetById: jest.fn(),
    });

    await act(async () => {
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
    test("Then it should return the list of cards", async () => {
      await act(async () => {
        const name = await screen.findByRole("list");
        expect(name).toBeInTheDocument();
        const elementNumbers = screen.getAllByRole("list");
        for (let i = 0; i < elementNumbers.length; i++) {
          expect(elementNumbers).toBeTruthy();
        }
      });
    });
  });

  describe("When the user clicks on the pagination buttons", () => {
    test("Then it should call the productsGetAll method", async () => {
      await act(async () => {
        const buttons = screen.getAllByRole("button");
        expect(buttons[0]).toBeInTheDocument();
        expect(buttons[1]).toBeInTheDocument();
        await userEvent.click(buttons[0]);
        await userEvent.click(buttons[1]);
        expect(useProducts(mockRepo).productsGetAll).toHaveBeenCalled();
      });
    });
  });
});
