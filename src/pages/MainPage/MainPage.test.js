import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainPage from "./MainPage";
import MainDrinkFilter from "../../components/MainDrinkFilter/MainDrinkFilter";

describe("Given a MainPage function", () => {
  describe("When it is invoked 1 time", () => {
    test("Then it should render an image inside an unordered list component", () => {
      render(
        <MainPage>
          <MainDrinkFilter />
        </MainPage>
      );

      const li = screen.getByRole("list");
      expect(li).toBeInTheDocument();
    });
  });
});
