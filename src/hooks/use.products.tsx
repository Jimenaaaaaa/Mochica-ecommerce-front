import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddedProduct, Product } from "../models/product";
import {
  deleteProduct,
  getAllProducts,
  getByTagProducts,
  getProductById,
  patchProduct,
  postProduct,
} from "../reducers/product.slice";

import { ProductsRepo } from "../services/products/products.api.repo";
import { AppDispatch, RootState } from "../store/store";

export function useProducts(repo: ProductsRepo) {
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();

  const productsGetAll = useCallback(async () => {
    try {
      const data = await repo.getAll();
      dispatch(getAllProducts(data));
    } catch (error) {
      // Lo voy a a;adir despues cuando gestione errores
      // console.error((error as Error).message)
    }
  }, [dispatch, repo]);

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

  const productsGetByTag = async (tag: string) => {
    try {
      const data = await repo.getByTag(tag);
      dispatch(getByTagProducts(data));
    } catch (error) {
      // Lo voy a a;adir despues cuando gestione errores
      // console.error((error as Error).message);
    }
  };

  const productPatch = async (info: Partial<Product>) => {
    try {
      const data = await repo.patch(info);
      dispatch(patchProduct(data));
    } catch (error) {
      // Lo voy a a;adir despues cuando gestione errores
      // console.error((error as Error).message);
    }
  };

  const productPost = async (product: AddedProduct) => {
    try {
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
    productsGetByTag,
    productsGetById,
    productPatch,
    productPost,
    productDelete,
  };
}
