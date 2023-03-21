/* eslint-disable testing-library/no-await-sync-query */
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
});
