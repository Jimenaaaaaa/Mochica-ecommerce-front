import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../store/store";
import Products from "./products";

describe("Given the Products component", () => {
  describe("When it is rendered", () => {
    test("Then it should appear in the document", () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Products></Products>
          </MemoryRouter>
        </Provider>
      );
      const title = screen.getByRole("heading");
      expect(title).toBeInTheDocument();
    });
  });
});
