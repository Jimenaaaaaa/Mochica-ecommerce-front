/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import { act, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Product } from "../models/product";
import { ProductsRepo } from "../services/products/products.api.repo";

import { store } from "../store/store";
import { useProducts } from "./use.products";

describe("Given the useProducts Custom Hook, an ApiRepo and a given component", () => {
  let mockInfo: Product;

  let mockRepo = {
    getAll: jest.fn(),
    getByTag: jest.fn(),
    getById: jest.fn(),
    patch: jest.fn(),
    post: jest.fn(),
    delete: jest.fn(),
  } as unknown as ProductsRepo;

  beforeEach(async () => {
    mockInfo = {
      email: "test",
      password: "test",
    } as unknown as Product;

    const mockId = "id";

    const TestComponent = function () {
      const {
        productsGetAll,
        productsGetByTag,
        productsGetById,
        productPatch,
        productPost,
        productDelete,
      } = useProducts(mockRepo);

      return (
        <>
          <button onClick={() => productsGetAll()}>getAll</button>
          <button onClick={() => productsGetById(mockId)}>getById</button>
          <button onClick={() => productsGetByTag("tag")}>getByTag</button>
          <button onClick={() => productPatch(mockInfo)}>patch</button>
          <button onClick={() => productPost(mockInfo)}>post</button>
          <button onClick={() => productDelete(mockId)}>delete</button>
        </>
      );
    };
    await act(() =>
      render(
        <Provider store={store}>
          <TestComponent></TestComponent>
        </Provider>
      )
    );
  });
  describe("When the TestComponent is rendered", () => {
    test("Then, the button must be in the document", async () => {
      const elements = await screen.findAllByRole("button");
      expect(elements[0]).toBeInTheDocument();
    });
  });

  describe("When the TestComponent is showed and the GetAll button is clicked", () => {
    test("Then, the productsGetAll method should be called", async () => {
      const elements = await screen.findAllByRole("button");
      await act(async () => {
        await fireEvent.click(elements[0]);
      });
      expect(mockRepo.getAll).toHaveBeenCalled();
    });
  });

  describe("When the TestComponent is rendered and the getById button is clicked", () => {
    test("Then, the productsgetById function should be called", async () => {
      const buttons = await screen.findAllByRole("button");
      await act(async () => {
        await fireEvent.click(buttons[1]);
      });
      expect(mockRepo.getById).toHaveBeenCalled();
    });
  });

  describe("When the getByTag button is clicked", () => {
    test("Then, the productsgetByTag function should have been called", async () => {
      const elements = await screen.findAllByRole("button");
      await fireEvent.click(elements[2]);
      expect(mockRepo.getByTag).toHaveBeenCalled();
    });
  });

  describe("When the Patch button is clicked", () => {
    test("Then, the Patch function should have been called", async () => {
      const elements = await screen.findAllByRole("button");
      await fireEvent.click(elements[3]);
      expect(mockRepo.patch).toHaveBeenCalled();
    });
  });

  describe("When the Post is showed and the GetAll button is clicked", () => {
    test("Then, the Post method should be called", async () => {
      const elements = await screen.findAllByRole("button");
      await act(async () => {
        await fireEvent.click(elements[4]);
      });
      expect(mockRepo.post).toHaveBeenCalled();
    });
  });
  describe("When the delete button is clicked", () => {
    test("Then, the Delete function should have been called", async () => {
      const elements = await screen.findAllByRole("button");
      await fireEvent.click(elements[5]);
      expect(mockRepo.delete).toHaveBeenCalled();
    });
  });
});
 