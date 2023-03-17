import { render, screen } from "@testing-library/react";
import About from "./about";

describe("Given the Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should appear in the document", () => {
      render(<About></About>);
      const title = screen.getByRole("heading");
      expect(title).toBeInTheDocument();
    });
  });
});
