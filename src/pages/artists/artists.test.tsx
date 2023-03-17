import { render, screen} from "@testing-library/react";
import Artists from "./artists";

describe("Given the Artists component", () => {
  describe("When it is rendered", () => {
    test("Then it should appear in the document", () => {
      render(<Artists></Artists>);
      const title = screen.getByRole("heading");
      expect(title).toBeInTheDocument();
    });
  });
});
