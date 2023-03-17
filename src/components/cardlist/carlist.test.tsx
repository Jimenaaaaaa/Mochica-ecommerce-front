import { render, screen } from "@testing-library/react";
import Cardlist from "./cardlist";

describe("Given the Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should appear in the document", () => {
      render(<Cardlist></Cardlist>);
      const title = screen.getByRole("heading");
      expect(title).toBeInTheDocument();
    });
  });
});
