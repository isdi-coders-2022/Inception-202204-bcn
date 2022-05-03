import Formulary from "./Formulary";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Given a Formulary component", () => {
  describe("When it is called", () => {
    test("Then it should render a button with 'Save Cocktail' text", () => {
      const text = "Save Cocktail";
      render(<Formulary />);

      const expectedResult = screen.getByText(text);

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
