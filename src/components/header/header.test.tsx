import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../store/store";
import { Header } from "./header";

describe("Given the Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should appear in the document", () => {
      render(
        // eslint-disable-next-line react/jsx-no-undef
        <Provider store={store}>
          <MemoryRouter>
            <Header></Header>
          </MemoryRouter>
        </Provider>
      );
      const image = screen.getByRole("img");
      expect(image).toBeInTheDocument();
    });
  });
});
