import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../store/store";
import Profile from "./profile";

describe("Given the Profile component", () => {
  describe("When it is rendered", () => {
    test("Then it should appear in the document", () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Profile></Profile>
          </MemoryRouter>
        </Provider>
      );
      const title = screen.getByRole("heading");
      expect(title).toBeInTheDocument();
    });
  });
});
