import { render, screen } from "@testing-library/react";
import FormPage from "./FormPage";

describe("Given a FormPage component", () => {
  describe("When it's instanciated", () => {
    test("Then it sould render a form", () => {
      const expectedButton = "Save Cocktail";

      render(<FormPage />);

      const form = screen.getByRole("button");

      expect(form.textContent).toContain(expectedButton);
    });
  });
});
