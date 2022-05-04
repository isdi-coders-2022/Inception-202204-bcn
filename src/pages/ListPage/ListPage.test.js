import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AppContext from "../../store/context/AppContext";
import ListPage from "./ListPage";

describe("Given a ListPage component", () => {
  describe("When it's instantiated and it receives an array with 5 items", () => {
    test("Then it should render 1 li", () => {
      const listOfItems = [
        {
          strDrink: "Bernat",
          strCategory: "Alcoholic",
          strDrinkThumb: "public/images/home_icon.svg",
        },
      ];

      render(<ListPage />);

      const expectNumberOfLists = 1;
      const expectRendered = screen.getAllByRole("listitem");

      expect(expectRendered.length).toBe(expectNumberOfLists);
    });
  });
});
