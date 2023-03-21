import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../models/product";

export type ProductState = {
  selectedProduct: Product;
  Products: Product[];
};

const initialState: ProductState = {
  selectedProduct: {} as Product,
  Products: [],
};

export const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    getAllProducts(state, action: PayloadAction<Product[]>) {
      state.Products = action.payload;
    },
    getByTagProducts(state, action: PayloadAction<Product>) {
      state.Products = [action.payload];
    },
    getProductById(state, action: PayloadAction<Product>) {
      state.selectedProduct = action.payload;
    },
    // Falta añadir si se selecciona 1 sola Product
  },
});

export const { getAllProducts, getByTagProducts, getProductById } =
  ProductSlice.actions;

export const productsReducer = ProductSlice.reducer;
