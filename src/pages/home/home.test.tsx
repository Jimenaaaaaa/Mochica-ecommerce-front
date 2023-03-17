import { render, screen } from "@testing-library/react";
import Home from "./home";

describe("Given the Home component", () => {
  describe("When it is rendered", () => {
    test("Then it should appear in the document", () => {
      render(<Home></Home>);
      const title = screen.getByRole("heading");
      expect(title).toBeInTheDocument();
    });
  });
});
