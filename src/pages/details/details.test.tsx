/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { useProducts } from "../../hooks/use.products";
import { useUsers } from "../../hooks/use.users";
import { User } from "../../models/user";
import { ProductsRepo } from "../../services/products/products.api.repo";
import { UserRepo } from "../../services/users/users.api.repo";
import { store } from "../../store/store";
import Details from "./details";

jest.mock("../../hooks/use.products");
jest.mock("../../hooks/use.users");

let mockRepo = {
  getAll: jest.fn(),
  getByTag: jest.fn(),
  getById: jest.fn(),
  patch: jest.fn(),
  post: jest.fn(),
  delete: jest.fn(),
} as unknown as ProductsRepo;

let mockUserRepo = {} as unknown as UserRepo;

describe("Given Details page component", () => {
  beforeEach(async () => {
    (useProducts as jest.Mock).mockReturnValue({
      products: {
        selectedProduct: {
          name: "test",
          price: "test",
          cone: "test",
          size: "test",
          type: "test",
          author: "test",
          img: "test",
        },
        Products: [],
      },
      productDelete: jest.fn(),
    });

    (useUsers as jest.Mock).mockReturnValue({
      users: {
        loggedUser: {
          token: "123",
          user: {} as User,
        },
      },
      addToCart: jest.fn(),
    });

    await act(async () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Details></Details>
          </MemoryRouter>
        </Provider>
      );
    });
  });

  describe("When we render the component", () => {
    test('Then, the title "Details" should be in the document', async () => {
      const element = screen.getAllByRole("heading");
      expect(element[0]).toBeInTheDocument();
    });
  });

  describe("When click the button delete", () => {
    test("Then productDelete should have been called", async () => {
      const element = screen.getAllByRole("button");
      expect(element[1]).toBeInTheDocument();
      await act(async () => {
        await userEvent.click(element[1]);
        expect(useProducts(mockRepo).productDelete).toHaveBeenCalled();
      });
    });
  });
  describe("When click the button add", () => {
    test("Then addToCart should have been called", async () => {
      const element = screen.getAllByRole("button");
      expect(element[2]).toBeInTheDocument();
      await act(async () => {
        await userEvent.click(element[2]);
        expect(useUsers(mockUserRepo).addToCart).toHaveBeenCalled();
      });
    });
  });
});
