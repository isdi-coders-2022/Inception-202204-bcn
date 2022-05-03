import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainDrinkFilter from "./MainDrinkFilter";
import { BrowserRouter } from "react-router-dom";

describe("Given a MainDrinkFilter function", () => {
  describe("When it receives a 'Non alcoholic drinks' text", () => {
    test("Then it should render a 'Non alcoholic drinks' text inside a paragraph", () => {
      const text = "Non alcoholic drinks";
      render(
        <BrowserRouter>
          <MainDrinkFilter text={text} />
        </BrowserRouter>
      );

      const expectedResult = screen.getByText(text);
      expect(expectedResult).toBeInTheDocument();
    });
  });
});
