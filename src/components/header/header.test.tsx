import { render, screen } from "@testing-library/react";
import { Header } from "./header";

describe("Given the Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should appear in the document", () => {
      render(<Header></Header>);
      const image = screen.getByRole("img");
      expect(image).toBeInTheDocument();
    });
  });
});
