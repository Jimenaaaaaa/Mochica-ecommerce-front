import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newImage } from "../firebase/firebase-user";
import { AddedProduct, Product } from "../models/product";
import {
  deleteProduct,
  getAllProducts,
  getPage,
  getPageLength,
  getProductById,
  patchProduct,
  postProduct,
} from "../reducers/product.slice";

import { ProductsRepo } from "../services/products/products.api.repo";
import { AppDispatch, RootState } from "../store/store";

export function useProducts(repo: ProductsRepo) {
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();

  const productsGetAll = useCallback(
    async (filter?: string, number?: number) => {
      try {
        if (!number) number = 1;
        const data = await repo.getAll(number, filter);
        dispatch(getAllProducts(data.slicedData));
        dispatch(getPageLength(data.length));
        dispatch(getPage(data.currentPage));
      } catch (error) {
        // Lo voy a a;adir despues cuando gestione errores
        // console.error((error as Error).message)
      }
    },
    [dispatch, repo]
  );

  const productsGetById = useCallback(
    async (id: string) => {
      try {
        const data = await repo.getById(id);
        dispatch(getProductById(data));
      } catch (error) {
        // Lo voy a a;adir despues cuando gestione errores
        // console.error((error as Error).message)
      }
    },
    [dispatch, repo]
  );

  const productPatch = async (
    info: Partial<Product>,
    img: File,
    formImage: string
  ) => {
    try {
      await newImage(info, img);
      if (!img) {
        info.img = formImage;
      }
      const data = await repo.patch(info);
      dispatch(patchProduct(data));
    } catch (error) {
      // Lo voy a a;adir despues cuando gestione errores
      // console.error((error as Error).message);
    }
  };

  const productPost = async (product: AddedProduct, img: File) => {
    try {
      await newImage(product, img);
      const data = await repo.post(product);
      dispatch(postProduct(data));
    } catch (error) {
      // Lo voy a a;adir despues cuando gestione errores
      // console.error((error as Error).message);
    }
  };

  const productDelete = async (id: string) => {
    try {
      await repo.delete(id);
      dispatch(deleteProduct(id));
    } catch (error) {
      // Lo voy a a;adir despues cuando gestione errores
      // console.error((error as Error).message);
    }
  };

  return {
    products,
    productsGetAll,
    productsGetById,
    productPatch,
    productPost,
    productDelete,
  };
}
