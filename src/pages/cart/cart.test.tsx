/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { act, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { useUsers } from "../../hooks/use.users";
import { store } from "../../store/store";
import Cart from "./cart";

jest.mock("../../hooks/use.users");

describe("Given the Cart component", () => {
  beforeEach(async () => {
    (useUsers as jest.Mock).mockReturnValue({
      users: {
        loggedUser: {
          token: "123",
          user: {
            cart: [],
          },
        },
      },
      addToCart: jest.fn(),
    });

    await act(async () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Cart></Cart>
          </MemoryRouter>
        </Provider>
      );
    });
  });
  describe("Given Details page component", () => {
    test("Then it should appear in the document", () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Cart></Cart>
          </MemoryRouter>
        </Provider>
      );
      const title = screen.getAllByRole("heading");
      expect(title[0]).toBeInTheDocument();
    });
  });
});
