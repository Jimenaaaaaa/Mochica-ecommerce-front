import { render, screen } from "@testing-library/react";
import Profile from "./profile";

describe("Given the Profile component", () => {
  describe("When it is rendered", () => {
    test("Then it should appear in the document", () => {
      render(<Profile></Profile>);
      const title = screen.getByRole("heading");
      expect(title).toBeInTheDocument();
    });
  });
});
