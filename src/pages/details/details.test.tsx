/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { useProducts } from "../../hooks/use.products";
import { ProductsRepo } from "../../services/products/products.api.repo";

import Details from "./details";
jest.mock("../../hooks/use.products");

let mockRepo = {
  getAll: jest.fn(),
  getByTag: jest.fn(),
  getById: jest.fn(),
  patch: jest.fn(),
  post: jest.fn(),
  delete: jest.fn(),
} as unknown as ProductsRepo;

describe("Given Details page component", () => {
  beforeEach(async () => {
    (useProducts as jest.Mock).mockReturnValue({
      products: {
        selectedProduct: {},
        Products: [],
      },
      productDelete: jest.fn(),
    });

    await act(async () => {
      render(
        <MemoryRouter>
          <Details></Details>
        </MemoryRouter>
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
      await userEvent.click(element[1]);
      expect(useProducts(mockRepo).productDelete).toHaveBeenCalled();
    });
  });
});
