import { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../models/product.js";
import { productsReducer, ProductState } from "./product.slice";

describe("Given the userSlice with payload and initial state mocked", () => {
  let mockInitialState: ProductState;
  let mockStateFilled: ProductState;
  let mockProduct: Product;
  let mockProductArray: Product[];

  beforeEach(() => {
    mockInitialState = {
      selectedProduct: {} as Product,
      products: [],
    };

    mockProduct = {
      id: "1",
      name: "taza",
    } as unknown as Product;

    mockProductArray = [
      {
        id: "1",
        name: "vasija",
      },
      {
        id: "2",
        name: "vasija",
      },
    ] as unknown as Product[];

    mockStateFilled = {
      selectedProduct: mockProduct,
      products: mockProductArray,
    };
  });

  describe("When the getAllAction is called", () => {
    test("Then, if the initial state products values are empty, it should return the payload in the products property of the state", () => {
      const getAllAction: PayloadAction<Product[]> = {
        type: "product/getAllProducts",
        payload: mockProductArray,
      };
      const result = productsReducer(mockInitialState, getAllAction);
      expect(result).toEqual({
        selectedProduct: {} as Product,
        products: mockProductArray,
      });
    });
  });

  describe("When the getByTagAction reducer is called", () => {
    test("Then, if the initial state products values are empty, it should return an array with the products", () => {
      const getByTagAction: PayloadAction<Product[]> = {
        type: "product/getByTagProducts",
        payload: mockProductArray,
      };
      const result = productsReducer(mockInitialState, getByTagAction);
      expect(result).toEqual({
        selectedProduct: {} as Product,
        products: mockProductArray,
      });
    });
  });

  describe("When the getByIdAction is called", () => {
    test("Then, if the initial state selected products values are empty, it should return one product in the selectedProduct property", () => {
      const getByIdAction: PayloadAction<Product> = {
        type: "product/getProductById",
        payload: mockProduct,
      };
      const result = productsReducer(mockInitialState, getByIdAction);
      expect(result).toEqual({
        selectedProduct: mockProduct,
        products: [],
      });
    });
  });

  describe("When the patchAction is called", () => {
    test("Then, if the initial state products values are empty, it should return the payload in the products property of the state", () => {
      const patchAction: PayloadAction<Product> = {
        type: "product/patchProduct",
        payload: mockProduct,
      };
      const result = productsReducer(mockStateFilled, patchAction);
      expect(result).toEqual({
        selectedProduct: mockProduct,
        products: [
          {
            id: "1",
            name: "taza",
          },
          {
            id: "2",
            name: "vasija",
          },
        ],
      });
    });
  });

  describe("When the postAction is called", () => {
    test("Then, if the initial state products values are empty, it should return the payload in the products property of the state", () => {
      const postAction: PayloadAction<Product> = {
        type: "product/postProduct",
        payload: mockProduct,
      };
      const result = productsReducer(mockInitialState, postAction);
      expect(result).toEqual({
        selectedProduct: {} as Product,
        products: [mockProduct],
      });
    });
  });

  describe("When the deleteAction is called", () => {
    test("Then, if the initial state products values are empty, it should return the payload in the products property of the state", () => {
      const deleteAction: PayloadAction<string> = {
        type: "product/deleteProduct",
        payload: "1",
      };
      const result = productsReducer(mockStateFilled, deleteAction);
      expect(result).toEqual({
        selectedProduct: mockProduct,
        products: [
          {
            id: "2",
            name: "vasija",
          },
        ],
      });
    });
  });
});
