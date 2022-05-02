import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given Button component", () => {
  describe("When instantiated", () => {
    test("Then it should render a button", () => {
      render(<Button />);
      const testButton = screen.getByRole("button");

      expect(testButton).toBeInTheDocument("button");
    });
  });
});
