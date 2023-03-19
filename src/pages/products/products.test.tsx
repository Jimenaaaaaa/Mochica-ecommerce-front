import { render, screen } from "@testing-library/react";
import Products from "./products";

describe("Given the Products component", () => {
  describe("When it is rendered", () => {
    test("Then it should appear in the document", () => {
      render(<Products></Products>);
      const title = screen.getByRole("heading");
      expect(title).toBeInTheDocument();
    });
  });
});
