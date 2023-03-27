/* eslint-disable testing-library/no-await-sync-query */
import { AddedProduct } from "../../models/product";
import { ProductsRepo } from "./products.api.repo";

describe("Given the Product repo", () => {
  const mockProductRepo = new ProductsRepo();
  describe("When create a new instance and call method getAll", () => {
    test("Then it should return the values loaded", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({ results: { name: "Product" } }),
      });

      expect(mockProductRepo).toBeInstanceOf(ProductsRepo);
      const loadAll = await mockProductRepo.getAll();
      expect(loadAll).toEqual({ name: "Product" });
    });
  });

  describe("When it calls the method getById", () => {
    test("Then it should return the value of one Product", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({ results: { name: "Product" } }),
      });

      const getOneProduct = await mockProductRepo.getById("1");
      expect(getOneProduct).toEqual({ name: "Product" });
    });
  });

  describe("When the method getByTag is called", () => {
    test("Then it should return an array of Products", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({ results: { name: "Product" } }),
      });

      const getOneProduct = await mockProductRepo.getByFilter("1");
      expect(getOneProduct).toEqual({ name: "Product" });
    });
  });

  describe("When the method patch is called", () => {
    test("Then it should return the edited product", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({ results: { name: "Product" } }),
      });

      const patchProduct = await mockProductRepo.patch({
        name: "Product",
        id: "1",
      });
      expect(patchProduct).toEqual({ results: { name: "Product" } });
    });
  });

  describe("When the method post is called", () => {
    test("Then it should return the product", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({ results: { name: "Product" } }),
      });

      const addProduct = await mockProductRepo.post({
        name: "Product",
      } as AddedProduct);
      expect(addProduct).toEqual({ results: { name: "Product" } });
    });
  });

  describe("When the delete method is called", () => {
    test("Then it should return nothing", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(undefined),
      });

      const deleteProduct = await mockProductRepo.delete("1");
      expect(deleteProduct).toEqual(undefined);
    });
  });

  describe("When getAll method fails", () => {
    test("Then it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error found");
      const loadAll = mockProductRepo.getAll();
      await expect(loadAll).rejects.toThrow();
    });
  });

  describe("When getById method fails", () => {
    test("Then it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error found");
      const getOneProduct = mockProductRepo.getById("1");
      await expect(getOneProduct).rejects.toThrow();
    });
  });

  describe("When getByTag method fails", () => {
    test("Then it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error found");
      const getOneProduct = mockProductRepo.getByFilter("1");
      await expect(getOneProduct).rejects.toThrow();
    });
  });

  describe("When patch method fails", () => {
    test("Then it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error found");
      const patchProduct = mockProductRepo.patch({ name: "Product" });
      await expect(patchProduct).rejects.toThrow();
    });
  });

  describe("When post method fails", () => {
    test("Then it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error found");
      const patchProduct = mockProductRepo.post({
        name: "Product",
      } as AddedProduct);
      await expect(patchProduct).rejects.toThrow();
    });
  });

  describe("When delete method fails", () => {
    test("Then it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error found");
      const patchProduct = mockProductRepo.delete("1");
      await expect(patchProduct).rejects.toThrow();
    });
  });
});
