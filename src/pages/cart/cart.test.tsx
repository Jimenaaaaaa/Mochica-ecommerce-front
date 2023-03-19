import { render, screen } from "@testing-library/react";
import Cart from "./cart";

describe("Given the Cart component", () => {
  describe("When it is rendered", () => {
    test("Then it should appear in the document", () => {
      render(<Cart></Cart>);
      const title = screen.getByRole("heading");
      expect(title).toBeInTheDocument();
    });
  });
});
