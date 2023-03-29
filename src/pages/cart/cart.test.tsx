import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../store/store";
import Cart from "./cart";

describe("Given the Cart component", () => {
  describe("When it is rendered", () => {
    test("Then it should appear in the document", () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Cart></Cart>
          </MemoryRouter>
        </Provider>
      );
      const title = screen.getByRole("heading");
      expect(title).toBeInTheDocument();
    });
  });
});
