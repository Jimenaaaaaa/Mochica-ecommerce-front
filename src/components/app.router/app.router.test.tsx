import { MemoryRouter as Router } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { AppRouter } from "./app.router";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../../store/store";

describe("Given AppRouter component", () => {
  const prepareTestFunction = (number: number) => {
    render(
      <Provider store={store}>
        <Router
          initialEntries={[
            "/register",
            "/login",
            "/products/:filter",
            "/artists",
            "/about",
            "/profile",
          ]}
          initialIndex={number}
        >
          <AppRouter></AppRouter>
        </Router>
      </Provider>
    );
  };

  describe('When it is render and the path is "/register"', () => {
    test('Then, the "email" input should be in the document', async () => {
      await waitFor(async () => prepareTestFunction(0));
      const element = await screen.findAllByRole("textbox");
      expect(element[0]).toBeInTheDocument();
    });
  });

  describe('When it is render and the path is "/login"', () => {
    test('Then, the "name" input should be in the document', async () => {
      await waitFor(async () => prepareTestFunction(1));
      const element = await screen.findAllByRole("textbox");
      expect(element[0]).toBeInTheDocument();
    });
  });

  describe('When it is render and the path is "/products"', () => {
    test('Then, the "products" title should be in the document', async () => {
      await waitFor(async () => prepareTestFunction(2));
      const element = await screen.findByRole("heading");
      expect(element).toBeInTheDocument();
    });
  });

  describe('When it is render and the path is "/artists"', () => {
    test('Then, the "Artist" title should be in the document', async () => {
      await waitFor(async () => prepareTestFunction(3));
      const element = await screen.findByRole("heading");
      expect(element).toBeInTheDocument();
    });
  });

  describe('When it is render and the path is "/about"', () => {
    test('Then, the "Artist" title should be in the document', async () => {
      await waitFor(async () => prepareTestFunction(4));
      const element = await screen.findByRole("img");
      expect(element).toBeInTheDocument();
    });
  });
  describe('When it is render and the path is "/profile"', () => {
    test('Then, the "Artist" title should be in the document', async () => {
      await waitFor(async () => prepareTestFunction(5));
      const element = await screen.findByRole("heading");
      expect(element).toBeInTheDocument();
    });
  });
});
