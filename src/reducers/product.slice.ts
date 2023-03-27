import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../models/product";

export type ProductState = {
  selectedProduct: Product;
  products: Product[];
  currentPage: number;
  totalPages: number;
};

const initialState: ProductState = {
  selectedProduct: {} as Product,
  products: [],
  currentPage: 1,
  totalPages: 1,
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    getPageLength(state, action: PayloadAction<number>) {
      state.totalPages = action.payload;
    },
    getAllProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    getByTagProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    getProductById(state, action: PayloadAction<Product>) {
      state.selectedProduct = action.payload;
    },
    patchProduct(state, action: PayloadAction<Product>) {
      state.products = state.products.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    postProduct(state, action: PayloadAction<Product>) {
      state.products = [...state.products, action.payload];
    },
    deleteProduct(state, action: PayloadAction<string>) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const {
  getPage,
  getPageLength,
  getAllProducts,
  getByTagProducts,
  getProductById,
  patchProduct,
  postProduct,
  deleteProduct,
} = ProductSlice.actions;

export const productsReducer = ProductSlice.reducer;
