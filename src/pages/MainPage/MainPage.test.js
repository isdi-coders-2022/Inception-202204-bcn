import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainPage from "./MainPage";
import MainDrinkFilter from "../../components/MainDrinkFilter/MainDrinkFilter";
import { BrowserRouter } from "react-router-dom";

describe("Given a MainPage function", () => {
  describe("When it is invoked 1 time", () => {
    test("Then it should render an image inside an unordered list component", () => {
      render(
        <BrowserRouter>
          <MainPage>
            <MainDrinkFilter />
          </MainPage>
        </BrowserRouter>
      );

      const li = screen.getByRole("list");

      expect(li).toBeInTheDocument();
    });
  });
});
